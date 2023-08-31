import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Issue } from "../../styles/globalStyles";

const IssuesItem = forwardRef((issue, ref) => {
  return (
    <StyledLink to={`/${issue.number}`} ref={ref}>
      <Issue.Wrapper>
        <Issue.Title>
          #{issue.number} {issue.title}
        </Issue.Title>
        <Issue.User>
          {issue.user.login}, {issue.created_at}
        </Issue.User>
      </Issue.Wrapper>
      <Issue.Wrapper>
        <Issue.State>{issue.state}</Issue.State>
        <Issue.CommentsCount>{issue.comments}</Issue.CommentsCount>
      </Issue.Wrapper>
    </StyledLink>
  );
});

export default IssuesItem;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #eee;
  text-decoration: none;
  color: inherit;

  &:hover {
    background-color: #f7f7f7;
  }
`;