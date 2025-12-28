import * as React from "react";
import Header from "../components/Header";
import Sermon from "../components/sermon";
import Tabs from "../components/Tab";
import { Helmet } from "react-helmet";

const sermons = [

];

const tabs = [
  { path: "/", label: "2024" },
  { path: "/year25", label: "2025" },
  { path: "/year26", label: "2026" }
];

const year26 = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <main>
        <Header />

        <div>
          <Tabs tabs={tabs} activeTab="/year26" />
        </div>

        <Sermon sermons={sermons} sermonYear={"2026 Sermons - Coming Soon..."} />
      </main>
    </>
  );
};

export default year26;

export const Head = () => <title>Home Page</title>;
