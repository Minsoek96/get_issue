import React, { forwardRef } from "react";
import { Link } from "react-router-dom";


const IssuesItem = forwardRef((issue, ref) => {
  return (
    <Link to={`/${issue.number}`} ref={ref}>
      <div>
        <p>
          #{issue.number} {issue.title}
        </p>
        <p>
          {issue.user.login} , {issue.created_at}
        </p>
        <p>{issue.comments}</p>
        <p>{issue.state}</p>
        <br />
        <br />
      </div>
    </Link>
  );
});

export default IssuesItem;
