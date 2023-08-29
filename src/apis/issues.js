import { API } from "./client";
import { ISSUES } from "./config";

export const getIssues = () => {
  return API(ISSUES);
};

export const getIssuesDetail = (targetId) => {
  return API(`${ISSUES}/${targetId}`);
};
