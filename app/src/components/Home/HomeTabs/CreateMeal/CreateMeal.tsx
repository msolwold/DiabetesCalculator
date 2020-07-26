import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MealAssembler } from "./meal-assembler/MealAssembler";
import { MealCalculation } from "./calulculations/MealCalculation";

interface CreateMealProps {}

export const CreateMeal: React.FC<CreateMealProps> = ({}) => {
  return (
    <View style={styles.container}>
      <MealAssembler></MealAssembler>
      <MealCalculation></MealCalculation>
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
