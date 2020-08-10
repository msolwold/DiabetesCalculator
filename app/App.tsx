import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { MainTabRoutes } from "./src/navigation/MainTabRoutes";
import { AppHeader } from "./src/components/Header/AppHeader";
// import { Main } from "./src/Main";
// import queryBooks from "./src/utilities/TestQuery";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainTabRoutes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
