import React, { lazy, useEffect, useLayoutEffect, useState } from "react";
import "./Index.modul.scss";
import { homeLoading } from "../../Recoil/atom";
import { useRecoilValue } from "recoil";
import  Album1  from "./Album/Album1";

const  TopSection = lazy(()=>import("./TopVideo/TopSection"));
const  TheDifference = lazy(()=>import("./TheDifference/TheDifference"));
const  PromotionBaner1 = lazy(()=>import("./PromotionBanner1/PromotionBaner1"));
const  PromotionBaner2 = lazy(()=>import("./PromotionBanner1/PromotionBaner2"));
const  ShopByCategory = lazy(()=>import("./ShopByCategory/ShopByCategory"));
const  PromoSetSection = lazy(()=>import("./BestSellerSection/BestSellerSection"));
const  SustainAbility = lazy(()=>import("./SustainAbility/SustainAbility"));
const  BottomBanner = lazy(()=>import("./BottomBanner/BottomBanner"));
const  Footer = lazy(()=>import("./Footer/Footer"));
const  TrendingView = lazy(()=>import("./TrandingView/TrendingView"));
const  TrendingView1 = lazy(()=>import("./TrandingView/TrendingView1"));
const  DesignSet = lazy(()=>import("./DesignSet/DesignSet1"));
const  DesignSet1 = lazy(()=>import("./DesignSet/DesignSet2"));
const  Album = lazy(()=>import("./Album/Album"));
const  NewArrival = lazy(()=>import("./NewArrival/NewArrival"));
const  NewArrival1 = lazy(()=>import("./NewArrival/NewArrival1"));
const  BestSellerSection = lazy(()=>import("./BestSellerSection/BestSellerSection"));
const  BestSellerSection1 = lazy(()=>import("./BestSellerSection/BestSellerSection1"));
const  BrandsComponent = lazy(()=>import("./BrandComponent/BrandComponents"));
const  NewsletterSignup = lazy(()=>import("./SubscribeNewsLater/NewsletterSignup"));

function Home() {
  const [localData, setLocalData] = useState();
  const [minHeight, setMinHeight] = useState("0px");
  const [htmlContent, setHtmlContent] = useState("");
  const isLoadingHome = useRecoilValue(homeLoading);
  const [isMount,setIsMount]  =useState(true)

  useEffect(() => {
    setIsMount(false)
    let localData = JSON?.parse(sessionStorage.getItem("storeInit"));
    setLocalData(localData);
    if (localData) {
      setMinHeight("0px");
    }
    setCSSVariable();
  }, []);

  useLayoutEffect(() => {
   setTimeout(() => {
    window.scrollTo(-114,-200);
   }, 300);
  }, []);

  // useEffect(() => {
  //   fetch(`${storInitDataPath()}/StoreInit.json`)
  //     .then((response) => response.text())
  //     .then((text) => {
  //       try {
  //         const jsonData = JSON?.parse(text);
  //         setHtmlContent(jsonData);
  //       } catch (error) {
  //         console.error("Error parsing JSON:", error);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching the file:", error);
  //     });
  // }, []);

  const setCSSVariable = () => {
    const storeInit = JSON?.parse(sessionStorage.getItem("storeInit"));
    const backgroundColor = storeInit?.IsPLW == 1 ? "#c4cfdb" : "#c0bbb1";
    document.documentElement.style.setProperty(
      "--background-color",
      backgroundColor
    );
  };

  return (
    <>
      {/* {htmlContent?.rd && htmlContent?.rd.length > 0 && */}
      {localData?.YearCode !== "" &&
        (
          <div className="smiling_home_index_main">
            <div style={{ backgroundColor: "white" }}>
              {/* {htmlContent?.rd[0]?.Blockno === 1 && ( */}
              {localData?.Blockno === 1 && (
                <div className="smiling_home_index_Submain">
                  <TopSection />
                  <TheDifference />
                  <PromotionBaner1 />
                  {localData?.IsHomeAlbum === 1 && <Album />}
                  {localData?.IsHomeBestSeller === 1 && <BestSellerSection />}
                  {localData?.IsHomeNewArrival === 1 && <NewArrival />}
                  {localData?.IsHomeTrending === 1 && <TrendingView />}
                  {localData?.IsHomeDesignSet === 1 && <DesignSet />}
                  <BottomBanner />
                  {/* <NewsletterSignup/> */}
                  <Footer />
                </div>
              )}
            </div>
            <div style={{ backgroundColor: "white" }}>
              {/* {htmlContent?.rd[0]?.Blockno === 2 && ( */}
              {localData?.Blockno === 2 && (
                <div className="smiling_home_index_Submain">
                  <TopSection />
                  <TheDifference />
                  <PromotionBaner2 />
                  {localData?.IsHomeAlbum === 1 && <Album1 />}
                  {localData?.IsHomeBestSeller === 1 && <BestSellerSection1 />}
                  {localData?.IsHomeNewArrival === 1 && <NewArrival1 />}
                  {localData?.IsHomeTrending === 1 && <TrendingView1 />}
                  {localData?.IsHomeDesignSet === 1 && <DesignSet1 />}
                  {isLoadingHome == true ?
                    <div className="smrHome_loader_container">
                      <div className="smrHome_loader"></div>
                    </div>
                    :
                    <>
                      <BottomBanner />
                      <BrandsComponent />
                    {/* <NewsletterSignup/> */}
                      <Footer />
                    </>
                  }
                </div>
              )}
            </div>
            <div>
             {!isMount && <p
                style={{
                  paddingBlock: "30px",
                  margin: "0px",
                  textAlign: "center",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  whiteSpace: "nowrap"
                }}
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
              >
                BACK TO TOP
              </p>}
            </div>
          </div>
        )}
    </>
  );
}

export default Home;





// import React, { useEffect, useState } from "react";
// import "./Index.modul.scss";
// import TopSection from "./TopVideo/TopSection";
// import TheDifference from "./TheDifference/TheDifference";
// import PromotionBaner1 from "./PromotionBanner1/PromotionBaner1";
// import PromotionBaner2 from "./PromotionBanner1/PromotionBaner2";
// import ShopByCategory from "./ShopByCategory/ShopByCategory";
// import PromoSetSection from "./BestSellerSection/BestSellerSection";
// import SustainAbility from "./SustainAbility/SustainAbility";
// import BottomBanner from "./BottomBanner/BottomBanner";
// import Footer from "./Footer/Footer";
// import TrendingView from "./TrandingView/TrendingView";
// import TrendingView1 from "./TrandingView/TrendingView1";
// import DesignSet from "./DesignSet/DesignSet1";
// import DesignSet1 from "./DesignSet/DesignSet2";
// import Album from "./Album/Album";
// import Album1 from "./Album/Album1";
// import NewArrival from "./NewArrival/NewArrival";
// import NewArrival1 from "./NewArrival/NewArrival1";
// import BestSellerSection from "./BestSellerSection/BestSellerSection";
// import BestSellerSection1 from "./BestSellerSection/BestSellerSection1";
// import BrandsComponent from "./BrandComponent/BrandComponents";
// import { storImagePath } from "../../../../../utils/Glob_Functions/GlobalFunction";

// function Home() {
//   const [localData, setLocalData] = useState();
//   const [minHeight, setMinHeight] = useState("0px");
//   const [htmlContent, setHtmlContent] = useState("");

//   useEffect(() => {
//     let localData = JSON?.parse(sessionStorage.getItem("storeInit"));
//     setLocalData(localData);
//     if (localData) {
//       setMinHeight("0px");
//     }
//     setCSSVariable();
//   }, []);

//   useEffect(() => {
//     fetch(`${storImagePath()}/ExtraFlag.txt`)
//       .then((response) => response.text())
//       .then((text) => {
//         try {
//           const jsonData = JSON?.parse(text);
//           setHtmlContent(jsonData);
//         } catch (error) {
//           console.error("Error parsing JSON:", error);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching the file:", error);
//       });
//   }, []);

//   const setCSSVariable = () => {
//     const storeInit = JSON?.parse(sessionStorage.getItem("storeInit"));
//     const backgroundColor = storeInit?.IsPLW == 1 ? "#c4cfdb" : "#c0bbb1";
//     document.documentElement.style.setProperty(
//       "--background-color",
//       backgroundColor
//     );
//   };

//   {
//     htmlContent?.rd && htmlContent?.rd.length > 0 &&
//     console.log('htmlContenthtmlContent', htmlContent?.rd[0]?.Blockno);
//   }
//   return (
//     <>
//       {htmlContent?.rd && htmlContent?.rd.length > 0 && (
//         <div className="smiling_home_index_main">
//           <div style={{ backgroundColor: "white" }}>
//             {/* <div style={{ minHeight: minHeight, backgroundColor: "white" }}> */}
//             {htmlContent?.rd[0]?.Blockno == 1 && (
//               <div className="smiling_home_index_Submain">
//                 <TopSection />
//                 <TheDifference />
//                 <PromotionBaner1 />
//                 {localData?.IsHomeAlbum === 1 && <Album />}
//                 {localData?.IsHomeBestSeller === 1 && <BestSellerSection />}
//                 {/* <DaimondEveyone /> */}
//                 {/* <ShopByCategory /> */}
//                 {localData?.IsHomeNewArrival === 1 && <NewArrival />}
//                 {localData?.IsHomeTrending === 1 && <TrendingView />}
//                 {localData?.IsHomeDesignSet === 1 && <DesignSet />}
//                 {/* <SustainAbility /> */}
//                 {/* <BestSaller /> */}
//                 <BottomBanner />
//                 {/* <BrandsComponent/> */}
//                 <Footer />
//               </div>
//             )}
//           </div>
//           <div style={{ backgroundColor: "white" }}>
//             {/* <div style={{ minHeight: minHeight, backgroundColor: "white" }}> */}
//             {htmlContent?.rd[0]?.Blockno == 2 && (
//               <div className="smiling_home_index_Submain">
//                 <TopSection />
//                 <TheDifference />
//                 <PromotionBaner2 />
//                 {htmlContent?.rd[0]?.IsHomeAlbum === 1 && <Album1 />}
//                 {htmlContent?.rd[0]?.IsHomeBestSeller === 1 && <BestSellerSection1 />}
//                 {/* <DaimondEveyone /> */}
//                 {/* <ShopByCategory /> */}
//                 {htmlContent?.rd[0]?.IsHomeNewArrival === 1 && <NewArrival1 />}
//                 {htmlContent?.rd[0]?.IsHomeTrending === 1 && <TrendingView1 />}
//                 {htmlContent?.rd[0]?.IsHomeDesignSet === 1 && <DesignSet1 />}
//                 {/* <SustainAbility /> */}
//                 {/* <BestSaller /> */}
//                 <BottomBanner />
//                 <BrandsComponent />
//                 <Footer />
//               </div>
//             )}
//           </div>

//           {/* <div style={{ minHeight: localData?.Blockno === 2 && '700px' }}>
//         {localData?.Blockno === 2 &&
//           <div className='smiling_home_index_Submain'>
//             <TopSection />
//             <TheDifference />
//             <PromotionBaner1 />
//             {localData?.IsHomeBestSeller === 1 && <PromoSetSection />}
//             {localData?.IsHomeAlbum === 1 && <Album />}
//             <DaimondEveyone />
//             <ShopByCategory />
//             {localData?.IsHomeNewArrival === 1 && <NewArrival />}
//             {localData?.IsHomeDesignSet === 1 && <DesignSet />}
//             {localData?.IsHomeTrending === 1 && <TrendingView />}
//             <SustainAbility />
//             <BestSaller />
//             <BottomBanner />
//             <BrandsComponent/>
//             <Footer />
//           </div>
//         }
//       </div> */}
//           <div>
//             <p
//               style={{
//                 paddingBlock: "30px",
//                 margin: "0px",
//                 textAlign: "center",
//                 color: "white",
//                 cursor: "pointer",
//                 fontSize: "13px",
//                 fontWeight: 500,
//                 letterSpacing: "1px",
//               }}
//               onClick={() =>
//                 window.scrollTo({
//                   top: 0,
//                   behavior: "smooth",
//                 })
//               }
//             >
//               BACK TO TOP
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Home;
