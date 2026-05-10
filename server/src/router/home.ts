import Router from '@koa/router';

const router = new Router({
    prefix: '/api',
});

router.get('/', (ctx): void => {
    ctx.code = 200;
    ctx.type = 'application/json';
    ctx.body = {"name":" 我是后台数据"}

})

export default router;