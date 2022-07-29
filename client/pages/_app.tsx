import React, { useEffect, useState } from "react";

// import App, { AppProps } from "next/app";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useSession, CreatorProvider } from "../components/session";
import { ToastContainer } from "react-toastify";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "/styles/tailwind.css";

declare global {
  interface Window {
    ethereum: any;
  }
}

export default function MyApp({ Component, pageProps }: any) {
  const router = useRouter();
  const session = useSession();
  const [initialized, setInitialized] = useState(false);

  const Layout =
    Component.layout || ((props: { children: any }) => <>{props.children}</>);

  // const pageRequiresSignedInUser = pageProps.protected !== false;

  useEffect(() => {
    function onSuccess() {
      setInitialized(true);
    }

    function onFailure(error: Error) {
      console.log(error);
      setInitialized(true);
    }

    session.initialize().then(onSuccess, onFailure);
  }, [session]);

  if (!initialized) {
    return null;
  }

  return (
    <React.Fragment>
      <CreatorProvider>
        <ToastContainer pauseOnHover draggable hideProgressBar={false} />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>privyCare</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CreatorProvider>
    </React.Fragment>
  );
}
