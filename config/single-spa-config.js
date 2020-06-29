// single-spa-config.js
import * as singleSpa from "single-spa";

// 注册应用
singleSpa.registerApplication(
  "/common",
  () => {
    return import("../src/app-common/index.js")
  },
  () => {
    return location.pathname.startsWith("/");
  }
);

singleSpa.registerApplication(
  "react",
  () => import("../src/app-react/index.js"),
  (location) => {
    return location.pathname.startsWith("/react-1")
  }
);

singleSpa.registerApplication(
  "react2",
  () => import("../src/app2-react/index.js"),
  () => {
    return location.pathname.startsWith("/react-2") 
  }
);

//singleSpa 启动
singleSpa.start();
