import React, { useEffect, useState } from "react";
import { getIssues } from "../../apis/issues";
import IssuesItem from "./IssuesItem";
import Advertisement from "../Advertisement";

const IssuesList = () => {
  const [data, setData] = useState();
  useEffect(() => {
    getIssues().then((res) => setData(res.data));
  }, []);
  return (
    <div>
      <h2>이슈 페이지</h2>
      <div>
        {data &&
          data.map((issue, index) => (
            <React.Fragment key={issue.id}>
              {(index + 1) % 5 === 0 && <Advertisement />}
              <IssuesItem {...issue} />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default IssuesList;
