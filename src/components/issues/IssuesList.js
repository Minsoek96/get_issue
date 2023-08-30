import React, { useContext, useEffect, useRef, useState } from "react";
import { getIssues } from "../../apis/issues";
import IssuesItem from "./IssuesItem";
import Advertisement from "../Advertisement";
import {
  IssueDispatchContext,
  IssueStateContext,
} from "../../context/IssuesContext";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

const IssuesList = () => {
  const { issueList, isError, isLoading } = useContext(IssueStateContext);
  const dispatch = useContext(IssueDispatchContext);
  const [page, setPage] = useState(1);
  const { lastItemRef } = useInfiniteScroll(
    () => setPage((curPage) => curPage + 1),
    0.9
  );

  useEffect(() => {
    dispatch && getIssues(dispatch, page);
  }, [page]);

  const renderIssue = (issue, index) => (
    <React.Fragment key={issue.id}>
      {(index + 1) % 5 === 0 && <Advertisement />}
      {issueList.length === index + 1 ? (
        <IssuesItem {...issue} ref={lastItemRef} />
      ) : (
        <IssuesItem {...issue} />
      )}
    </React.Fragment>
  );

  if (isError) {
    return <p>에러확인</p>;
  }

  return (
    <div>
      <h2>이슈 페이지</h2>
      <div>{issueList.map(renderIssue)}</div>
      {isLoading && <p> 로딩중 ...</p>}
    </div>
  );
};

export default IssuesList;
