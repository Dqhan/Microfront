var instance = (function (Factory) {
  return new Factory();
})(function () {
  var stores = [];
  function Events() {}

  Events.prototype.registerStore = function (store) {
    stores.push(store);
  };

  Events.prototype.dispatch = function (name, target) {
    stores.forEach((s) => {
      s.register(name, target);
    });
    console.log(stores);
  };

  return Events;
});

export default instance;
// var stores = [];

// function registerStore(s) {
//   stores.push(s);
// }

// function dispatch() {
//   stores.forEach((s) => {
//     s.register(name, target);
//   });
// }

// export default {
//   Context: React.createContext(),
//   registerStore,
//   dispatch,
//   stores,
// };
