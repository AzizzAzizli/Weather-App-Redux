import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/Routes";
import { HomePage } from "./pages/home";

// https://api.openweathermap.org/data/2.5/weather?q=baku&apikey=d32bd17e782e54a0729a829c462c76ac
function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
