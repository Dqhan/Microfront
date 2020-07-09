function Store() {
  this.prefixCls = "app-common";
  this.state = {};
}

Store.prototype.register = function (name, target) {
  this.state[`${this.prefixCls}-${name}`] = target;
};

var storeInstance = new Store();

module.exports = storeInstance;
