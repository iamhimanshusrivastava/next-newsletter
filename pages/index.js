import Head from "next/head";
import { Fragment } from "react";

import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>JavaScript.Design</title>
        <meta name="description" content="JavaScript.Design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </Fragment>
  );
}
