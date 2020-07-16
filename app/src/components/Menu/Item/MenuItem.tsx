import React from 'react';
import { View, Text } from "react-native";
import { MenuStackNavProps } from "../MenuTab-Types";

export function Item({ route }: MenuStackNavProps<"Item">) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>{route.params.name} page</Text>
        </View>
    );
}