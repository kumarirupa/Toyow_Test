interface Action {
  type: string;
  payload: any;
}

type Handlers<State> = {
  [type: string]: (state: State, payload: any) => State;
};

export default function createReducer<T>(
  initialState: T,
  handlers: Handlers<T>
) {
  return function reducer(state = initialState, action: Action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action.payload);
    } else {
      return state;
    }
  };
}
