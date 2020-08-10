import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const AppHeader = ({}) => {
  return (
    <View style={styles.container}>
        <Text>This is a header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: .5
  },
});
