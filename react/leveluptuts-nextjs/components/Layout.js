import Head from "next/head";
import Nav from "./Nav/Nav";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>{children}</main>
    </div>
  );
}
