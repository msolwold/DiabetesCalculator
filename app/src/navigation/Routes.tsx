import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeTabScreen } from "../components/HomeTabScreen";
import { MenuTabScreen } from "../components/MenuTabScreen";
import { HistoryTabScreen } from "../components/HistoryTabScreen";
import { SettingsTabScreen } from "../components/SettingsTabScreen";

const Tabs = createBottomTabNavigator();


export const Routes = ({}) => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({color, size }) => {
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
        <Tabs.Screen name="Home" component={HomeTabScreen}/>
        <Tabs.Screen name="Menu" component={MenuTabScreen} />
        <Tabs.Screen name="History" component={HistoryTabScreen} />
        <Tabs.Screen name="Settings" component={SettingsTabScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};
