import { useReducer } from "react";

const initialState = { count: 0 };

const types = {
  INC: "INC",
  DEC: "DEC",
  RESET: "RESET",
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.INC:
      return { count: state.count + 1 };
    case types.DEC:
      return { count: state.count - 1 };
    case types.RESET:
      return { count: 0 };
    default:
      return state;
  }
};

export default function useCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const inc = () => dispatch({ type: types.INC });
  const dec = () => dispatch({ type: types.DEC });
  const reset = () => dispatch({ type: types.RESET });

  return { state: state.count, inc, dec, reset };
}
