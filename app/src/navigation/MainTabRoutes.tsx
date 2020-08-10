import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { HomeScreen } from "../components/Home/HomeScreen";
import { MenuStack } from "./Menu/MenuStack";
import { HistoryStack } from "./History/HistoryStack";
import { SettingsStack } from "./Settings/SettingsStack";

import { MainTabsPamramList } from "./MainTabRoutes_types";

const Tabs = createBottomTabNavigator<MainTabsPamramList>();

export const MainTabRoutes = ({}) => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
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
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Menu" component={MenuStack} />
        <Tabs.Screen name="History" component={HistoryStack} />
        <Tabs.Screen name="Settings" component={SettingsStack} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};
