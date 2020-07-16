import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MenuStackParamList } from "./MenuStack_types";
import { MenuMain } from "../../components/Menu/MenuMain";
import { Item } from "../../components/Menu/Item/MenuItem";

interface MenuTabScreenProps {}
const Stack = createStackNavigator<MenuStackParamList>();

export const MenuStack: React.FC<MenuTabScreenProps> = ({}) => {
    return (
      <Stack.Navigator initialRouteName={"Main"}>
        <Stack.Screen
          name="Main"
          component={MenuMain}
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