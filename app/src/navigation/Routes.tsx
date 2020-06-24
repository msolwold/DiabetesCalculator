import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

function Home() {
  return (
    <View style={styles.container}>
      <Text> I am the home screen </Text>
    </View>
  );
}

function Menu() {
  return (
    <View style={styles.container}>
      <Text> I am the menu screen </Text>
    </View>
  );
}

function History() {
  return (
    <View style={styles.container}>
      <Text> I am the history screen </Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={styles.container}>
      <Text> I am the settings screen </Text>
    </View>
  );
}

export const Routes = ({}) => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return <Ionicons name={"ios-home"} size={size} color={color} />;
            } else if (route.name === "Menu") {
              return (
                <MaterialCommunityIcons
                  name={"food"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "History") {
              return (
                <MaterialCommunityIcons
                  name={"history"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Settings") {
              return (
                <Ionicons name={"ios-settings"} size={size} color={color} />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Menu" component={Menu} />
        <Tabs.Screen name="History" component={History} />
        <Tabs.Screen name="Settings" component={Settings} />
      </Tabs.Navigator>
    </NavigationContainer>
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
