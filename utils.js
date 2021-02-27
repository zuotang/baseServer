const fs = require("fs");
const path = require("path");
const dayjs = require("dayjs");
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
function upLoadFile(file) {
  //console.log(file);

  const ext = path.extname(file.name);
  let fileTime = +new Date(file.lastModifiedDate);
  let fileName = `${fileTime}_${parseInt(Math.random() * 10000)}${ext}`;
  const baseDir = path.join(__dirname, "static/upload");
  const DayStr = dayjs(fileTime).format("YYYY-MM-DD");
  const DayDir = path.join(baseDir, DayStr);
  //根据日期创建目录
  if (!fs.existsSync(DayDir)) {
    fs.mkdirSync(DayDir);
  }
  // 创建可读流
  const reader = fs.createReadStream(file.path);

  let filePath = DayDir + `/${fileName}`;

  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  return new Promise((resove, reject) => {
    reader.pipe(upStream);
    reader.on("end", () => {
      resove({
        url: `/upload/${DayStr}/${fileName}`,
        name: fileName,
        path: filePath,
      });
    });
    reader.on("error", (err) => {
      throw err;
    });
  });
}
exports.upLoadFile = upLoadFile;

function whereHandle() {
  let whereStr = "";
  let isStart = true;
  function checkStart(str, logic) {
    if (!str) return;
    if (isStart) {
      whereStr = "WHERE " + str;
      isStart = false;
    } else {
      whereStr = `${whereStr} ${logic} ${str}`;
    }
  }
  return {
    and: (str) => {
      checkStart(str, "AND");
    },
    or: (str) => {
      checkStart(str, "OR");
    },
    toString: () => {
      return whereStr;
    },
  };
}
exports.whereHandle = whereHandle;

function getQueryString(ctx) {
  let querystring = ctx.request.querystring.replace(/[\&]{0,1}page\=\d+[\&]{0,1}/gi, "") || "";
  return querystring;
}
exports.getQueryString = getQueryString;

async function getPost(ctx, post) {
  let actor = await ctx.sql(`SELECT a.* FROM actor a LEFT JOIN actor_post ap on a.id=ap.aid where ap.pid=?`, [post.id]);
  let photos = await ctx.sql("SELECT src,width,height FROM photo WHERE pid=?", [post.id]);
  post.photos = photos;
  post.pubdate = dayFormat(post.pubdate);
  post.actor = actor;
  return post;
}

exports.getPost = getPost;

async function getPostList({ ctx, uid, isTop = false, status = "0", query }) {
  let { page = 0, page_size = 20, search, sort = "id", type } = Object.assign({}, ctx.request.query, query);

  page = +page;
  page_size = +page_size;

  let whereObj = whereHandle();
  whereObj.and(uid && `uid=${uid}`);
  whereObj.and(search && `(content LIKE  '\%${search}\%' or title LIKE  '\%${search}\%' or tags LIKE  '\%${search}\%')`);
  whereObj.and(type == "video" && `video IS NOT NULL`);
  whereObj.and(`status = ${status}`);
  if (isTop) {
    whereObj.and(`p.top > 0`);
    sort = "p.top";
  }
  where = whereObj.toString();

  let { num } = await ctx.sqlOne(`SELECT count(p.id) as num FROM post p LEFT JOIN user u on p.uid=u.id ${where}`);
  let totalPage = parseInt(num / page_size);

  let start = page * page_size;
  let sqlStr = `SELECT p.*,u.name,u.nickname,u.avatar FROM post p LEFT JOIN user u on p.uid=u.id ${where} ORDER BY ?? DESC limit  ?,? `;
  let postList = await ctx.sql(sqlStr, [sort, start, page_size]);
  postList = await Promise.all(
    postList.map(async (post) => {
      return getPost(ctx, post);
    })
  );

  let querystring = getQueryString(ctx, "page");
  return { postList, search, sort, type, page, page_size, total: num, totalPage, querystring };
}

exports.getPostList = getPostList;

function dayFormat(date, format = "YYYY-MM-DD HH:mm:ss") {
  if (dayjs(date).diff(dayjs(new Date()), "hour") < -24) {
    return dayjs(date).format(format);
  } else {
    return dayjs(date).fromNow();
  }
}
exports.dayFormat = dayFormat;

exports.pugFun = {
  dayFormat,
};
