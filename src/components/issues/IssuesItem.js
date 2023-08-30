import React from "react";

const IssuesItem = (issue) => {
  return (
    <div>
      <div>
        <p>
          #{issue.number} {issue.title}
        </p>
        <p>
          {issue.user.login} , {issue.created_at}
        </p>
        <p>{issue.comments}</p>
        <p>{issue.id}</p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default IssuesItem;
