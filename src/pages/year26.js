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
import March1st from "../images/twenty-twenty-six/March1st.jpeg"

const sermons = [

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
