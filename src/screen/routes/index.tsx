import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./AppStack/index.routes";
import { AuthRouter } from "./AuthStack/index.routes";

import { useAuth } from "../../global/context/useAuth";
import { Home } from "../Home";
import LoginScreen from "../Login";


export const Routes = () => {
  const authContext = useAuth();
  const user = authContext?.user;

  return (
    <NavigationContainer>
      {/* {user ? <AppRoutes /> : <AuthRouter />} */}
      {/* <Home />  */}
      <LoginScreen navigation={undefined} />
      {/* <AppRoutes/> */}
    </NavigationContainer>
  );
};