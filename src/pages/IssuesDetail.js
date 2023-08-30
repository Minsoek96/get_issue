import React, { useEffect, useState } from "react";
import { getIssuesDetail } from "../apis/issues";
import { marked } from "marked";
import "github-markdown-css";
import styled from "styled-components";
import { formatISODate } from "../utils/formatDate";

const IssueInfos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  p:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  object-fit: cover;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

const IssuesDetail = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getIssuesDetail(27052).then((res) => setData(res.data));
  }, []);

  const html = data ? marked(data.body) : ""; // data가 있는 경우에만 marked를 호출

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>이슈 디테일 페이지</h2>
      <IssueInfos>
        <Avatar src={data.user.avatar_url} alt="User Avatar" />
        <UserInfo>
          <p>
            #{data.number}, {data.title}
          </p>
          <p>
            작성자: {data.user.login} , 작성일: {formatISODate(data.created_at)}
          </p>
        </UserInfo>
        <p>{data.comments}</p>
      </IssueInfos>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default IssuesDetail;
