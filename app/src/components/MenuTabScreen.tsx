import React from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  Button,
  SafeAreaView,
  View,
} from "react-native";
import faker from "faker";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

type MenuStackParamList = {
  Main: undefined;
  Item: {
    name: string;
  };
};

type MenuStackNavProps<T extends keyof MenuStackParamList> = {
  navigation: StackNavigationProp<MenuStackParamList, T>;
  route: RouteProp<MenuStackParamList, T>;
};

interface MenuTabScreenProps {}
const Stack = createStackNavigator<MenuStackParamList>();

function Item({ route }: MenuStackNavProps<"Item">) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{route.params.name} page</Text>
    </View>
  );
}

function MenuMainPage({ navigation }: MenuStackNavProps<"Main">) {
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

export const MenuTabScreen: React.FC<MenuTabScreenProps> = ({}) => {
  return (
    <Stack.Navigator initialRouteName={"Main"}>
      <Stack.Screen
        name="Main"
        component={MenuMainPage}
        options={() => ({ headerTitle: "Menu" })}
      />
      <Stack.Screen
        name="Item"
        component={Item}
        options={({ route }) => ({ headerTitle: `${route.params.name}` })}
      />
    </Stack.Navigator>
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
