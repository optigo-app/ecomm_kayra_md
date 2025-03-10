import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy } from "react";
import "./App.css";

const ThemeRoutes = lazy(() => import(`./ThemeRoutes`));
function App() {
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
