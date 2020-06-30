// single-spa-config.js
import * as singleSpa from "single-spa";

// var config = [
//   // {
//   //   name: "base",
//   //   path: "",
//   //   index: "/base/index.js",
//   //   store: "/base/store.js",
//   //   base: true,
//   // },
//   {
//     name: "common",
//     path: "/",
//     index: "/src/app-common/index.js",
//     store: "/src/app-common/store.js",
//     base: false,
//   },
//   {
//     name: "app-react",
//     path: "/app-react",
//     index: "/src/app-react/index.js",
//     store: "/src/app-react/store.js",
//     base: false,
//   },
//   {
//     name: "app2-react",
//     path: "/app2-react",
//     index: "/src/app2-react/index.js",
//     store: "/src/app2-react/store.js",
//     base: false,
//   },
// ];

// function register() {
//   config.forEach((c) => {
//     singleSpa.registerApplication(
//       c.name,
//       () => {
//         var path = c.index;
//         return System.import(path);
//       },
//       () => {
//         return c.base === true ? true : location.pathname === c.path;
//       }
//     );
//   });
// }

// register();

// 注册应用
// singleSpa.registerApplication(
//   "base",
//   () => System.import("../src/base/index.js"),
//   () => {
//     return true;
//   }
// );

singleSpa.registerApplication(
  "common",
  () => import("../src/app-common/index.js"),
  () => {
    return location.pathname === "/";
  }
);

singleSpa.registerApplication(
  "react",
  () => import("../src/app-react/index.js"),
  (location) => {
    return location.pathname.startsWith("/react-1");
  }
);

singleSpa.registerApplication(
  "react2",
  () => import("../src/app2-react/index.js"),
  () => {
    return location.pathname.startsWith("/react-2");
  }
);

//singleSpa 启动
singleSpa.start();
