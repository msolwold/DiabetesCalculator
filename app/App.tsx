import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Main } from "./src/Main";
import queryBooks from "./src/utilities/TestQuery";


queryBooks();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
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
