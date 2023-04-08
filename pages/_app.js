import { Toaster } from "react-hot-toast";
import Layout from "../components/layout/Layout";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { endorsementApi } from "../feautures/endorsementApiSlice";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
      <ApiProvider api={endorsementApi}>
        <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
          <Toaster position="top-right" />
        </Layout>
        </Provider>
      </ApiProvider>
  );
}

export default MyApp;
