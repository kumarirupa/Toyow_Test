// import { Dispatch } from "./dispatch";

import localStore from "@redux/store/store";

import { ActionStatus, ActionType } from "@redux/reducers/rootReducer";
import { AxiosError } from "axios";

const { dispatch } = localStore;

const actionCreator = async function <T>(
  key: string,
  actionDispatcher: (d: any) => Promise<T>
): Promise<T | undefined> {
  dispatch({
    type: ActionType.STATUS_UPDATE,
    payload: { [key]: ActionStatus.REQUEST },
  });

  try {
    const result = await actionDispatcher(dispatch);

    dispatch({
      type: ActionType.STATUS_UPDATE,
      payload: { [key]: ActionStatus.SUCCESS },
    });
    return result;
  } catch (e) {
    dispatch({
      type: ActionType.STATUS_UPDATE,
      payload: { [key]: ActionStatus.FAIL },
    });
    return (e as AxiosError<T>).response?.data;
  }
};

export default actionCreator;
