import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

interface HomeTabScreenProps {
  name: string;
}

export const HomeTabScreen: React.FC<HomeTabScreenProps> = ({}) => {
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