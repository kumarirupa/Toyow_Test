import { CombinedState, combineReducers } from "redux";
import aboutData, { AboutData } from "./aboutData";
import createReducer from "@redux/createReducer";

export enum ActionType {
  STATUS_UPDATE = "STATUS_UPDATE",
}

export enum ActionStatus {
  REQUEST = "request",
  SUCCESS = "success",
  FAIL = "fail",
}

export interface StatusState {
  [key: string]: ActionStatus | null;
}

const statusReducer = createReducer<StatusState>(
  {},
  {
    [ActionType.STATUS_UPDATE](state: StatusState, payload: unknown) {
      return {
        ...state,
        ...(payload as StatusState),
      };
    },
  }
);
export interface storeState {
  data: AboutData;
  status: StatusState;
}

export default combineReducers<CombinedState<storeState>>({
  data: aboutData,
  status: statusReducer,
});
