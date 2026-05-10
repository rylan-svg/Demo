import Koa from "koa";
import Home from "./router/home";

const koa = new Koa();

koa.use(Home.routes())

koa.listen({
    host: "127.0.0.1",
    port: 8000,
})