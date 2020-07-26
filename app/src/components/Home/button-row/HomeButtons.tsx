import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

interface HomeButtonsProps {}

export const HomeButtons: React.FC<HomeButtonsProps> = ({}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => alert("TEMP: Are you sure you want to clear the screen?")}
        style={styles.button}
      >
        <Text>Clear Info</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert("TEMP: Are you sure you want to log this meal?")}
        style={styles.button}
      >
        <Text>Submit Meal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    flex: 1,
    borderWidth: .5,
    alignItems: "center",
    justifyContent: "center"
  },
});
