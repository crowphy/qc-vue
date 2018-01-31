const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();

const router = new Router();
app
  .use(router.routes())
  .use(router.allowedMethods());

router.get('/', (ctx, next) => {
  // console.log(ctx.req)
  ctx.body = "hello world";
});

app.listen(3000);
