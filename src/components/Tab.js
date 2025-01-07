// import React from "react";
// import "../styles/tab.css";

// export default function Tab() {
//   return (
//     <div>
//       <div class="tab-container">
//         <a href="#2024" class="tab-button">
//           2024
//         </a>
//         <a href="#2025" class="tab-button">
//           2025
//         </a>
//       </div>
//     </div>
//   );
// }

// src/components/Tabs.js
import React from "react";
import { Link } from "gatsby";
import "../styles/tab.css";

const Tabs = ({ tabs, activeTab }) => {
  return (
    <div className="tab-container">
      {tabs.map((tab) => (
        <Link
          key={tab.path}
          to={tab.path}
          className={`tab-button ${activeTab === tab.path ? "active" : ""}`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
