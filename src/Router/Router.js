import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import SignUp from "../Pages/Sign Up/SignUp";
import OtherProfile from "../Pages/User Pages/Doctor Strange/DoctorStrange";
import IncredibleHulk from "../Pages/User Pages/Incredible Hulk/IncredibleHulk";
import ScarletWitch from "../Pages/User Pages/Scarlet Witch/ScarletWitch";
import SpiderMan from "../Pages/User Pages/Spider Man/SpiderMan";
import PublicPage from "../Pages/Public Page/PublicPage";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/publicpage" element={<PublicPage />}></Route>

        <Route path="/otherUserProfile" element={<OtherProfile />}></Route>
       
      </Routes>
    </div>
  );
};

export default Router;
