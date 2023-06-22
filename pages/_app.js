import Layout from "../comps/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log(Component);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
