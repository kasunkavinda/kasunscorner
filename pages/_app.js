import { SessionProvider } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import Layout from "../components/layout/Layout";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
    <Layout>
      <Component {...pageProps} />
      <Toaster position="top-right" />
    </Layout>
    </SessionProvider>
  );
}

export default MyApp;
