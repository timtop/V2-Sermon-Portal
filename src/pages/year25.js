import * as React from "react";
import Header from "../components/Header";
import Sermon from "../components/sermon";
import Tabs from "../components/Tab";

import pri from "../images/2025/Priorities.jpeg";

const sermons = [
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
