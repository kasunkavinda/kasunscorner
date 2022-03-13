import { SessionProvider } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import Layout from "../components/layout/Layout";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Layout>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <Toaster position="top-right" />
      </SessionProvider>
    </Layout>
  );
}

export default MyApp;
