import React from "react";
import "./index.css";

const MyVideos = () => {
  const videos = [
    {
      id: "hvDHGLnjLKU",
      name: "طريقة إنشاء موقع إلكتروني كامل باستخدام HTML CSS JS",
      img: "website1.jpg",
    },
    {
      id: "K0_hZrV3TD4",
      name: "شرح كيفية إستخدام الرياكت مع التايبسكريبت React Typescript بالعربية",
      img: "website2.jpg",
    },
    {
      id: "Yh-9PrbzZAY",
      name: "طريقة إنشاء موقع متعدد اللغات بإستخدام HTML JS - JavaScript Localization",
      img: "website3.webp",
    },
    {
      id: "1eUeRUMfnU8",
      name: "شرح طريقة التلاعب بال DOM بإستخدام جافاسكريبت - JavaScript DOM Manipulation",
      img: "website4.jpg",
    },
    {
      id: "Hl9e-gPVBWo",
      name: "طريقة إنشاء موقع لإختصار الروابط URL Shortener بإستخدام Node.js, Express, MongoDB, HTML, CSS, JS",
      img: "website5.jpg",
    },
    {
      id: "WBDiE1o8hEM",
      name: "طريقة إنشاء موقع إلكتروني كامل باستخدام HTML CSS JS ونشره",
      img: "website6.jpg",
    },
    {
      id: "dMMZhqtiVL8",
      name: "مشروع جافا سكريبت ١ - NASA API - HTML CSS JS",
      img: "website7.jpg",
    },
    {
      id: "mkp1o_XMG8c",
      name: "طريقة إنشاء REST API باستخدام Node js و Express",
      img: "website8.jpg",
    },
    {
      id: "UdELfjWggPc",
      name: "Styled Components Crash Course [Arabic] شرح",
      img: "website9.jpg",
    },
    {
      id: "IDW7tSRY5Wo",
      name: "طريقة إنشاء Navigation Bar باستخدام React JS",
      img: "website10.jpg",
    },
  ];

  return (
    <div className="my-videos">
      <h1>My Videos</h1>
      <div className="videos">
        {videos.map((video: Record<string, string>) => (
          <div className="video" key={video.name}>
            <a
              target="_blank"
              rel="noreferrer"
              href={"https://youtu.be/" + video.id}
            >
              <h3>{video.name}</h3>
              <img src={"/images/youtube/" + video.img} alt={video.name} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyVideos;
