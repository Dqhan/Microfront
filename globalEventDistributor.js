// export default class GlobalEventDistributor {
//   constructor() {
//     this.stores = [];
//   }

//   registerStore(store) {
//     this.stores.push(store);
//   }

//   dispatch(name, target) {
//     this.stores.forEach((s) => s.register(name, target));
//   }
// }

var instance = (function (Factory) {
  return new Factory();
})(function () {
  var stores = [];
  function Events() { }

  Events.prototype.registerStore = function (store) {
    stores.push(store);
    // this.stores[store.prefixCls] = store;
    console.log(this.stores);
  };

  Events.prototype.dispatch = function (name, target) {
    // this.stores[store.prefixCls].register(name, target)
    stores.forEach(s => {
      s.register(name, target)
    });
    console.log(stores);
  };

  return Events;
});

export default instance;

