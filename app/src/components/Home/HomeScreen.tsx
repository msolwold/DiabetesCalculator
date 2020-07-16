import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HomeScreenTabRoutes } from "../../navigation/Home/HomeScreenTabs";

interface HomeScreenProps {
  name: string;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text> Hello World </Text>
      </View>
      <View style={styles.tabs}>
        <HomeScreenTabRoutes />
      </View>
	  <View style={styles.bottom}>
	  	<Text> Buttons </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  top: {
    flex: 1,
	backgroundColor: "#fff",
	justifyContent: "center",
	alignItems: "center"
  },
  tabs: {
    flex: 2,
	backgroundColor: "#fff",
	borderWidth: 1
  },
  bottom: {
    flex: 1,
	backgroundColor: "#fff",
	justifyContent: "center",
	alignItems: "center"
  },
});
