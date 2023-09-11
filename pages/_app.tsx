import "../styles/globals.css";
import store from "@redux/store/store";
import { Provider } from "react-redux";
import Layout from "../component/shared/Layout";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../context/themeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}
