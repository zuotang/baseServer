const Router = require("@koa/router");
const { upLoadFile, getPostList, getPost, pugFun } = require("../utils");
const gm = require("gm");
const stream = require("stream");
const path = require("path");
const router = new Router();
const fs = require("fs");

var exec = require("child_process").exec;

function getClientIP(ctx) {
  return (
    ctx.headers["x-forwarded-for"] || // 判断是否有反向代理 IP
    ctx.headers["x-real-ip"]
  );
}

router.get("/head", async (ctx, next) => {
  ctx.body = {
    headers: ctx.headers,
    ip: getClientIP(ctx),
  };
});

router.get("/add", async (ctx, next) => {
  return await ctx.render("editPost", {
    ...pugFun,
    ...ctx.commonRender,
    title: "添加文章",
    path: ctx.path,
  });
});

router.get("/list", async (ctx, next) => {
  let posts = await getPostList({ ctx });
  return await ctx.render("postList", {
    ...pugFun,
    ...ctx.commonRender,
    title: "图片列表页",
    ...posts,
    path: ctx.path,
  });
});

router.get("/list_json", async (ctx, next) => {
  let posts = await getPostList({ ctx });
  ctx.body = {
    ...posts,
    path: ctx.path,
  };
});

router.get("/recycle", async (ctx, next) => {
  if (!ctx.request.query.sort) ctx.request.query.sort = "update";
  let posts = await getPostList({ ctx, status: "-1" });
  return await ctx.render("postList", {
    ...pugFun,
    ...ctx.commonRender,
    title: "回收站",
    ...posts,
    path: ctx.path,
  });
});

router.get("/top", async (ctx, next) => {
  let posts = await getPostList({ ctx, isTop: true });
  return await ctx.render("postList", {
    ...pugFun,
    ...ctx.commonRender,
    title: "图片列表页",
    ...posts,
    path: ctx.path,
  });
});

//添加文章
router.post("/add", async (ctx, next) => {
  let { title, content } = ctx.request.body;
  let coverFile = await upLoadFile(ctx.request.files.cover);
  let res = await ctx.sql("INSERT INTO post (title,content,cover) VALUES (?,?,?)", [title, content, coverFile.url]);
  ctx.redirect(`/post/post/${res.insertId}`);
});

//添加top
router.get("/addtop/:id", async (ctx, next) => {
  let id = ctx.params.id;
  await ctx.sql("UPDATE post as p set p.top=p.top+1  WHERE id=?", [id]);
  let res = await ctx.sqlOne("SELECT top FROM post WHERE id=?", [id]);
  ctx.body = {
    value: res.top,
  };
  //await ctx.render("goback");
});

//删除top
router.get("/deltop/:id", async (ctx, next) => {
  let id = ctx.params.id;
  await ctx.sqlOne("UPDATE post as p set p.top=0 WHERE id=?", [id]);
  ctx.body = {
    value: "",
  };
});
//删除图片
router.get("/delphoto", async (ctx, next) => {
  let src = ctx.request.query.src;
  await ctx.sql("DELETE FROM `photo` where src=?", [src]);
  ctx.body = {
    value: "",
  };
  //await ctx.render("goback");
});

//删除文章
router.get("/del/:id", async (ctx, next) => {
  let id = ctx.params.id;
  // await ctx.sql("DELETE FROM post  where id=?", [id]);
  // await ctx.sql("DELETE FROM photo  where pid=?", [id]);
  await ctx.sql("UPDATE post set status=? where id=?", [-1, id]);
  await ctx.sql("UPDATE photo set status=? where pid=?", [-1, id]);
  ctx.body = {
    messign: "删除成功",
  };
});

router.get("/post/:id", async (ctx, next) => {
  const postId = ctx.params.id;
  let post = await ctx.sqlOne("SELECT post.*,u.name,u.nickname,u.avatar FROM post  LEFT JOIN user u on post.uid=u.id where post.id=? ", [postId]);
  post = await getPost(ctx, post);
  return await ctx.render("post", {
    post: post,
    ...pugFun,
    ...ctx.commonRender,
    title: "详情",
  });
});

router.get("/get_image_info", async (ctx, next) => {
  let photos = await ctx.sql("SELECT id,src FROM photo where width is NULL and status>=0 LIMIT 5000");
  for (let row of photos) {
    await new Promise((resolve, reject) => {
      let filePath = path.join(__dirname, "../static", row.src);
      gm(filePath).size(function (err, size) {
        if (!err) {
          ctx
            .sql("UPDATE photo set width=?,height=? WHERE id=?", [+size.width, +size.height, +row.id])
            .then((res) => {
              resolve();
            })
            .catch((e) => {
              console.error(e);
              resolve();
            });
        } else {
          console.error(err);
          resolve();
        }
      });
    });
  }
  ctx.body = "处理成功";
});

router.get("/get_thumb_info", async (ctx, next) => {
  let posts = await ctx.sql("SELECT id,thumb FROM post where thumb is NOT NULL and thumbWidth is NULL and status>=0 LIMIT 5000");
  for (let row of posts) {
    await new Promise((resolve, reject) => {
      let filePath = path.join(__dirname, "../static", row.thumb);
      gm(filePath).size(function (err, size) {
        if (!err) {
          ctx
            .sql("UPDATE post set thumbWidth=?,thumbHeight=? WHERE id=?", [+size.width, +size.height, +row.id])
            .then((res) => {
              resolve();
            })
            .catch((e) => {
              console.error(e);
              resolve();
            });
        } else {
          console.error(err);
          resolve();
        }
      });
    });
  }
  ctx.body = "处理成功";
});

router.get("/focusUpload/:id", async (ctx, next) => {
  const postId = ctx.params.id;
  let post = await ctx.sqlOne("SELECT post.*,u.name,u.nickname,u.avatar FROM post  LEFT JOIN user u on post.uid=u.id where post.id=? ", [postId]);
  post = await getPost(ctx, post);
  return await ctx.render("focus", {
    title: "图片处理",
    post,
  });
});

router.post("/focusUpload/:id", async (ctx, next) => {
  // 上传单个文件
  const file = ctx.request.files.file;
  // 获取上传文件
  let upFile = await upLoadFile(file);
  const postId = ctx.params.id;
  //获取番号
  let { designation } = await ctx.sqlOne("SELECT designation FROM post WHERE id=?", [postId]);

  let savePath = path.join(__dirname, "../static/focus/", designation + ".png");
  let cmd = `curl -H 'X-API-Key: 8Hah4g6CxCa7k3CvCwxV3iWN'                      \
    -F 'image_file=@${upFile.filePath}'                \
    -f https://api.remove.bg/v1.0/removebg -o ${savePath}`;
  await new Promise((resolve, reject) => {
    exec(cmd, function (error, stdout, stderr) {
      if (error) {
        console.log("图片处理错误");
        // 获取命令执行的输出
        console.log(error, stdout, stderr);
      }
      resolve();
    });
  });
  await ctx.sql("UPDATE post SET focus=CONCAT('/focus/',designation,'.png') WHERE id=?", [postId]);

  ctx.body = { res: "处理完成", data: ["/focus/" + designation + ".png"] };
});

//封面自动化处理 key ECzWbdjqmq3qJrXrAfVD9mdL
router.get("/focus/:id", async (ctx, next) => {
  const postId = ctx.params.id;
  //获取番号
  let { designation } = await ctx.sqlOne("SELECT designation FROM post WHERE id=?", [postId]);

  let imgPath = path.join(__dirname, "../static/focus/image-removebg-preview.png");
  let savePath = path.join(__dirname, "../static/focus/", designation + ".png");
  // let cmd = `curl -H 'X-API-Key: ECzWbdjqmq3qJrXrAfVD9mdL'                      \
  //   -F 'image_file=@${imgPath}'                \
  //   -f https://api.remove.bg/v1.0/removebg -o ${savePath}`;
  // await new Promise((resolve, reject) => {
  //   exec(cmd, function (error, stdout, stderr) {
  //     // 获取命令执行的输出
  //     console.log(error, stdout, stderr);
  //     resolve();
  //   });
  // });
  fs.renameSync(imgPath, savePath);
  await ctx.sql("UPDATE post SET focus=CONCAT('/focus/',designation,'.png') WHERE id=?", [postId]);
  //写入数据库
  ctx.body = "处理完成";
});
module.exports = router;
