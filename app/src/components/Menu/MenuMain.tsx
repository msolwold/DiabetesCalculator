import React from 'react';
import { SafeAreaView, Button, FlatList } from "react-native";
import { MenuStackNavProps } from "../../navigation/Menu/MenuStack_types";
import faker from "faker";


export function MenuMain({ navigation }: MenuStackNavProps<"Main">) {
    return (
        <SafeAreaView>
            <FlatList
                style={{ width: "100%" }}
                renderItem={({ item }) => {
                    return (
                        <Button
                            title={item}
                            onPress={() => {
                                navigation.navigate("Item", { name: item });
                            }}
                        />
                    );
                }}
                keyExtractor={(product, idx) => product + idx}
                data={Array.from(Array(50), () => faker.commerce.product())}
            />
        </SafeAreaView>
    );
}