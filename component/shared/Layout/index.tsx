/* eslint-disable @next/next/no-page-custom-font */
import { useTheme } from "../../../context/themeContext";
import Footer from "../Footer";
import Header from "../Header";
import Head from "next/head";
import { ReactElement } from "react";

interface propsInterface { children: ReactElement; darkMode?: string; }

const Layout = (props: propsInterface) => {
  const { children } = props;
  const { darkMode } = useTheme();
  

  return (
    <div
      className={`bg-white shadow-md px-7 sm:px-8 md:px-10 lg:px-16 ${darkMode == "dark" ? "dark" : ""
        }`}
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header></Header>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
