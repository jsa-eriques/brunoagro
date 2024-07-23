import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import GlobalContext from "./context/GloblalContext";
import FirstComponent from "./components/FirstComponent";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Header /> */}
              {/* <Cookies /> */}
              {/* <Fade duration={2000}> */}
                <FirstComponent />
                {/* <hr className="dark:border-sub-blue" /> */}
              {/* </Fade> */}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
