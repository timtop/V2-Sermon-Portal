import * as React from "react";
import Header from "../components/Header";
import Sermon from "../components/sermon";
import Tabs from "../components/Tab";
import { Helmet } from "react-helmet";

import pri from "../images/twenty-twentyfive/priorities.jpeg";
import symph from "../images/twenty-twentyfive/symphony.jpg";
import emo from "../images/twenty-twentyfive/emo.jpg";
import pray from "../images/twenty-twentyfive/pray.jpg";
import ecos from "../images/twenty-twentyfive/ecos.jpg";
import bpray from "../images/twenty-twentyfive/buildprayer.jpg";
import create from "../images/twenty-twentyfive/create.jpg";
import tpc from "../images/twenty-twentyfive/tpc.jpg";
import liv from "../images/twenty-twentyfive/liv-purpose.jpeg";
import lip2 from "../images/twenty-twentyfive/lip2.jpg";
import pdl from "../images/twenty-twentyfive/pdl.jpeg";
import hot from "../images/twenty-twentyfive/hot.jpeg";

const sermons = [
  {
    title: "Heart of Thanksgiving",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 6th July 2025",
    link: "https://drive.google.com/file/d/1pD5s6B5sjZXG9hescXjQgVQzWVZYefSc/view?usp=drive_link",
    name: "Priorities - 22/06/25",
    img: hot,
  },
  {
    title: "A Purpose Driven Life",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 29th June 2025",
    link: "https://drive.google.com/file/d/1dQtqPafoaCSgWQAfPDyBPvb1EePohZMK/view?usp=drive_link",
    name: "A Purpose Driven Life - 22/06/25",
    img: pdl,
  },
  {
    title: "Living in Purpose - Understanding seasons in your calling",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 22nd June 2025",
    link: "https://drive.google.com/file/d/1xfyWdgdjV6Fcm_sKjJXk5gD26VsSnLwT/view?usp=sharing",
    name: "Priorities - 22/06/25",
    img: lip2,
  },
  {
    title:
      "Living in Purpose - Graces and places in connection with your calling",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 15th June 2025",
    link: "https://drive.google.com/file/d/1A99nK4oKGCa6svW7r28-kgf9YZnH2GcZ/view?usp=drive_link",
    name: "Priorities - 15/06/25",
    img: liv,
  },
  {
    title: "The Purpose Code",
    preacher: "Dcn. Opeyemi Agbelese",
    date: "Sunday 8th June 2025",
    link: "https://drive.google.com/file/d/1AypPyz8YtyAtU1edJHqa0np_kvHMMlka/view?usp=drive_link",
    name: "Priorities - 8/06/25",
    img: tpc,
  },
  {
    title: "CREATIVE SUNDAY",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 2nd June 2025",
    link: "https://drive.google.com/file/d/1OcSya2niHvFTX4k5SN23DIq_pSRjWyWc/view?usp=drive_link",
    name: "Priorities - 2/06/25",
    img: create,
  },
  {
    title: "Building a prayer culture",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 25th May 2025",
    link: "https://drive.google.com/file/d/1IYjsIW-oJ6iwTpH4qPznWCGlz0TgBkVl/view?usp=drive_link",
    name: "Priorities - 25/05/25",
    img: bpray,
  },
  {
    title: "Prayerthon, Echoes of Tongues",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 18th May 2025",
    link: "https://drive.google.com/file/d/156IAsS9PV9yOyRRH0RBGNr98PkBy9ISs/view?usp=drive_link",
    name: "Priorities - 18/05/25",
    img: ecos,
  },
  {
    title: "Prayerthon, Understanding Different Kind of Prayer",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 11th May 2025",
    link: "https://drive.google.com/file/d/1igXIZ2T4LiQQIGj27YX_QCpVWQ0rHvmK/view?usp=drive_link",
    name: "Priorities - 11/05/25",
    img: pray,
  },
  {
    title: "Thorns to Throne",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 20th April, 2025",
    link: "https://drive.google.com/file/d/1-8Arm1me0PZLdME49WRD52lsNObdQTYL/view?usp=drive_link",
    name: "Priorities - 22/06/25",
    img: pri,
  },
  {
    title: " Go. Walking by faith and not by sight",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 6th April, 2025",
    link: "https://drive.google.com/file/d/12mp11OJlhq9U3JsVl90V30RRmxTedCYD/view?usp=drive_link",
    name: "Priorities - 22/06/25",
    img: pri,
  },
  {
    title: "Emotional Baggage. Healing from trauma, closure and moving on",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 23rd February 2025",
    link: "https://drive.google.com/file/d/1-FPiG7aMAFq97C1YoGcRhkqlHAo0coD1/view?usp=drive_link",
    name: "Priorities - 23/02/25",
    img: emo,
  },
  {
    title: "Sunday after Symphony",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 16th February 2025",
    link: "https://drive.google.com/file/d/1g5GolNGrGy_IF7Hgos07v9VUJu22E3QV/view?usp=drive_link",
    name: "Priorities - 16/02/25",
    img: symph,
  },
  {
    title: "SYMPHONY CONFERENCE 2025",
    preacher: "Pst. Mayowa Agbelese, Pst. Ladi Shotonwa",
    date: "Saturday 15th February 2025",
    link: "https://drive.google.com/file/d/11qJrRqkWfIylmDP5wxPYfsK11lOIkfFd/view?usp=drive_link",
    name: "Priorities - 15/02/25",
    img: symph,
  },
  {
    title: "Priorities: A Special New Years ThanksGiving",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 5th January 2025",
    link: "https://drive.google.com/file/d/1KAw6ZahqAS0X7F0iL7ZdpROHAOrPAx01/view?usp=drive_link",
    name: "Priorities - 05/01/25",
    img: pri,
  },
];

const tabs = [
  { path: "/", label: "2024" },
  { path: "/year25", label: "2025" },
];

const year25 = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <main>
        <Header />

        <div>
          <Tabs tabs={tabs} activeTab="/year25" />
        </div>

        <Sermon sermons={sermons} sermonYear={"2025 Sermons"} />
      </main>
    </>
  );
};

export default year25;

export const Head = () => <title>Home Page</title>;
