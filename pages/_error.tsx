import React from "react";
import { NextPageContext } from "next";

function Error({ statusCode }: { statusCode: number }) {
  console.log("statusCode: ", statusCode);
  return <p>{statusCode ? `An error ${statusCode} ` : "An error occurred on client"}</p>;
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
