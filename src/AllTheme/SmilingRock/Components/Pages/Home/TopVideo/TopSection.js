import { useEffect, useRef, useState } from "react";
import { storImagePath } from "../../../../../../utils/Glob_Functions/GlobalFunction";
import "./TopSection.modul.scss";

const TopSection = () => {
  const [loading, setLoading] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const videoRef = useRef(null);
  const [localData, setLocalData] = useState();
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    let localData = JSON.parse(sessionStorage.getItem("storeInit"));
    if (localData) {
      setLocalData(localData);
    }
  }, []);

  const handleVideoLoad = () => {
    setLoading(false);
    setShowControls(true);
  };

  const handleVideoPlay = () => {
    setVideoStarted(true);
  };

  const handleVideoCanPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="smr_topVideoMain" style={{ minHeight: "550px" }} onContextMenu={(e) => { e.preventDefault() }}>
      {/* {Kayra} */}
      <video
        ref={videoRef}
        width="500"
        autoPlay
        muted
        controls={false}
        loop
        style={{ height: "auto", width: "100%" }}
        preload="auto"
        poster={`${storImagePath()}/images/HomePage/TopSection/poster1.webp`}
        onLoadedData={handleVideoLoad} // Video has finished loading data
      >
        <source

          src={`${storImagePath()}/images/HomePage/TopSection/HomepageMainBannerVideo.mp4`}
          type="video/mp4"
        />
        <track src={`${storImagePath()}/images/HomePage/TopSection/HomepageMainBannerVideo.mp4`} kind="subtitles" srcLang="en" label="english" />
      </video>

      {/* {Define} */}
      {/* <video
        ref={videoRef}
        width="500"
        autoPlay
        muted
        controls={false}
        loop
        style={{ height: "auto", width: "100%" }}
        preload="auto"
        poster={`${storImagePath()}/Banner/homepageVideoPoster.webp`}
        onLoadedData={handleVideoLoad} // Video has finished loading data
      >
        <source

          src={`${storImagePath()}/Banner/homepagemainvideo.webm`}
          type="video/mp4"
        />
        <track src={`${storImagePath()}/Banner/homepagemainvideo.webm`} kind="subtitles" srcLang="en" label="english" />
      </video> */}

      {/* {Miora} */}
      {/* <video
        ref={videoRef}
        width="500"
        autoPlay
        muteda
        controls={false}
        loop
        style={{ height: "auto", width: "100%" }}
        preload="auto"
        poster={`${storImagePath()}/images/HomePage/TopSection/poster1.webp`}
        onLoadedData={handleVideoLoad} // Video has finished loading data
      >
        <source

          src={`${storImagePath()}/images/HomePage/TopSection/HomepageMainBannerVideo.mp4`}
          type="video/mp4"
        />
        <track src={`${storImagePath()}/images/HomePage/TopSection/HomepageMainBannerVideo.mp4`} kind="subtitles" srcLang="en" label="english" />
      </video> */}
    </div>
  );
};

export default TopSection;
