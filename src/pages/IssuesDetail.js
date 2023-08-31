import React, { useEffect, useState } from "react";
import { getIssuesDetail } from "../apis/issues";
import { marked } from "marked";
import "github-markdown-css";
import styled from "styled-components";
import { formatISODate } from "../utils/formatDate";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { Issue } from "../styles/globalStyles";

const IssuesDetail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getIssuesDetail(id).then((res) => setData(res.data));
  }, []);

  const html = data ? marked(data.body) : ""; // data가 있는 경우에만 marked를 호출

  if (!data) return <Spinner />;

  return (
    <div>
      <h2>이슈 디테일 페이지</h2>
      <Issue.Container>
        <IssueStyle>
          <Avatar src={data.user.avatar_url} alt="User Avatar" loading="lazy" />
          <Issue.Wrapper>
            <Issue.Title>
              #{data.number} {data.title}
            </Issue.Title>
            <Issue.User>
              {data.user.login}, {data.created_at}
            </Issue.User>
          </Issue.Wrapper>
          <Issue.CommentsCount>{data.comments}</Issue.CommentsCount>
        </IssueStyle>
      </Issue.Container>
      <MarkdownBody
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default IssuesDetail;

const IssueStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  p:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const Avatar = styled.img.attrs({
  loading: "lazy",
})`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  object-fit: cover;
`;

const MarkdownBody = styled.main`
  margin-top: 24px;
`;
