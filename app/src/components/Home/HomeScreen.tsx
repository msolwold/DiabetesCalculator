import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HomeScreenTabRoutes } from "../../navigation/Home/HomeScreenTabs";
import { HomeButtons } from "./button-row/HomeButtons";

export const HomeScreen = ({}) => {
  let [currentTab, setCurrentTab] = useState<0 | 1>(0);

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <HomeScreenTabRoutes setCurrentTab={setCurrentTab}/>
      </View>
      <View style={styles.bottom}>
        <HomeButtons currentTab={currentTab}/>
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
