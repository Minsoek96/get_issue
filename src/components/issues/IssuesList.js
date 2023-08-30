import React, { useContext, useEffect } from "react";
import { getIssues } from "../../apis/issues";
import IssuesItem from "./IssuesItem";
import Advertisement from "../Advertisement";
import {
  IssueDispatchContext,
  IssueStateContext,
} from "../../context/IssuesContext";
import { useNavigate } from "react-router-dom";

const IssuesList = () => {
  const { issueList, isError, isLoading } = useContext(IssueStateContext);
  const dispatch = useContext(IssueDispatchContext);

  useEffect(() => {
    dispatch && getIssues(dispatch);
  }, []);

  const renderIssue = (issue, index) => (
    <React.Fragment key={issue.id}>
      {(index + 1) % 5 === 0 && <Advertisement />}
      <IssuesItem {...issue} />
    </React.Fragment>
  );

  if (isError) {
    return <p>에러확인</p>;
  }

  if (isLoading) {
    return <p>로딩중 ...</p>;
  }

  return (
    <div>
      <h2>이슈 페이지</h2>
      <div>{issueList.map(renderIssue)}</div>
    </div>
  );
};

export default IssuesList;
