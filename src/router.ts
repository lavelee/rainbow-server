import Router from 'koa-router';
import c from './controller';
const r = new Router();

r.get('/', c.healthCheck);

export default r;
