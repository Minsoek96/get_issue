import { IssueAction } from "../reducer/IssuesReducer";
import { API } from "./client";
import { ISSUES } from "./config";

export const getIssues = async (
  dispatch,
  page,
  status = "open",
  sort = "comments"
) => {
  try {
    dispatch({
      type: IssueAction.ISSUE_LIST_REQUEST,
    });
    const response = await API(
      `${ISSUES}?status=${status}&sort=${sort}&page=${page}&per_page=15`
    );
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
