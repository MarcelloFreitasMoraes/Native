import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Routes } from "./src/screen/routes";
import { AuthProvider } from "./src/global/context/useAuth";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
