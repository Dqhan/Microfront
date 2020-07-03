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
  this.prefixCls = "app2-react";
  this.state = {};
}

Store.prototype.register = function (name, target) {
  this.state[`${this.prefixCls}-${name}`] = target;
};

var storeInstance = new Store();

module.exports = storeInstance;