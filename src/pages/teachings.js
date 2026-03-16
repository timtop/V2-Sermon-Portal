import * as React from "react";
import Header from "../components/Header";
import Sermon from "../components/sermon";
import Tabs from "../components/Tab";
import { Helmet } from "react-helmet";
import Jennjejelaye from "../images/teachings/JennJejelaye.jpeg";
import Damilare from "../images/teachings/DamilareAJomale.jpeg";
import Comfort from "../images/teachings/ComfortTosin.jpeg";
import Tomie from "../images/teachings/TomieBalogun.jpeg";


const sermons = [

  {
    title: "Building a Business That Runs Without You: Scaling Beyond the Founder/Business Owner",
    preacher: "Tomie Balogun",
    date: "Sunday, 15th March, 2026",
    link: "https://drive.google.com/file/d/135dLiE-fDA8JO1-s1-kG0S-pEXPhoAqd/view?usp=drive_link",
    img: Tomie,
  },
  
  {
    title: "Profit is not an Accident: Predictable Sales, not Occassional Luck",
    preacher: "Comfort Oluwatosin Olugbami",
    date: "Sunday, 8th March, 2026",
    link: "https://drive.google.com/file/d/1mGq5xik46j-k38xXzXB3nOKz2ohn0R9s/view?usp=drive_link",
    img: Comfort,
  },
  {
    title: "Becoming Too Valuable To Ignore: Influence Is Not Noise",
    preacher: "Jenn Jejelaye",
    date: "Sunday, 1st March, 2026",
    link: "https://drive.google.com/file/d/1IY0AQ9ZuScpFvIBZ3yny_8ASpxIq5dqE/view?usp=drive_link",
    img: Jennjejelaye,
  },
  {
    title: "The Real Reason Your Income Has Plateaued: Career Risk, Reinvention & Longevity",
    preacher: "Damilare Ajomale",
    date: "Sunday, 22nd February, 2026",
    link: "https://drive.google.com/file/d/1zV-cHhtgG-5ViP3mxUKFjWq8urpD64D4/view?usp=drive_link",
    img: Damilare,
  },
];

const tabs = [
  { path: "/", label: "2024" },
  { path: "/year25", label: "2025" },
  { path: "/year26", label: "2026" },
  { path: "/teachings", label: "Business Teachings" }
];

const teachings = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <main>
        <Header />

        <div>
          <Tabs tabs={tabs} activeTab="/teachings" />
        </div>

        <Sermon sermons={sermons} sermonYear={"Business Teachings"} />
      </main>
    </>
  );
};

export default teachings;

export const Head = () => <title>Business Teachings</title>;
