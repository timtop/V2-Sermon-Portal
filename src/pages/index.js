import * as React from "react";
import Header from "../components/Header";
import Sermon from "../components/sermon";
import Tabs from "../components/Tab";
import { Helmet } from "react-helmet";

import cbh from "../images/CBH.jpg";
import fitmi from "../images/FITMI.jpg";
import dbild from "../images/the-builders.jpeg";
import xchge from "../images/the-exchange.jpg";
import hc1 from "../images/hc1.jpeg";
import hc2 from "../images/hc2.jpeg";
import tms from "../images/tms.jpg";
import tms2 from "../images/tms2.jpg";
import joy from "../images/joy-noise.jpg";

const sermons = [
  {
    title: "Joyful Noise, Thanks Giving & Worship Service",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 21st July 2024",
    link: "https://drive.google.com/file/d/12HaEsejNF_KE9_yHpIqBHFsH0tubiKpa/view?usp=drive_link",
    name: "Priorities - 21/07/24",
    img: joy,
  },
  {
    title: "The Messy Series. Tap In - Mercy has no expiration date",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 19th May 2024",
    link: "https://drive.google.com/file/d/1CJpdE6dd0YA2MC08btKtrN0NInRbzLvM/view?usp=drive_link",
    name: "Priorities - 19/05/24",
    img: tms2,
  },
  {
    title:
      "The Messy Series. Solid Mercy Game Through The Old and New Testament",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 12th May 2024",
    link: "https://drive.google.com/file/d/1igXIZ2T4LiQQIGj27YX_QCpVWQ0rHvmK/view?usp=drive_link",
    name: "Priorities - 12/05/24",
    img: tms,
  },
  {
    title: "Honour Code: Discovering the powers of honouring relationships",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 14th April 2024",
    link: "https://drive.google.com/file/d/1bU9DihS9VAI3sZ5lH66Cw489lf3RtGtP/view?usp=drive_link",
    name: "The Builders - 14/04/24",
    img: hc2,
  },
  {
    title: "Honour Code: Exploring the Significance of honour",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 7th April 2024",
    link: "https://drive.google.com/file/d/1ZePJ7vhCyoSLTOxqfdanH67L3iZuCgU-/view?usp=drive_link",
    name: "The Builders - 07/04/24",
    img: hc1,
  },
  {
    title: "The Exchange: Life changing Transaction",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 31st March 2024",
    link: "https://drive.google.com/file/d/1PdVA2A5v-YDlo7DY4cJxpuDXn3yQ_nCv/view?usp=drive_link",
    name: "The Builders - 31/03/24",
    img: xchge,
  },
  {
    title: "The Builders",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 24th March 2024",
    link: "https://drive.google.com/file/d/1ITgVuBu2uEA_Dhw4rViZIjp_sdGjrhVk/view?usp=drive_link",
    name: "The Builders - 24/03/24",
    img: dbild,
  },
  {
    title: "Central Bank of Heaven",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 10th March 2024",
    link: "https://drive.google.com/file/d/14cSl5cLHzLU2qhw9Tzu3WgtBWcQLb3tj/view?usp=drive_link",
    name: "Central Bank of Heaven - 10/03/24",
    img: cbh,
  },
  {
    title: "Faith it till you Make it",
    preacher: "Pst. Adetoun Adekoya",
    date: "Sunday 3rd March 2024",
    link: "https://drive.google.com/file/d/1_OAXCo_KOwOKyImOeYS6mziIVJOR2p9k/view?usp=drive_link",
    name: "Faith it till you Make it - 26/06/23",
    img: fitmi,
  },
];

const tabs = [
  { path: "/", label: "2024" },
  { path: "year25", label: "2025" },
  { path: "/year26", label: "2026" }
];

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <main>
        <Header />
        {/* <Tab /> */}

        <div>
          <Tabs tabs={tabs} activeTab="/" />
        </div>

        <Sermon sermons={sermons} sermonYear={"2024 Sermons"} />
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
