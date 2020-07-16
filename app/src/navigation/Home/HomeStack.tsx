import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

interface HomeStackProps {
  name: string;
}

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text> I am the Home screen. </Text>
    </SafeAreaView>
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