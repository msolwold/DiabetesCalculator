import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface MealCalculationProps {}

export const MealCalculation: React.FC<MealCalculationProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Calculations will be preformed here!</Text>
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