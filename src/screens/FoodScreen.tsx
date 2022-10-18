import React, { useEffect, useState, useContext } from "react";
import UserContext from "../utils/UserContext";
export default function FoodScreen() {
  const userContext = useContext<any>(UserContext);

  useEffect(() => {
    userContext.updateMsisd("300000000");
  }, []);
  return <div>Food Screen{userContext.msisdn}</div>;
}
