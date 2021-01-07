// import "@/styles/styles.css";
import "@/styles/styles.scss";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import App from "next/app";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </>
    );
  }
}
