import * as React from "react";
import Header from "../components/Header";
import Sermon from "../components/sermon";
import Tabs from "../components/Tab";
import { Helmet } from "react-helmet";
import Jan42026 from "../images/twenty-twenty-six/Jan42026.jpeg";
import Jan112026 from "../images/twenty-twenty-six/11thjan2026.jpeg";

const sermons = [

  {
    title: "Pioneering Again II",
    preacher: "Pst Mayowa Agbelese",
    date: "Sunday, 11th January, 2026",
    link: "https://drive.google.com/file/d/1OLQE501YrFPBc4BxtTaMMvtVUh21KhcA/view?usp=sharing",
    img: Jan112026,
  },
  {
    title: "Thanksgiving Service: Pioneering Again",
    preacher: "Pst Mayowa Agbelese",
    date: "Sunday, 4th January, 2026",
    link: "https://drive.google.com/file/d/1ccQ21xxgOpz2ZDiK4g4k-tlNacG86E4K/view?usp=drivesdk",
    img: Jan42026,
  },
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

        <Sermon sermons={sermons} sermonYear={"2026 Sermons"} />
      </main>
    </>
  );
};

export default year26;

export const Head = () => <title>Home Page</title>;
