import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftHome from "./Components/LeftHome";
import CenterHome from "./Components/CenterHome";
import RightHome from "./Components/RightHome";
import PersonaLeft from "./Components/PersonaLeft";
import CenterPersonal from "./Components/CenterPersonal";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <Router>
      <div className="h-full w-full bg-[#000000]">
        <Routes>
          <Route
            path="/Home"
            element={
              <div className="flex justify-center bg-[#000000]">
                <LeftHome />
                <CenterHome />
                <RightHome />
              </div>
            }
          />
          <Route
            path="/personal"
            element={
              <div className="flex justify-center bg-[#000000] ">
                <PersonaLeft />
                <CenterPersonal />
                <RightHome />
              </div>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
