import React, { useEffect, useContext, useState } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import UserContext from "../utils/UserContext";
import HomeScreen from "../screens/HomeScreen";
import FoodScreen from "../screens/FoodScreen";
import OnlineStoreScreen from "../screens/OnlineStoreScreen";
import LifeStyleScreen from "../screens/LifeStyleScreen";
import NavBar from "../components/common/Navbar";
import { type } from "os";
export default function Routing() {
  const location = useLocation();
  const [msisdn, setMsisdn] = useState<string>("3092029292");
  const updateMsisd = (val: string) => {
    setMsisdn(val);
  };
  return (
    <UserContext.Provider value={{ msisdn, updateMsisd }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route
          path="/Food"
          element={
            typeof window !== "undefined" ? (
              <FoodScreen />
            ) : (
              <Navigate to={"/"} />
            )
          }
        />
        <Route path="/OnlineStore" element={<OnlineStoreScreen />} />
        <Route path="/LifeStyle" element={<LifeStyleScreen />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </UserContext.Provider>
  );
}
