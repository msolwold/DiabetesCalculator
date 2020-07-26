import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface MealAssemblerProps {}

export const MealAssembler: React.FC<MealAssemblerProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Assemble your meal here!</Text>
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
