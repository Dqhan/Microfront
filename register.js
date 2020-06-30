// single-spa-config.js
import * as singleSpa from "single-spa";

import GlobalEventDistributor from './globalEventDistributor';

var globalEventDistributor = new GlobalEventDistributor();

let storeModule = {}, customProps = { globalEventDistributor: globalEventDistributor };

// 注册应用
async function registerCommon() {
  // storeModule = storeURL ? import("./app-common/store.js") : { storeInstance: null };

  storeModule = await import("./app-common/store.js");

  if (storeModule.storeInstance && globalEventDistributor) {
    customProps.store = storeModule.storeInstance;
    globalEventDistributor.registerStore(storeModule.storeInstance);
  }

  singleSpa.registerApplication(
    "common",
    () => import("./app-common/index.js"),
    () => {
      return location.pathname === "/";
    },
    customProps
  );
}

// async function cImport() {
//   return import("./app-react/store.js");
// } 

async function registerApp1() {
  storeModule = await import("./app-react/store.js");

  if (storeModule.storeInstance && globalEventDistributor) {
    customProps.store = storeModule.storeInstance;
    globalEventDistributor.registerStore(storeModule.storeInstance);
  }

  singleSpa.registerApplication(
    "react",
    () => import("./app-react/index.js"),
    (location) => {
      return location.pathname.startsWith("/react-1");
    }
  );
}

async function registerApp2() {
  storeModule = await import("./app2-react/store.js");

  if (storeModule.storeInstance && globalEventDistributor) {
    customProps.store = storeModule.storeInstance;
    globalEventDistributor.registerStore(storeModule.storeInstance);
  }

  singleSpa.registerApplication(
    "react2",
    () => import("./app2-react/index.js"),
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
