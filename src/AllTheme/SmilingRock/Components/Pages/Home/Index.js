import React, { lazy, useEffect, useLayoutEffect, useState } from "react";
import "./Index.modul.scss";
import { homeLoading } from "../../Recoil/atom";
import { useRecoilValue } from "recoil";
import Cookies from 'js-cookie'
import QualityCore from "./QualityCore/QualityCore";
import Partners from "./Partners/Partners";
import Growth from "./Growth/Growth";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Category from "./Category/Category";
import Collection from "./Collection/Collection";
import ProductListApi from "../../../../../utils/API/ProductListAPI/ProductListApi";
import Certificate from "./Certificate/Certificate";
import Customer from "./Customer/Customer";
import SocialMedia from "./SocialMedia/SocialMedia";
import ContactUs1 from "../FooterPages/ContactUs1/ContactUs1";
import Mission from "./Mission/Mission";
import PromotionBaner2 from "./PromotionBanner1/PromotionBaner2";
import Album1 from "./Album/Album1";
import BestSellerSection1 from "./BestSellerSection/BestSellerSection1";
import NewArrival1 from "./NewArrival/NewArrival1";
import TrendingView1 from "./TrandingView/TrendingView1";
import DesignSet1 from "./DesignSet/DesignSet2";

// const TopSection = lazy(() => import("./TopVideo/TopSection"));
// const TheDifference = lazy(() => import("./TheDifference/TheDifference"));
// const PromotionBaner1 = lazy(() => import("./PromotionBanner1/PromotionBaner1"));
// const PromotionBaner2 = lazy(() => import("./PromotionBanner1/PromotionBaner2"));
// const ShopByCategory = lazy(() => import("./ShopByCategory/ShopByCategory"));
// const PromoSetSection = lazy(() => import("./BestSellerSection/BestSellerSection"));
// const SustainAbility = lazy(() => import("./SustainAbility/SustainAbility"));
// const BottomBanner = lazy(() => import("./BottomBanner/BottomBanner"));
// const Footer = lazy(() => import("./Footer/Footer"));
// const TrendingView = lazy(() => import("./TrandingView/TrendingView"));
// const TrendingView1 = lazy(() => import("./TrandingView/TrendingView1"));
// const DesignSet = lazy(() => import("./DesignSet/DesignSet1"));
// const DesignSet1 = lazy(() => import("./DesignSet/DesignSet2"));
// const Album = lazy(() => import("./Album/Album"));
// const NewArrival = lazy(() => import("./NewArrival/NewArrival"));
// const NewArrival1 = lazy(() => import("./NewArrival/NewArrival1"));
// const BestSellerSection = lazy(() => import("./BestSellerSection/BestSellerSection"));
// const BestSellerSection1 = lazy(() => import("./BestSellerSection/BestSellerSection1"));
// const BrandsComponent = lazy(() => import("./BrandComponent/BrandComponents"));
// const NewsletterSignup = lazy(() => import("./SubscribeNewsLater/NewsletterSignup"));
// const Aboutus = lazy(() => import("./Aboutus2/Aboutus1"));
// const Album1 = lazy(() => import("./Album/Album1"));
// const Services = lazy(() => import("./Services/Services"));

import TopSection from "./TopVideo/TopSection";
import TheDifference from "./TheDifference/TheDifference";
import PromotionBaner1 from "./PromotionBanner1/PromotionBaner1";
import BottomBanner from "./BottomBanner/BottomBanner";
import Footer from "./Footer/Footer";
import TrendingView from "./TrandingView/TrendingView";
import DesignSet from "./DesignSet/DesignSet1";
import Album from "./Album/Album";
import NewArrival from "./NewArrival/NewArrival";
import BestSellerSection from "./BestSellerSection/BestSellerSection";
import BrandsComponent from "./BrandComponent/BrandComponents";
import Aboutus from "./Aboutus2/Aboutus1";
import Services from "./Services/Services";
import useGlobalPreventSave from "../../../../../utils/Glob_Functions/useGlobalPreventSave";


function Home() {
  // const [localData, setLocalData] = useState();
  const isLoadingHome = useRecoilValue(homeLoading);
  const [collection1, setCollection1] = useState([]);
  const [collection2, setCollection2] = useState([]);
  const [collection3, setCollection3] = useState([]);
  const [isMount, setIsMount] = useState(true)
  const [error, setError] = useState(null);

  const localData = JSON?.parse(sessionStorage.getItem("storeInit"));

  useEffect(() => {
    setIsMount(false)
    // let localData = JSON?.parse(sessionStorage.getItem("storeInit"));
    // setLocalData(localData);
    // if (localData) {
    //   // setMinHeight("0px");
    // }
    setCSSVariable();
  }, []);

  // useLayoutEffect(() => {
  //   setTimeout(() => {
  //     window.scrollTo(-114, -200);
  //   }, 300);
  // }, []);

  useGlobalPreventSave();

  const setCSSVariable = () => {
    const storeInit = JSON?.parse(sessionStorage.getItem("storeInit"));
    const backgroundColor = storeInit?.IsPLW == 1 ? "#c4cfdb" : "#c0bbb1";
    // const backgroundColor = "#1B3349";
    document.documentElement.style.setProperty(
      "--background-color",
      backgroundColor
    );
  };

  let cookie = Cookies.get('visiterId')
  const Collection1 = [["collection"], ["Pie Cut Collection", ,]];
  const Collection2 = [["collection"], ["Invisible Collection", ,]];
  const Collection3 = [["collection"], ["Bezel Collection", ,]];

  useEffect(() => {
    const fetchCollectionData = async () => {
      try {
        // Consolidating all API calls into a single async function
        const [fetchData1, fetchData2, fetchData3] = await Promise.all([
          ProductListApi({}, "", {}, Collection1, cookie),
          ProductListApi({}, "", {}, Collection2, cookie),
          ProductListApi({}, "", {}, Collection3, cookie)
        ]);

        // Safely destructure and set state for each collection
        setCollection1(fetchData1?.pdList || []);
        setCollection2(fetchData2?.pdList || []);
        setCollection3(fetchData3?.pdList || []);
      } catch (err) {
        // Catching and logging any error that occurs during the fetch
        setError('An error occurred while fetching data.');
        console.error(err);  // Log the error for debugging purposes
      }
    };

    fetchCollectionData();  // Call the function to fetch data

  }, [cookie]);

  const handleRedirectLink1 = `/p/PieCut/Collection/?M=${btoa("Pie Cut Collection,,/collection")}`
  const handleRedirectLink2 = `/p/Invisible/Collection/?M=${btoa("Invisible Collection,,/collection")}`
  const handleRedirectLink3 = `/p/Bezel/Collection/?M=${btoa("Bezel Collection,,/collection")}`

  const dfine = 1;

  return (
    <div draggable={false} onContextMenu={(e) => e.preventDefault()}>
      {dfine === 1 ? (
        <>
          {/* {htmlContent?.rd && htmlContent?.rd.length > 0 && */}
          {localData?.YearCode !== "" &&
            (
              <>
                <TopSection />
                <div className="smiling_home_index_main">
                  <div>
                    {/* {htmlContent?.rd[0]?.Blockno === 2 && ( */}
                    {localData?.Blockno === 2 && (
                      <div className="smiling_home_index_Submain">
                        <Aboutus />
                        {/* <Services />   NO NEEDED   */}
                        <div className="collection-section">
                          <h2 className="collection-title">OUR SPECIALITIES</h2>
                          <p className="collection-subtitle">
                            We Specialize In Unique Setting Styles Such As <strong>Pie-cut, Invisible, And Bezel Settings.</strong>
                          </p>
                          <Collection data={collection1} title={"Pie cut Collection"} link={handleRedirectLink1} collNo={1} />
                          <Collection data={collection2} title={"invisible setting"} link={handleRedirectLink2} collNo={2} />
                          <Collection data={collection3} title={"bezel collection"} link={handleRedirectLink3} collNo={3} />
                        </div>
                        <Category />
                        <WhyChooseUs />
                        <QualityCore />
                        <Partners />
                        <Growth />
                        {/* <Certificate />   NO NEEDED */}
                        <Customer />
                        {/* <Mission /> */}
                        {/* <SocialMedia /> */}
                        {/* <ContactUs1 />   NO NEEDED  */}
                        {/* <TheDifference /> */}
                        {/* <PromotionBaner2 />
                  {localData?.IsHomeAlbum === 1 && <Album1 />}
                  {localData?.IsHomeBestSeller === 1 && <BestSellerSection1 />}
                  {localData?.IsHomeNewArrival === 1 && <NewArrival1 />}
                  {localData?.IsHomeTrending === 1 && <TrendingView1 />}
                  {localData?.IsHomeDesignSet === 1 && <DesignSet1 />}
                  <BottomBanner /> */}
                        <BrandsComponent />
                        <Footer />
                      </div>
                    )}
                  </div>
                  <div>
                    {!isMount &&
                      <p
                        style={{
                          paddingBlock: "30px",
                          margin: "0px",
                          textAlign: "center",
                          color: "white",
                          cursor: "pointer",
                          fontSize: "13px",
                          fontWeight: 500,
                          letterSpacing: "1px",
                          whiteSpace: "nowrap",
                          backgroundColor: '#1B3349'
                        }}
                        onClick={() =>
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          })
                        }
                      >
                        BACK TO TOP
                      </p>
                    }
                  </div>
                </div>
              </>
            )}
        </>
      ) : (
        <>
          {/* {htmlContent?.rd && htmlContent?.rd.length > 0 && */}
          {localData?.YearCode !== "" &&
            (
              <div className="smiling_home_index_main">
                <div>
                  {/* {htmlContent?.rd[0]?.Blockno === 1 && ( */}
                  {localData?.Blockno === 1 && (
                    <div className="smiling_home_index_Submain">
                      <TopSection />
                      {/* <Aboutus />
                      <Services />
                      <QualityCore />
                      <Partners />
                      <Growth />
                      <WhyChooseUs />
                      <Category />
                      <Collection data={collection1} title={"Pie cut Collection"} link={handleRedirectLink1} collNo={1} />
                      <Collection data={collection2} title={"invisible setting"} link={handleRedirectLink2} collNo={2} />
                      <Collection data={collection3} title={"bezel collection"} link={handleRedirectLink3} collNo={3} />
                      <Certificate />
                      <Customer />
                      <Mission />
                      <SocialMedia /> 
                      <ContactUs1 /> */}
                      <TheDifference />
                      <PromotionBaner1 />
                      {localData?.IsHomeAlbum === 1 && <Album />}
                      {localData?.IsHomeBestSeller === 1 && <BestSellerSection />}
                      {localData?.IsHomeNewArrival === 1 && <NewArrival />}
                      {localData?.IsHomeTrending === 1 && <TrendingView />}
                      {localData?.IsHomeDesignSet === 1 && <DesignSet />}
                      <BottomBanner />
                      <Footer />
                    </div>
                  )}
                </div>
                <div>
                  {/* {htmlContent?.rd[0]?.Blockno === 2 && ( */}
                  {localData?.Blockno === 2 && (
                    <div>
                      <div className="smiling_home_index_Submain">
                        <TopSection />
                        {/* <Aboutus />
                        <Services />
                        <QualityCore />
                        <Partners />
                        <Growth />
                        <WhyChooseUs />
                        <Category />
                        <Collection data={collection1} title={"Pie cut Collection"} link={handleRedirectLink1} collNo={1} />
                        <Collection data={collection2} title={"invisible setting"} link={handleRedirectLink2} collNo={2} />
                        <Collection data={collection3} title={"bezel collection"} link={handleRedirectLink3} collNo={3} />
                        <Certificate />
                        <Customer />
                        <Mission />
                        <SocialMedia />
                        <ContactUs1 /> */}
                        <TheDifference />
                        <PromotionBaner2 />
                        {localData?.IsHomeAlbum === 1 && <Album1 />}
                        {localData?.IsHomeBestSeller === 1 && <BestSellerSection1 />}
                        {localData?.IsHomeNewArrival === 1 && <NewArrival1 />}
                        {localData?.IsHomeTrending === 1 && <TrendingView1 />}
                        {localData?.IsHomeDesignSet === 1 && <DesignSet1 />}
                        <BottomBanner />
                        <BrandsComponent />
                        <Footer />
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  {!isMount &&
                    <p
                      style={{
                        paddingBlock: "30px",
                        margin: "0px",
                        textAlign: "center",
                        color: "white",
                        cursor: "pointer",
                        fontSize: "13px",
                        fontWeight: 500,
                        letterSpacing: "1px",
                        whiteSpace: "nowrap",
                        // backgroundColor: '#1B3349'
                        backgroundColor: '#c0bbb1'
                      }}
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        })
                      }
                    >
                      BACK TO TOP
                    </p>
                  }
                </div>
              </div>
            )}
        </>
      )}


    </div>
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
