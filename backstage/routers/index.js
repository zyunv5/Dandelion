const Router = require("koa-router");
let router = new Router();
const knex = require("../lib/mysql");

router.get("/login", async ctx => {
  let request = ctx.request;
  const { userName, userPassWord } = request.query;
  let result = await knex("appUser").where({ userName });
  console.log(userName, userPassWord, result);
  if (result.length !== 0) {
    if (result[0].userPassWord == userPassWord) {
      ctx.body = {
        code: 200,
        msg: "success",
        content: "登录成功"
      };
    } else {
      ctx.body = {
        code: 500,
        msg: "error",
        content: "账号或者密码错误"
      };
    }
  } else {
    ctx.body = {
      code: 500,
      msg: "error",
      content: "账号不存在"
    };
  }
});

router.get("/nameTest", async ctx => {
  let request = ctx.request;
  const { userName } = request.query;
  let result = await knex("appUser").where({ userName });
  console.log(userName, result);
  if (result.length !== 0) {
    ctx.body = {
      code: 500,
      msg: "error",
      content: "账号已存在"
    };
  } else {
    ctx.body = {
      code: 200,
      msg: "success",
      content: "账号可注册"
    };
  }
});

router.post("/register", async ctx => {
  const { userName, userPassWord } = ctx.request.body;
  let result = await knex("appUser").insert({ userName:userName,userPassWord:userPassWord });
  console.log(result);
  if(result.length!==0){
    ctx.body = {
      code: 200,
      msg: "success",
      content: "账号注册成功"
    };
  }else{
    ctx.body = {
      code: 500,
      msg: "error",
      content: "账号注册失败"
    };
  }
});

module.exports = router;
