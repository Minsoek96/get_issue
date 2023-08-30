import React, { useContext, useEffect, useRef, useState } from "react";
import { getIssues } from "../../apis/issues";
import IssuesItem from "./IssuesItem";
import Advertisement from "../Advertisement";
import {
  IssueDispatchContext,
  IssueStateContext,
} from "../../context/IssuesContext";

const IssuesList = () => {
  const { issueList, isError, isLoading } = useContext(IssueStateContext);
  const dispatch = useContext(IssueDispatchContext);
  const [page, setPage] = useState(1);
  const lastIssueItemRef = useRef(null);

  useEffect(() => {
    dispatch && getIssues(dispatch, page);
  }, [page]);

  useEffect(() => {
    //현재의 라스트 Item의 상태를 저장 
    //해당 아이템 관측시작 가시성 90%
    //관측시 페이지 + 1
    //데이터를 가져오기 위한 useEffect의 의존성배열[page]]의 의해 useList가 갱신 시작
    //해당 페이지 이슈리스트에 대한 관측이 끝나면 언마운트/관측종료
    //데이터에 대한 상태 갱신이 끝나 의존성배열[issueList]에 변화에 의한 관측 useEffect 실행
    const currentRef = lastIssueItemRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((curPage) => curPage + 1);
        }
      },
      { threshold: 0.9 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [issueList]);

  const renderIssue = (issue, index) => (
    <React.Fragment key={issue.id}>
      {(index + 1) % 5 === 0 && <Advertisement />}
      {issueList.length === index + 1 ? (
        <IssuesItem {...issue} ref={lastIssueItemRef} />
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
