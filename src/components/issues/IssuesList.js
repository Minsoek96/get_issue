import React, { useContext, useEffect, useRef, useState } from "react";
import { getIssues } from "../../apis/issues";
import IssuesItem from "./IssuesItem";
import Advertisement from "../Advertisement";
import {
  IssueDispatchContext,
  IssueStateContext,
} from "../../context/IssuesContext";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import Spinner from "../Spinner";
import ErrorScreen from "../ErrorScreen";
import { styled } from "styled-components";

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
    throw new Error(isError);
  }

  return (
    <IssueListWrapper>
      <h2>이슈 페이지</h2>
      <div>{issueList.map(renderIssue)}</div>
      {isLoading && <Spinner />}
    </IssueListWrapper>
  );
};

export default IssuesList;

const IssueListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center ;
  justify-content: center;
`;
