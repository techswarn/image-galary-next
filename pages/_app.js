import Layout from "../comps/Layout";
import "../styles/globals.css";

import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  console.log(Component);
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
