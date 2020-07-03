// single-spa-config.js
import * as singleSpa from "single-spa";

import GlobalEventDistributor from "./globalEventDistributor";

var globalEventDistributor = new GlobalEventDistributor();


// 注册应用
async function registerCommon() {
  let storeModule = {},
    customProps = { globalEventDistributor: globalEventDistributor };
  storeModule = await SystemJS.import("./app-common/dist/store.js");

  if (storeModule && globalEventDistributor) {
    customProps.store = storeModule;
    globalEventDistributor.registerStore(storeModule);
  }

  singleSpa.registerApplication(
    "common",
    () => SystemJS.import("./app-common/dist/index.js"),
    () => {
      return location.pathname === "/";
    },
    customProps
  );
}

async function registerApp1() {
  let storeModule = {},
    customProps = { globalEventDistributor: globalEventDistributor };
  storeModule = await SystemJS.import("./app-react/dist/store.js");

  if (storeModule && globalEventDistributor) {
    customProps.store = storeModule;
    globalEventDistributor.registerStore(storeModule);
  }

  singleSpa.registerApplication(
    "react",
    () => SystemJS.import("./app-react/dist/index.js"),
    (location) => {
      return location.pathname.startsWith("/react-1");
    },
    customProps
  );
}

async function registerApp2() {
  let storeModule = {},
    customProps = { globalEventDistributor: globalEventDistributor };
  storeModule = await SystemJS.import("./app2-react/dist/store.js");

  if (storeModule && globalEventDistributor) {
    customProps.store = storeModule;
    globalEventDistributor.registerStore(storeModule);
  }

  singleSpa.registerApplication(
    "react2",
    () => SystemJS.import("./app2-react/dist/index.js"),
    () => {
      return location.pathname.startsWith("/react-2");
    },
    customProps
  );
}

registerCommon();
registerApp1();
registerApp2();
//singleSpa 启动
singleSpa.start();
