// import axios from 'axios';
import { GET_ABOUT_DATA } from "../api/apiEndPoints";
import { ActionType } from "../reducers/aboutData";
import _axios from "../api/axios";
import actionCreator from "@redux/actionCreator";

export const getAboutData = () => async (dispatch: any) => {
  await actionCreator(
    "fetchAboutData",
    async (dispatch: any): Promise<void> => {
      const response = await _axios({
        url: GET_ABOUT_DATA,
        method: "get",
      });

      dispatch({
        type: ActionType.GET_ABOUT_DATA,
        payload: response.data,
      });
    }
  );
};
