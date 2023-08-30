import React, { useReducer } from "react";
import { initialState, reducer } from "../../reducer/IssuesReducer";

export const IssueStateContext = React.createContext(initialState);
export const IssueDispatchContext = React.createContext({});

export const IssuesProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  return (
    <IssueStateContext.Provider value={data}>
      <IssueDispatchContext.Provider>{children}</IssueDispatchContext.Provider>
    </IssueStateContext.Provider>
  );
};
