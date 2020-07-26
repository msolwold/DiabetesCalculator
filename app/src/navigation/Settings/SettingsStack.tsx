import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { SettingsScreen } from "../../components/Settings/SettingsScreen";

interface SettingsStackProps {}

const Stack = createStackNavigator();

export const SettingsStack: React.FC<SettingsStackProps> = ({}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={SettingsScreen}
                options={() => ({ headerTitle: "Settings" })}
            />
        </Stack.Navigator>
    );
};
