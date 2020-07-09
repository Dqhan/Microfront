import * as singleSpa from "single-spa";

import GlobalInstance from "./globalInstance";

import config from './config';

var globalInstance = new GlobalInstance();


async function register(name, storeUrl, moduleUrl, path) {
  let storeModule = {},
    customProps = { globalInstance: globalInstance };
  storeModule = await SystemJS.import(storeUrl);

  if (storeModule && globalInstance) {
    customProps.store = storeModule;
    globalInstance.registerStore(storeModule);
  }

  singleSpa.registerApplication(
    name,
    () => SystemJS.import(moduleUrl),
    () => {
      return location.pathname === path;
    },
    customProps
  );
}

config.forEach(c => {
  register(c.name, c.storeUrl, c.moduleUrl, c.path);
})

singleSpa.start();
