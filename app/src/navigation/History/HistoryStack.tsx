import React from 'react'
import { Text, StyleSheet, SafeAreaView } from 'react-native';

interface HistoryStackProps {

}

export const HistoryStack: React.FC<HistoryStackProps> = ({}) => {
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