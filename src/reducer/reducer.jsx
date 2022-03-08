import initFunc from "./initFunc";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return initFunc(action.payload);
    default:
      throw new Error();
  }
};

export default reducer;
