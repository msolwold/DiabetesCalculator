import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

interface SettingsStackProps {

}

export const SettingsStack: React.FC<SettingsStackProps> = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text> I am the Settings screen </Text>
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