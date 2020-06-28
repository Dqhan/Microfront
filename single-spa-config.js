// single-spa-config.js
import * as singleSpa from 'single-spa';

// 加载react 项目的入口js文件 (模块加载)
const loadingFunction = () => import('./react/app.js');

// 当url前缀为 /react的时候.返回 true (底层路由)
const activityFunction = location => location.pathname.startsWith('/react');

// 注册应用 
singleSpa.registerApplication('react', loadingFunction, activityFunction);

//singleSpa 启动
singleSpa.start();