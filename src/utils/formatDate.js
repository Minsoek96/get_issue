import React from "react";

export const formatISODate = (isoString) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());
  return `${year}년 ${month}월 ${day}일`;
};
