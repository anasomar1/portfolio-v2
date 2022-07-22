import React from "react";
import "./index.css";

const MyVideos = () => {
  const videoIds = [
    "hvDHGLnjLKU",
    "K0_hZrV3TD4",
    "Yh-9PrbzZAY",
    "1eUeRUMfnU8",
    "Hl9e-gPVBWo",
    "WBDiE1o8hEM",
    "dMMZhqtiVL8",
    "mkp1o_XMG8c",
    "UdELfjWggPc",
    "IDW7tSRY5Wo",
    "gR6mD5UO8kI",
  ];
  return (
    <div className="my-videos">
      <h1>My Videos</h1>
      <div className="videos">
        {videoIds.map((id: string) => (
          <iframe
            width="100%"
            height="100%"
            src={"https://www.youtube.com/embed/" + id}
            title="Youtube Video Player"
            className="video"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default MyVideos;
