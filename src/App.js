import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Clockin from "./pages/clock-in/Clockin";
import History from "./pages/history/History";
import Nonotification from "./pages/no-notification/Nonotification";
import Signin from "./pages/sign-in/Signin";
import Success from "./pages/success/Success";
import Requestbreak from "./pages/request-break/Requestbreak";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<Signin />} />
          <Route exact path={"/home"} element={<Home />} />
          <Route exact path={"/clockin"} element={<Clockin />} />
          <Route exact path={"/history"} element={<History />} />
          <Route exact path={"/nonotification"} element={<Nonotification />} />
          <Route exact path={"/success"} element={<Success />} />
          <Route exact path={"/requestbreak"} element={<Requestbreak />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
