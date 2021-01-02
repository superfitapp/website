import Link from "next/link";
import Head from "next/head";

import "@/styles/js/theme.bundle";
let vendor;
if (typeof window !== "undefined") {
  vendor = require("@/styles/js/vendor.bundle");
}

import styles from "../styles/Home.module.css";

function AppHead({ user, loading }) {
  return (
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* <!-- Favicon --> */}
      <link
        rel="shortcut icon"
        href="./assets/favicon/favicon.ico"
        type="image/x-icon"
      />

      {/* <!-- Map CSS --> */}
      <link
        rel="stylesheet"
        href="https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css"
      />

      {/* <!-- Libs CSS --> */}
      {/* <link rel="stylesheet" href="../assets/css/libs.bundle.css" /> */}

      {/* <!-- Theme CSS --> */}
      {/* <link rel="stylesheet" href="./assets/css/theme.bundle.css" /> */}

      {/* <!-- Vendor JS --> */}
      {/* <script src="@/styles/js/vendor.bundle.js"></script> */}

      {/* <!-- Theme JS --> */}
      {/* <script src="@/styles/js/theme.bundle.js"></script> */}

      {/* <!-- Title --> */}
      <title>Landkit</title>
    </Head>
  );
}

export default AppHead;
