// import { createStore } from 'redux';

// const initialState = {
//     count: 0
// };

// function reducer(state = initialState, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 count: state.count + 1
//             };
//         case 'DECREMENT':
//             return {
//                 count: state.count - 1
//             };
//         default:
//             return state;
//     }
// }

// export const storeInstance = createStore(reducer);

function Store() {
  this.prefixCls = "app-common";
  this.state = {};
}

Store.prototype.register = function (name, target) {
  this.state[`${this.prefixCls}-${name}`] = target;
};

// Store.prototype.update = function (name, target) {
//   this.state[`${this.prefixCls}-${name}`] = target;
// };

// Store.prototype.register = function ({ name, target }) {
//   switch (event) {
//     case "register":
//       this.register(name, target);
//       break;
//     case "update":
//       this.update(name, target);
//       break;
//     default:
//       break;
//   }
// };

var storeInstance = new Store();

module.exports = storeInstance;
