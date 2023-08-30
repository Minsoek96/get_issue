import React, { useCallback, useEffect, useRef, useState } from "react";

const useInfiniteScroll = (callback, options) => {
  const lastItemRef = useRef(null);
  const memoCallback = useCallback(callback, []);
  useEffect(() => {
    //   //현재의 라스트 Item의 상태를 저장
    //   //해당 아이템 관측시작 가시성 90%
    //   //관측시 페이지 + 1
    //   //데이터를 가져오기 위한 useEffect의 의존성배열[page]]의 의해 useList가 갱신 시작
    //   //해당 페이지 이슈리스트에 대한 관측이 끝나면 언마운트/관측종료
    //   //데이터에 대한 상태 갱신이 끝나 의존성배열[issueList]에 변화에 의한 관측 useEffect 실행
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          memoCallback();
        }
      },
      { threshold: options }
    );

    const currentRef = lastItemRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, [callback, options]);

  return { lastItemRef };
};

export default useInfiniteScroll;
