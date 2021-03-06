const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser');
const fs = require('fs');
const Redis = require('ioredis');
// import { database } from './config';
const CONFIG = require('./config');
console.log(CONFIG)
const redis = new Redis(CONFIG.database);

redis.set('foo', 'bar');
redis.get('foo', function(err, result) {
  console.log(result);
});

const app = new Koa();
const router = new Router();

// bodyParser须放在解析路由之前，否则无法解析
app.use(bodyParser());
app.use(cors({
  allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}));
app.use(router.routes()).use(router.allowedMethods());


router.post('/collect', (ctx, next) => {
  console.log(ctx.request.body);
  ctx.message = 'ok';
  ctx.body = 'success';
});

app.listen(4000);
