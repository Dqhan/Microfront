// single-spa-config.js
import * as singleSpa from "single-spa";

// 注册应用
// singleSpa.registerApplication(
//   "/common",
//   () => import("../src/app-common/index.js"),
//   () => {
//     return location.pathname.startsWith("/");
//   }
// );

singleSpa.registerApplication(
  "react",
  () => import("../src/app-react/index.js"),
  (location) => {
    return location.pathname.startsWith("/react");
    // return location.pathname === "/react" ? false : true;
  }
);

singleSpa.registerApplication(
  "react2",
  () => import("../src/app2-react/index.js"),
  () => {
    return location.pathname.startsWith("/react2");
    // return location.pathname === "/react2" ? false : true;
  }
);

//singleSpa 启动
singleSpa.start();
