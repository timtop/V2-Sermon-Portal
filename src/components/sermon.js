import React from "react";
import downloadbtn from "../images/Download icon.svg";
import "../styles/sermons.css";

function Sermon({ sermons, sermonYear }) {
  const render2021 = () => {
    return sermons.map((sermon) => {
      return (
        <div className="sermon_card">
          <img src={sermon.img} alt="Avatar" className="sermon_img" />
          <div className="sermon_container">
            <div className="sermon_title">
              <b>{sermon.title}</b>
            </div>
            <div className="sermon_preacher">{sermon.preacher}</div>
            <div className="sermon_date">{sermon.date}</div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={sermon.link}
              download={sermon.name}
            >
              <div className="download_btn">
                <img src={downloadbtn} alt="Avatar" className="download_icon" />
                Download
              </div>
            </a>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="sermon">
      <h1>{sermonYear}</h1>
      <div className="card_display">{render2021()}</div>

      {/* <h1>Sermons 2021</h1> */}
      {/* <div className="card_display">{render2022()}</div> */}
    </div>
  );
}

export default Sermon;
