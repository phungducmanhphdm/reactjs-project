const globalState = {};

function globalReducer(state, callBack) {
  return callBack(state);
}

export default globalReducer;
export { globalState };
