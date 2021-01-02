import { ParameterizedContext } from "koa";

async function healthCheck(ctx: ParameterizedContext): Promise<void> {
  ctx.body = 'good';
}

export default {
  healthCheck,
};