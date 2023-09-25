import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../../Home";
import { INavigationAppStackProps } from "./types";

export function AppRoutes() {
  const { Navigator, Screen } =
    createNativeStackNavigator<INavigationAppStackProps>();

  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      {/* <Screen name="Register" component={RegisterScreen} /> */}
    </Navigator>
  );
}
