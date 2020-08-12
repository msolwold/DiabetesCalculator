import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HomeScreenTabRoutes } from "../../navigation/Home/HomeScreenTabs";
import { HomeButtons } from "./button-row/HomeButtons";

export const HomeScreen = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <HomeScreenTabRoutes />
      </View>
      <View style={styles.bottom}>
        <HomeButtons></HomeButtons>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabs: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bottom: {
    height: "5%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
