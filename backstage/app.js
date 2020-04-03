const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const router = new Router(); //装载所有路由
const bodyParser = require("koa-bodyparser");
app.use(bodyParser()); //启用koa-bodyparser
const path = require("path");
const static = require("koa-static"); //静态资源服务插件
// 配置静态资源
const staticPath = "./static";
app.use(
  static(
    path.join(__dirname, staticPath)
    // http://localhost:4000/RAINGOD.png 访问到静态资源下的图片
  )
);
//配置cors
const cors=require("koa2-cors");
app.use(cors());

let routerIndex = require("./routers/index.js");
// router.get("/", async ctx => {
//   ctx.redirect("/index"); //默认跳转到index
// });
//根路径
router.use("/api", routerIndex.routes());
//加载路由中间件，启动路由
app.use(router.routes());
//若ctx.status为空或者404的时候,丰富response对象的header头
app.use(router.allowedMethods());
//启动服务
app.listen(4000, () => {
  console.log("server start");
});
