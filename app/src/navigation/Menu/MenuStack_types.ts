import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";


export type MenuStackParamList = {
    Main: undefined;
    Item: {
        name: string;
    };
};

export type MenuStackNavProps<T extends keyof MenuStackParamList> = {
    navigation: StackNavigationProp<MenuStackParamList, T>;
    route: RouteProp<MenuStackParamList, T>;
};