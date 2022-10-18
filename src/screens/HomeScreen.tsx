import React, { useContext, useEffect } from "react";
import UserContext from "../utils/UserContext";
export default function HomeScreen() {
  // useEffect(() => {
  //   console.warn(
  //     "baseURl",
  //     process.env.baseUrl,
  //     "imageURl",
  //     process.env.imageUrl,
  //     "user name",
  //     process.env.userNames,
  //     "user passs",
  //     process.env.password
  //   );
  // }, []);

  const userContext = useContext<any>(UserContext);
  return <div>Home Screen</div>;
}
