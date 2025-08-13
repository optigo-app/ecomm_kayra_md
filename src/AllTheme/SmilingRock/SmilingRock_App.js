import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Cookies from "js-cookie";
import './Components/scss/variable.scss'
import loaderImg from './Components/Assets/webLogo.png';
import loaderImg1 from './Components/Assets/mdLogo.png';
import loaderImg2 from './Components/Assets/kayraLogo.png';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { companyLogo, companyLogoM, loginState, smr_companyLogo, smr_companyLogoM, smr_loginState } from "./Components/Recoil/atom";
import PrivateRoutes from "./PrivateRoutes";
import { storImagePath, storInitDataPath } from "../../utils/Glob_Functions/GlobalFunction";
import { LoginWithEmailAPI } from "../../utils/API/Auth/LoginWithEmailAPI";
import { Box } from "@mui/material";

// const ContinueWithEmail = lazy(() => import("./Components/Pages/Auth/ContinueWithEmail/ContinueWithEmail"));
// const LoginWithEmail = lazy(() => import("./Components/Pages/Auth/LoginWithEmail/LoginWithEmail"));
// const Register = lazy(() => import("./Components/Pages/Auth/Registretion/Register"));
// const ContimueWithMobile = lazy(() => import("./Components/Pages/Auth/ContimueWithMobile/ContimueWithMobile"));
// const LoginWithEmailCode = lazy(() => import("./Components/Pages/Auth/LoginWithEmailCode/LoginWithEmailCode"));
// const LoginWithMobileCode = lazy(() => import("./Components/Pages/Auth/LoginWithMobileCode/LoginWithMobileCode"));
// const ForgotPass = lazy(() => import("./Components/Pages/Auth/forgotPass/ForgotPass"));
// const LoginOption = React.lazy(() => import(`./Components/Pages/Auth/LoginOption/LoginOption`))

import ContinueWithEmail from "./Components/Pages/Auth/ContinueWithEmail/ContinueWithEmail";
import LoginWithEmail from "./Components/Pages/Auth/LoginWithEmail/LoginWithEmail";
import Register from "./Components/Pages/Auth/Registretion/Register";
import ContimueWithMobile from "./Components/Pages/Auth/ContimueWithMobile/ContimueWithMobile";
import LoginWithEmailCode from "./Components/Pages/Auth/LoginWithEmailCode/LoginWithEmailCode";
import LoginWithMobileCode from "./Components/Pages/Auth/LoginWithMobileCode/LoginWithMobileCode";
import ForgotPass from "./Components/Pages/Auth/forgotPass/ForgotPass";
import LoginOption from "./Components/Pages/Auth/LoginOption/LoginOption";
import ContactUs1 from "./Components/Pages/FooterPages/ContactUs1/ContactUs1";
import useGlobalPreventSave from "../../utils/Glob_Functions/useGlobalPreventSave";
import Home from './Components/Pages/Home/Index';
import Header from './Components/Pages/Home/Header/Header';
import Header2 from './Components/Pages/Home/Header/Header2';

const ProductList = lazy(() => import("./Components/Pages/Product/ProductList/ProductList"));
const ProductDetail = lazy(() => import("./Components/Pages/Product/ProductDetail/ProductDetail"));
const ContactUs = lazy(() => import("./Components/Pages/FooterPages/contactUs/ContactUs"));
const ServicePolicy = lazy(() => import("./Components/Pages/FooterPages/servicePolicy/ServicePolicy"));
const ExpertAdvice = lazy(() => import("./Components/Pages/FooterPages/ExpertAdvice/ExpertAdvice"));
const FunFact = lazy(() => import("./Components/Pages/FooterPages/FunFact/FunFact"));
const AboutUs = lazy(() => import("./Components/Pages/aboutUs/AboutUs"));
const Wishlist = lazy(() => import("./Components/Pages/Wishlist/Wishlist"));
const PageNotFound = lazy(() => import("./Components/Pages/404Page/PageNotFound"));
const Delivery = lazy(() => import("./Components/Pages/OrderFlow/DeliveryPage/Delivery"));
const Payment = lazy(() => import("./Components/Pages/OrderFlow/PaymentPage/Payment"));
const Confirmation = lazy(() => import("./Components/Pages/OrderFlow/ConfirmationPage/Confirmation"));
const Account = lazy(() => import("./Components/Pages/Account/Account"));
const Lookbook = lazy(() => import("./Components/Pages/Home/LookBook/Lookbook"));
const NatualDiamond = lazy(() => import("./Components/Pages/naturalDiamond/NaturalDiamond"));
const DWSRprintComp = lazy(() => import("./Components/Pages/Account/DWSRprintComp/DWSRprintComp"));
const PaymentFailure = "../../utils/PaymentSuccessFail/PaymentFailure";
const TermsPolicy = lazy(() => import("./Components/Pages/FooterPages/TermsPolicy/TermsPolicy"));
const Bespoke = lazy(() => import("./Components/Pages/Home/Bespokejewelry/Index"));
const Wrapper = lazy(() => import("./Components/Pages/Home/Appointment/Wrapper"));
const PrivacyPolicy = lazy(() => import("./Components/Pages/FooterPages/PrivacyPolicy/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./Components/Pages/FooterPages/TermsPage/TermsPage"));
const Achievement = lazy(() => import("./Components/Pages/FooterPages/Achievement/Achievement"));
const TheTeam = lazy(() => import("./Components/Pages/FooterPages/TheTeam/TheTeam"));

const Cart = React.lazy(() => import(`./Components/Pages/Cart/CartMain`))

const SmilingRock_App = () => {
  const islogin = useRecoilValue(smr_loginState);
  const navigation = useNavigate();
  const setIsLoginState = useSetRecoilState(smr_loginState);
  const location = useLocation();
  const search = location?.search;
  const updatedSearch = search.replace("?LoginRedirect=", "");
  const redirectEmailUrl = `${decodeURIComponent(updatedSearch)}`;
  const [companyTitleLogo, setCompanyTitleLogo] = useRecoilState(smr_companyLogo);
  const [companyTitleLogoM, setCompanyTitleLogoM] = useRecoilState(smr_companyLogoM);
  const [htmlContent, setHtmlContent] = useState(JSON.parse(sessionStorage.getItem("storeInit")));
  const storeInit = JSON.parse(sessionStorage.getItem("storeInit"));
  const [localData, setLocalData] = useState(sessionStorage.getItem("storeInit"));

  useGlobalPreventSave();

  const setCSSVariable = () => {
    const storeInit = JSON.parse(sessionStorage.getItem("storeInit"));
    const backgroundColor = storeInit?.IsPLW == 1 ? "#c4cfdb" : "#c0bbb1";
    // const backgroundColor = "#1B3349";
    document.documentElement.style.setProperty(
      "--background-color",
      backgroundColor
    );
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (location.pathname == "/" || location.pathname.startsWith('/p') || location.pathname.startsWith('/cartPage') ||
      location.pathname.startsWith('/myWishList') || location.pathname.startsWith('/account') ||
      location.pathname.startsWith('FunFact') || location.pathname.startsWith('aboutUs') || location.pathname.startsWith('TermsPolicy')
    ) {
      sessionStorage.setItem('currentSlideIndex', 0)
      sessionStorage.setItem("LookBookView", 1);
    }
    const shouldPreserveCheckboxes = location.pathname.startsWith('/p') || location.pathname.startsWith('/d');
    const shouldPreserveLookbook = location.pathname.startsWith('/Lookbook') || location.pathname.startsWith('/d');

    if (!shouldPreserveCheckboxes) {

      sessionStorage.setItem("checkboxes", JSON.stringify({}));
      sessionStorage.setItem('listingPageNo', JSON.stringify(1))
      sessionStorage.setItem('checkboxes', JSON.stringify({}))
      sessionStorage.setItem('Sorting', JSON.stringify("Recommended"))
      sessionStorage.setItem("SortingOptions", "Recommended")
    }

    if (!shouldPreserveLookbook) {
      sessionStorage.setItem('lookbookPage', 1)
      sessionStorage.setItem('Lookbookcheckboxes', "")
      sessionStorage.setItem('currentSlideIndex', 0)
    }
  }, [location]);


  // useEffect(() => {
  //   fetch(`${storInitDataPath()}/StoreInit.json`)
  //     .then((response) => response.text())
  //     .then((text) => {
  //       try {
  //         const jsonData = JSON.parse(text);
  //         setHtmlContent(jsonData);
  //       } catch (error) {
  //         console.error("Error parsing JSON:", error);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching the file:", error);
  //     });
  // }, []);

  useEffect(() => {
    if (htmlContent) {
      setLocalData((prevData) => ({
        ...prevData,
        Headerno: htmlContent?.Headerno,
        BrowserTitle: htmlContent.BrowserTitle,
      }));
    }
  }, [htmlContent]);

  useEffect(() => {
    setCSSVariable();
    let webLogo = `${storImagePath()}/logoIcon/webLogo.png`;
    let mobileLogo = `${storImagePath()}/logoIcon/mobileLogo.png`;

    setCompanyTitleLogo(webLogo);
    setCompanyTitleLogoM(mobileLogo);
    // if (Logindata) {
    //   if (Logindata?.IsPLWOn == 1) {
    //     setCompanyTitleLogo(Logindata?.Private_label_logo);
    //     setCompanyTitleLogoM()
    //   } else {
    //     setCompanyTitleLogo(logo?.companylogo);
    //     setCompanyTitleLogoM(logo?.companyMlogo)
    //   }
    // } else {
    //   setCompanyTitleLogo(logo?.companylogo);
    //   setCompanyTitleLogoM(logo?.companyMlogo)
    // }
  });

  useEffect(() => {
    const cookieValue = Cookies.get("userLoginCookie");
    if (cookieValue && islogin == false) {
      LoginWithEmailAPI("", "", "", "", cookieValue)
        .then((response) => {
          if (response?.Data?.rd[0]?.stat === 1) {
            Cookies.set("userLoginCookie", response?.Data?.rd[0]?.Token);
            setIsLoginState(true);
            sessionStorage.setItem("LoginUser", true);
            sessionStorage.setItem("loginUserDetail", JSON.stringify(response.Data.rd[0]));
            if (redirectEmailUrl) {
              navigation(redirectEmailUrl);
            } else if (location.pathname.startsWith('/accountdwsr')) {
              navigation("/accountdwsr");
            } else {
              // navigation("/");
            }
          }
        })
        .catch((err) => console.log(err));
    }
    let localD = JSON.parse(sessionStorage.getItem("storeInit"));
    setLocalData(localD);
  }, []);


  if (islogin === true) {
    const restrictedPaths = [
      '/LoginOption',
      '/ContinueWithEmail',
      '/ContinueWithMobile',
      '/LoginWithEmailCode',
      '/LoginWithMobileCode',
      '/ForgotPass',
      '/LoginWithEmail',
      '/register'
    ];

    if (restrictedPaths?.some(path => location.pathname.startsWith(path))) {
      return navigation("/");
    }
  }


  const LoadingFallback = () => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      {/* <CircularProgress sx={{ color: 'rgba(255, 87, 34, 0.8)' }} /> */}
      <img
        src={loaderImg2}
        alt="Loading..."
        height="100%"
        width="auto"
        loading="lazy"
        style={{
          animation: 'scaleUpDown 1.5s ease-in-out infinite', // Apply the animation here
        }}
      />
    </Box>
  );

  const dfine = 1;

  function ProductListWrapper() {
    return (
      <div onContextMenu={handleContextMenu}>
        <ProductList />
      </div>
    );
  }
  function ProductDetailWrapper() {
    return (
      <div onContextMenu={handleContextMenu}>
        <ProductDetail />
      </div>
    );
  }
  function WishlistWrapper() {
    return (
      <div onContextMenu={handleContextMenu}>
        <Wishlist />
      </div>
    );
  }
  function CartWrapper() {
    return (
      // <div onContextMenu={handleContextMenu}>
      <Cart />
      // </div>
    );
  }
  function LookbookWrapper() {
    return (
      <div onContextMenu={handleContextMenu}>
        <Lookbook />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{localData?.BrowserTitle}</title>
      </Helmet>
      <Suspense fallback={<LoadingFallback />}>
        {!location.pathname.startsWith('/accountdwsr') && <div>
          {localData?.Headerno == 1 && <Header />}
          {localData?.Headerno == 2 && <Header2 />}
        </div>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/LoginOption"
            element={
              <div className="smr_authFlowBakcColor">
                <LoginOption />
              </div>
            }
          />
          <Route
            path="/ContinueWithEmail"
            element={
              <div className="smr_authFlowBakcColor">
                <ContinueWithEmail />
              </div>
            }
          />
          {/* Maiora not needed */}
          {/* for kAYRA CRAETEION NEEDED */}

          {(!storeInit?.IsWebMobileLoginOff || storeInit?.IsWebMobileLoginOff === 0) && (
            <Route
              path="/ContimueWithMobile"
              element={
                <div className="smr_authFlowBakcColor">
                  <ContimueWithMobile />
                </div>
              }
            />
          )}

          <Route
            path="/LoginWithEmailCode"
            element={
              <div className="smr_authFlowBakcColor">
                <LoginWithEmailCode />
              </div>
            }
          />
          {/* Maiora not needed */}
          {/* for kAYRA CRAETEION NEEDED */}

          {(!storeInit?.IsWebMobileLoginOff || storeInit?.IsWebMobileLoginOff === 0) && (
            <Route
              path="/LoginWithMobileCode"
              element={
                <div className="smr_authFlowBakcColor">
                  <LoginWithMobileCode />
                </div>
              }
            />
          )}

          <Route
            path="/ForgotPass"
            element={
              <div className="smr_authFlowBakcColor">
                <ForgotPass />
              </div>
            }
          />
          <Route
            path="/LoginWithEmail"
            element={
              <div className="smr_authFlowBakcColor">
                <LoginWithEmail />
              </div>
            }
          />
          <Route
            path="/register"
            element={
              <div className="smr_authFlowBakcColor">
                <Register />
              </div>
            }
          />
          <Route path="/ContactUs" element={dfine === 2 ? <ContactUs1 /> : <ContactUs />} />
          {/* Maiora needed servicePolicy */}
          {/* Kayra not needed */}
          {/* sonasons needed */}
          <Route path="/servicePolicy" element={<ServicePolicy />} />
          <Route path="/ExpertAdvice" element={<ExpertAdvice />} />
          <Route path="/gallery" element={<Achievement />} />
          <Route path="/theteam" element={<TheTeam />} />
          <Route path="/bespoke-jewelry" element={<Bespoke />} />
          <Route path="/appointment" element={<Wrapper />} />
          <Route
            path="/terms-and-conditions"

            element={<TermsAndConditions />}
          />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />


          {/* Maiora not needed fun facts */}
          {/* Kayra needed */}
          <Route path="/FunFact" element={<FunFact />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/TermsPolicy" element={<TermsPolicy />} />
          <Route path="/natural-diamond" element={<NatualDiamond />} />
          <Route path="/" element={<PrivateRoutes isLoginStatus={islogin} />}>
            <Route path="/p/*" element={<ProductListWrapper />} />
            <Route path="/d/*" element={<ProductDetailWrapper />} />
            <Route path="/cartPage" element={<CartWrapper />} />
            <Route path="/myWishList" element={<WishlistWrapper />} />
            <Route path="/Delivery" element={<Delivery />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/Confirmation" element={<Confirmation />} />
            <Route path="/account" element={<Account />} />
            {/* <Route path="/accountdwsr" element={<DWSRprintComp />} /> */}
            <Route path="/Lookbook" element={<LookbookWrapper />} />
          </Route>
          <Route path="/accountdwsr" element={<DWSRprintComp />} />
          <Route path="/paymentFailure" element={<PaymentFailure />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default SmilingRock_App;
