import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

interface HistoryTabScreenProps {

}

export const HistoryTabScreen: React.FC<HistoryTabScreenProps> = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text> I am the History screen </Text>
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