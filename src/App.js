import { useState, useEffect } from "react";
import { getIssues, getIssuesDetail } from "./apis/issues";
const App = () => {
  useEffect(() => {
    getIssues().then((res) => console.log(res));
    getIssuesDetail(5).then((res) => console.log(res));
  });
  return (
    <>
      <h2>dd</h2>
    </>
  );
};
export default App;
