const Router = require("@koa/router");
const { upLoadFile } = require("../utils");
const fs = require("fs");
const path = require("path");
const gm = require("gm");
const mime = require("mime-types"); //需npm安装
let axios = require("axios");
var URL = require("url").URL;

const router = new Router();
router.post("/uploadfile", async (ctx, next) => {
  // 上传单个文件
  const file = ctx.request.files.file;
  // 获取上传文件
  await upLoadFile(file);
  return (ctx.body = "上传成功！");
});

// 递归创建目录
async function mkdirs(dirname, callback) {
  let isExi = await isExists(dirname);
  if (isExi) {
    callback();
  } else {
    // console.log(path.dirname(dirname));
    mkdirs(path.dirname(dirname), function () {
      fs.mkdir(dirname, callback);
      console.log("在" + path.dirname(dirname) + "目录创建好" + dirname + "目录");
    });
  }
}

function mkdirFormFile(file) {
  let dirPath = file.substr(0, file.lastIndexOf("/"));
  return new Promise(async (resolve, reject) => {
    let isExi = await isExists(dirPath);
    if (isExi) {
      resolve();
      return;
    }
    mkdirs(dirPath, (err) => {
      if (!err) {
        resolve();
      } else {
        reject(err);
      }
    });
  });
}

function isExists(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, function (err, stats) {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

router.get("/thumb", async (ctx, next) => {
  let { img, size } = ctx.request.query;
  //xs sm md
  let sizeObj = {
    xs: 200,
    sm: 400,
    md: 600,
  };
  let handleImg = img;
  if (img.startsWith("http")) {
    let pathname = new URL(img).pathname;
    handleImg = pathname;
  }

  let filePath = path.join(__dirname, "../static", handleImg);
  let setWidth = sizeObj[size];
  let setHeight = setWidth;
  let resImg = path.join("/thumbnail", size, handleImg);
  let outputPath = path.join(__dirname, "../static", resImg);

  //缩略图存在 直接返回
  let isExi = await isExists(outputPath);
  if (!isExi) {
    if (img.startsWith("http")) {
      let pathnames = handleImg.split("/");
      let fileName = pathnames.pop();
      filePath = path.join(__dirname, "../static/cache", fileName);
      await new Promise(function (resolve, reject) {
        //下载图片
        axios({
          method: "GET",
          url: img,
          responseType: "stream",
        }).then(({ data }) => {
          data.pipe(
            fs.createWriteStream(filePath).on("close", (err) => {
              if (err) {
                console.log("写入失败", err);
              }
              resolve();
            })
          );
        });
      });
    }

    await mkdirFormFile(outputPath);
    await new Promise((resolve, reject) => {
      gm(filePath)
        .size(function (err, size) {
          if (!err) {
            let scale = size.width / size.height;
            setHeight = setWidth / scale;
          } else {
            console.error(err);
          }
        })
        .resize(setWidth, setHeight)
        .write(outputPath, (err) => {
          if (!err) {
            resolve(outputPath);
          } else {
            reject(err);
          }
        });
    });
  }
  const src = fs.createReadStream(outputPath);
  ctx.type = "image/jpg";
  ctx.set("Cache-Control", "max-age=2592000");
  ctx.status = 200;
  ctx.body = src;
});

module.exports = router;
