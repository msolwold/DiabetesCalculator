import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CreateMealProps {}

export const CreateMeal: React.FC<CreateMealProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>This is the Create Meal screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
