import createReducer from "@redux/createReducer";

export enum ActionType {
  GET_ABOUT_DATA = "GET_ABOUT_DATA",
  SET_LOADING = "SET_LOADING",
}

export interface About {
  title: string;
  description: string;
  type: string;
}

export interface AboutData {
  aboutData: About[];
}

const initialState: AboutData = {
  aboutData: [],
};

export default createReducer<AboutData>(initialState, {
  [ActionType.GET_ABOUT_DATA](state: AboutData, payload: About[]): AboutData {
    return {
      ...state,
      aboutData: payload as About[],
    };
  },
});
