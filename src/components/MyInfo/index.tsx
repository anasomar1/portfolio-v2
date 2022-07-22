import React from "react";
import "./index.css";
import {
  IoDownloadOutline,
  IoLogoWebComponent,
  IoLogoYoutube,
  IoPhonePortraitSharp,
} from "react-icons/io5";

const MyInfo = () => {
  return (
    <div className="my-info">
      <img src="/images/personal-pic.jpg" alt="personal pic" />
      <div className="info">
        <h1>I'm Anas Yaseen</h1>
        <div className="skill">
          <IoLogoWebComponent />
          <p>fullstack software developer</p>
        </div>
        <div className="skill">
          <IoPhonePortraitSharp />
          <p>mobile developer</p>
        </div>
        <div className="skill">
          <IoLogoYoutube />
          <p>content creator</p>
        </div>
        <a
          className="download"
          href="/AnasYaseenCV.pdf"
          download="AnasYaseen.pdf"
        >
          <IoDownloadOutline />
          <p>My Resume(PDF)</p>
        </a>
      </div>
    </div>
  );
};

export default MyInfo;
