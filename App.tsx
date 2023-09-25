import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Routes } from "./src/screen/routes";
import { AuthProvider } from "./src/global/context/useAuth";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import AppLoading from "expo-app-loading";

// import {
//   useFonts,
//   Inter_400Regular,
//   Inter_600SemiBold,
//   Inter_700Bold,
// } from "@expo-google-fonts/inter";

// const [fontsLoaded] = useFonts({
//   Inter_400Regular,
//   Inter_600SemiBold,
//   Inter_700Bold,
// });

export default function App() {
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
    return (
      // <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </View>
      // </ThemeProvider>
    );
  }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
