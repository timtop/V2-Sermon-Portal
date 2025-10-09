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
import tgtb from "../images/twenty-twentyfive/tgtb.jpeg";
import tgtb2 from "../images/twenty-twentyfive/tgtb2.jpeg";
import water from "../images/twenty-twentyfive/water.jpeg";
import revivalbegins from "../images/twenty-twentyfive/revival-begins.jpeg";
import whirlwind from "../images/twenty-twentyfive/whirlwind.jpeg";
import breaking from "../images/twenty-twentyfive/breaking.jpg";
import breakingii from "../images/twenty-twentyfive/breakingii.jpeg";
import favour from "../images/twenty-twentyfive/favour.jpeg";
import fav from "../images/twenty-twentyfive/favii.jpg";
import tgs from "../images/twenty-twentyfive/tgs1.jpeg";

const sermons = [
  {
    title: "Thanksgiving Service - Building Your Life's Vision",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 5th October, 2025",
    link: "https://drive.google.com/file/d/1NDtzvEk94wZnSmaUx5661arIfmGmsjng/view?usp=drive_link",
    img: tgs,
  },
  {
    title: "Favour II - Heaven's Currency.",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 28th September, 2025",
    link: "https://drive.google.com/file/d/1j9wsa73m4lbb3DrjsUgI0y8VQVcEsuZs/view?usp=drive_link",
    img: fav,
  },
  {
    title: "Favor, The Game Changer",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 21st September, 2025",
    link: "https://drive.google.com/file/d/1bZfEh7jt7dAbWtX90VEwTULWEMpz4QAe/view?usp=drive_link",
    name: "Priorities - 22/06/25",
    img: favour,
  },
  {
    title: "Breaking Pattern, What to do to break the cycle",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 14th September 2025",
    link: "https://drive.google.com/file/d/123TZ77t3qYwB7yes3gc3hpq2haXjHUKE/view?usp=drive_link",
    name: "Priorities - 22/06/25",
    img: breakingii,
  },
  {
    title: "Breaking Generational Patterns",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 7th September 2025",
    link: "https://drive.google.com/file/d/1cSWmxjfBrgADXC_zWHESgcBgGTTA_k8p/view?usp=sharing",
    name: "Priorities - 22/06/25",
    img: breaking,
  },
  {
    title: "A Whirlwind of Testimonies",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 17th August 2025",
    link: "https://drive.google.com/file/d/1rdkVvvOl0IFKTtD9SxTAZummt4eqjr9P/view?usp=drive_link",
    name: "Priorities - 22/06/25",
    img: whirlwind,
  },
  {
    title: "How a Revival Begins",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 10th August 2025",
    link: "https://drive.google.com/file/d/1tyOvfN7k-VJ-Xpv78RM3fqvVosL1jZxO/view?usp=drive_link",
    name: "Priorities - 22/06/25",
    img: revivalbegins,
  },
  {
    title: "Walk on Water - God can be trusted",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 3rd August 2025",
    link: "https://drive.google.com/file/d/1t51JsxeiHe6-jWv4r82qSs4HBl2QHfNS/view?usp=drive_link",
    name: "Priorities - 22/06/25",
    img: water,
  },
  {
    title: "The Grace and The Blessing - Liberated, Christ paid it all",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 20th July 2025",
    link: "https://drive.google.com/file/d/1S5Wix64W3OZijAROnhwRe2TAxnPBYBK1/view?usp=sharing",
    name: "Priorities - 22/06/25",
    img: tgtb2,
  },
  {
    title: "The Grace and The Blessing",
    preacher: "Pst. Mayowa Agbelese",
    date: "Sunday 13th July 2025",
    link: "https://drive.google.com/file/d/177aye4K_YrdkpKTw9xA6nKevvr5Awg2L/view?usp=sharing",
    name: "Priorities - 22/06/25",
    img: tgtb,
  },
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
