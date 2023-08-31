import React, { useEffect, useState } from "react";
import IssuesList from "../components/issues/IssuesList";
import { IssuesProvider } from "../context/IssuesContext";
import ErrorBoundary from "../components/ErrorBoundary";

const Issues = () => {
  return (
    <ErrorBoundary>
      <IssuesProvider>
        <IssuesList />
      </IssuesProvider>
    </ErrorBoundary>
  );
};

export default Issues;
