import * as React from "react";
import Header from "../components/Header";
import Sermon from "../components/sermon";
import Tabs from "../components/Tab";

import pri from "../images/twenty-twentyfive/priorities.jpeg";
import symph from "../images/twenty-twentyfive/symphony.jpg";
import emo from "../images/twenty-twentyfive/emo.jpg";
import pray from "../images/twenty-twentyfive/pray.jpg";
import ecos from "../images/twenty-twentyfive/ecos.jpg";
import bpray from "../images/twenty-twentyfive/buildprayer.jpg";
import create from "../images/twenty-twentyfive/create.jpg";
import tpc from "../images/twenty-twentyfive/tpc.jpg";

const sermons = [
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
    img: pri,
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
    <main>
      <Header />

      <div>
        <Tabs tabs={tabs} activeTab="/year25" />
      </div>

      <Sermon sermons={sermons} sermonYear={"2025 Sermons"} />
    </main>
  );
};

export default year25;

export const Head = () => <title>Home Page</title>;
