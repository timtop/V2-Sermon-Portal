import * as React from "react";
import Header from "../components/Header";
import Sermon from "../components/sermon";
import Tabs from "../components/Tab";
import { Helmet } from "react-helmet";
import Jan42026 from "../images/twenty-twenty-six/Jan42026.jpeg";
import Jan112026 from "../images/twenty-twenty-six/11thjan2026.jpg";
import Jan182026 from "../images/twenty-twenty-six/jan182026.jpeg";
import Jan252026 from "../images/twenty-twenty-six/Jan252026.jpeg";
import Feb012026 from "../images/twenty-twenty-six/Feb012026.jpeg";
import Feb222026 from "../images/twenty-twenty-six/Feb222026.jpeg";
import March1st from "../images/twenty-twenty-six/March1st.jpeg";
import March8th from "../images/twenty-twenty-six/March082026.jpeg";
import March15th from "../images/twenty-twenty-six/Pmaymarch15.jpeg";
import March22nd from "../images/twenty-twenty-six/March222026.jpeg";
import March29 from "../images/twenty-twenty-six/March292026.jpeg";
import April52026 from "../images/twenty-twenty-six/April52026.jpeg";
import April122026 from "../images/twenty-twenty-six/April122026.jpeg";


const sermons = [

  {
    title: "Main Character: What You Don't Know About Jesus",
    preacher: "Pastor Mayowa Agbelese",
    date: "Sunday, 12th April, 2026",
    link: "https://drive.google.com/file/d/1zf4QecLzOXPI3JRmzvy-VaHuIP_j90n4/view?usp=drive_link",
    img: April122026,
  },
  {
    title: "The Greatest Comeback: The Death, Burial and Resurrection",
    preacher: "Pastor Mayowa Agbelese",
    date: "Sunday, 5th April, 2026",
    link: "https://drive.google.com/file/d/1iBTiy15Fu1PfrnadveAkBPDH61WbImJ-/view?usp=drive_link",
    img: April52026,
  },
  {
    title: "Living Freely From The Heart: Freedom",
    preacher: "Pastor Mayowa Agbelese",
    date: "Sunday, 29th March, 2026",
    link: "https://drive.google.com/file/d/1J4P3NfimPVqsKNL8DZ3-TRUznHS3SUxF/view?usp=drive_link",
    img: March29,
  },
  {
    title: "Inside Out: Healing from Disappointment, Grief, and Pain",
    preacher: "Pastor Mayowa Agbelese",
    date: "Sunday, 22th March, 2026",
    link: "https://drive.google.com/file/d/18cZUNmDEXzjWSYh6JJdeSYjtTF2beT4L/view?usp=sharing",
    img: March22nd,
  },
    {
    title: "HeartCheck: Dealing with Bitterness Before It Destroys You",
    preacher: "Pastor Mayowa Agbelese",
    date: "Sunday, 15th March, 2026",
    link: "https://drive.google.com/file/d/1_sAWZrSlJQ221EQC5QHWNA4rDetgbsSX/view?usp=drive_link",
    img: March15th,
  },
  {
    title: "Heart Matters: Embracing God's Love while Healing from Hurt",
    preacher: "Pastor Mayowa Agbelese",
    date: "Sunday, 8th March, 2026",
    link: "https://drive.google.com/file/d/1lGqV8UAZRCydv8_d4418EWDAyMFPI6y_/view?usp=drive_link",
    img: March8th,
  },
  {
    title: "Thanksgiving Service: Loved By God",
    preacher: "Pastor Mayowa Agbelese",
    date: "Sunday, 1st March, 2026",
    link: "https://drive.google.com/file/d/1yGuhwK8-07KWNrj85zSyk2Dy5CBikfvc/view?usp=drive_link",
    img: March1st,
  },
  {
    title: "Family Circles: Understanding Parenting",
    preacher: "The Agbeleses",
    date: "Sunday, 22nd February, 2026",
    link: "https://drive.google.com/file/d/1Dm9mA5N_ezLCifRz_l7O8E1X2znBVoa9/view?usp=drive_link",
    img: Feb222026,
  },
  {
    title: "A Friendship Carnival: Friend Ties",
    preacher: "Pst Mayowa Agbelese",
    date: "Sunday, 1st February, 2026",
    link: "https://drive.google.com/file/d/1xROQFB_FpKeM8T3LaOxfGNuutw5d5rz1/view?usp=sharing",
    img: Feb012026,
  },
  {
    title: "Pioneering Again IV",
    preacher: "Pst Mayowa Agbelese",
    date: "Sunday, 25th January, 2026",
    link: "https://drive.google.com/file/d/1zfJ1_RHPy3Yt25pCHiOZXfpyScj6B4TQ/view?usp=drive_link",
    img: Jan252026,
  },
  {
    title: "Pioneering Again III",
    preacher: "Pst Mayowa Agbelese",
    date: "Sunday, 18th January, 2026",
    link: "https://drive.google.com/file/d/1cnXnWVhXppFDvzu8hNc4V8K_5m9Irzwr/view?usp=sharing",
    img: Jan182026,
  },
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
  { path: "/year26", label: "2026" },
  { path: "/teachings", label: "Business Teachings" }
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

export const Head = () => <title>2026 Sermons</title>;
