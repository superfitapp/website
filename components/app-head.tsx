import Head from "next/head";

function AppHead({ user, loading }) {
  return (
    <Head>
      <title>SuperFit - Where Workouts Are Built</title>
      <link rel="icon" href="/favicon.ico" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* <!-- Favicon --> */}
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

      <script defer src="/js/vendor.bundle.js"></script>
      <script defer src="/js/theme.bundle.js"></script>

      {/* <!-- Title --> */}
      <title>SuperFit</title>
    </Head>
  );
}

export default AppHead;
