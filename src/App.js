import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { lazy, useEffect, Suspense } from "react";
import "./App.css";
import { storInitDataPath } from "./utils/Glob_Functions/GlobalFunction";

const ThemeRoutes = lazy(() => import(`./ThemeRoutes`));

function App() {
  // const path = `${storInitDataPath()}/StoreInit.json`;

  // useEffect(() => {
  //   const fetchStoreInit = async () => {
  //     const start = performance.now();
  //     try {
  //       const response = await fetch(path);
  //       if (!response.ok) throw new Error(`HTTP ${response.status}`);

  //       const text = await response.text();
  //       const json = JSON.parse(text);
  //       const [rd0] = json.rd;

  //       sessionStorage.setItem("storeInit", JSON.stringify(rd0));
  //       sessionStorage.setItem("myAccountFlags", JSON.stringify(json.rd1));
  //       sessionStorage.setItem("CompanyInfoData", JSON.stringify(json.rd2?.[0] || {}));

  //       console.log("StoreInit saved to sessionStorage");
  //     } catch (error) {
  //       console.error("StoreInit fetch failed:", error);
  //     } finally {
  //       const end = performance.now();
  //       const duration = end - start;
  //       const minutes = Math.floor(duration / 60000);
  //       const seconds = Math.floor((duration % 60000) / 1000);
  //       const milliseconds = Math.floor(duration % 1000);
  //       console.log(`Execution time app page: ${minutes}m ${seconds}s ${milliseconds}ms`);
  //     }
  //   };

  //   const verifySessionStorage = () => {
  //     let attempts = 0;
  //     const maxAttempts = 2;
  //     const interval = setInterval(() => {
  //       const storeInit = sessionStorage.getItem("storeInit");
  //       attempts += 1;

  //       if (storeInit) {
  //         console.log("✅ storeInit found in sessionStorage:");
  //         clearInterval(interval);
  //       } else if (attempts >= maxAttempts) {
  //         console.warn("❌ storeInit not found after retries.");
  //         clearInterval(interval);
  //       } else {
  //         console.log(`🔁 Retry attempt ${attempts}: Checking for storeInit...`);
  //       }
  //     }, 1000); // Check every 1 second
  //   };

  //   fetchStoreInit().then(() => {
  //     verifySessionStorage();
  //   });
  // }, [path]);

  // Disable console logs in production
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      console.__log = console.log;
      console.__warn = console.warn;
      console.__error = console.error;
      console.__info = console.info;
      console.__debug = console.debug;

      console.log = () => { };
      console.warn = () => { };
      console.error = () => { };
      console.info = () => { };
      console.debug = () => { };

      return () => {
        console.log = console.__log;
        console.warn = console.__warn;
        console.error = console.__error;
        console.info = console.__info;
        console.debug = console.__debug;
      };
    }
  }, []);

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Suspense>
          <ThemeRoutes />
        </Suspense>
        <ToastContainer
          autoClose={2000}
          style={{ zIndex: "99999999999999" }}
        />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
