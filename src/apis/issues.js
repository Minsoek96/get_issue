import { IssueAction } from "../reducer/IssuesReducer";
import { API } from "./client";
import { ISSUES } from "./config";

export const getIssues = async (dispatch) => {
  try {
    dispatch({
      type: IssueAction.ISSUE_LIST_REQUEST,
    })
    const response = await API(ISSUES);
    if (response) {
      dispatch({
        type: IssueAction.ISSUE_LIST_SUCCESS,
        data: response.data,
      });
    }
  } catch (error) {
    dispatch({
      type: IssueAction.ISSUE_LIST_FAILURE,
      data: error,
    });
  }
};

export const getIssuesDetail = (targetId) => {
  return API(`${ISSUES}/${targetId}`);
};

// export const getIssuesDetail = async (dispatch) => {
//   try {
//     const response = await  API(`${ISSUES}/${targetId}`)
//     if (response) {

//     }
//   } catch (error) {

//   }
// };
