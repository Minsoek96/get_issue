import React, { useEffect, useState } from "react";
import IssuesList from "../components/issues/IssuesList";
import { IssuesProvider } from "../context/IssuesContext";

const Issues = () => {
  return (
    <IssuesProvider>
      <IssuesList />
    </IssuesProvider>
  );
};

export default Issues;
