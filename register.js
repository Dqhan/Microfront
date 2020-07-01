// single-spa-config.js
import * as singleSpa from "single-spa";

import GlobalEventDistributor from "./globalEventDistributor";

var globalEventDistributor = new GlobalEventDistributor();

let storeModule = {},
  customProps = { globalEventDistributor: globalEventDistributor };

// 注册应用
async function registerCommon() {
  // storeModule = storeURL ? import("./app-common/store.js") : { storeInstance: null };

  storeModule = await SystemJS.import("./app-common/dist/store.js");

  if (storeModule.storeInstance && globalEventDistributor) {
    customProps.store = storeModule.storeInstance;
    globalEventDistributor.registerStore(storeModule.storeInstance);
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
  storeModule = await SystemJS.import("./app-react/dist/store.js");

  if (storeModule.storeInstance && globalEventDistributor) {
    customProps.store = storeModule.storeInstance;
    globalEventDistributor.registerStore(storeModule.storeInstance);
  }

  singleSpa.registerApplication(
    "react",
    () => SystemJS.import("./app-react/dist/index.js"),
    (location) => {
      return location.pathname.startsWith("/react-1");
    }
  );
}

async function registerApp2() {
  storeModule = await SystemJS.import("./app2-react/dist/store.js");

  if (storeModule.storeInstance && globalEventDistributor) {
    customProps.store = storeModule.storeInstance;
    globalEventDistributor.registerStore(storeModule.storeInstance);
  }

  singleSpa.registerApplication(
    "react2",
    () => SystemJS.import("./app2-react/dist/index.js"),
    () => {
      return location.pathname.startsWith("/react-2");
    }
  );
}

registerCommon();
registerApp1();
registerApp2();
//singleSpa 启动
singleSpa.start();
