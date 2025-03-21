import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { lazy } from "react";
import "./App.css";
const ThemeRoutes = lazy(() => import(`./ThemeRoutes`));

function App() {
  React.useEffect(() => {
    const disableLoggingInProduction = () => {
      if (process.env.NODE_ENV === 'production') {
        console.log = () => { };
        console.warn = () => { };
        console.error = () => { };
        console.info = () => { };
        console.debug = () => { };
      }
    };

    disableLoggingInProduction();
    return () => {
      if (process.env.NODE_ENV === 'production') {
        console.log = console.__log;
        console.warn = console.__warn;
        console.error = console.__error;
        console.info = console.__info;
        console.debug = console.__debug;
      }
    };
  }, []);
  
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <ThemeRoutes />
          <ToastContainer
            autoClose={2000}
            style={{ zIndex: "99999999999999" }}
          />
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
