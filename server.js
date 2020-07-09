// const Koa = require('koa');
// const static = require('koa-static');
// const path = require('path');
// const Router = require('koa-router');

// const router = new Router();

// var app = new Koa();
// // app.use(static(path.join(__dirname)));


// app.use(async (ctx, next) => {
//     console.log(ctx.path)
//     await next()
// })


// app.use(router.routes());


// router.all(/\.js/i, static(path.resolve(__dirname)))
// router.all('*', async ctx => {
//     await ctx.render('index')
// });


// app.listen(3000, () => {
//     console.log('success')
// })


const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;
const app = express();

app.use(express.static(__dirname))

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port, function () {
    console.log("server started on port " + port)
})