import React from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  return (
    <li>
      <article className="wrapper">
        <h1 className="wrapper__title">404</h1>
        <p className="wrapper__desc">아무것도 없어요!</p>
      </article>
    </li>
  );
}
