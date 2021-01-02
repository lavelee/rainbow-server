import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import cfg from './config';
import r from './router';

const app = new Koa();

const server = app
  .use(bodyParser())
  .use(logger())
  .use(r.routes())
  .listen(cfg.PORT, () => console.log(`Server listening on port: ${cfg.PORT}`))
  .on('error', console.error);

export default server;