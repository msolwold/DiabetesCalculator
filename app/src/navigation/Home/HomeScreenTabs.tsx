import React from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { CreateMeal } from '../../components/Home/HomeTabs/CreateMeal/CreateMeal';
import { CustomCalculation } from '../../components/Home/HomeTabs/CustomCalculation/CustomCalculation';
import { HomeTabsParamList } from './HomeScreenTabs_types';

interface HomeScreenTabRoutesProps {

}

const Tabs = createMaterialTopTabNavigator<HomeTabsParamList>();

export const HomeScreenTabRoutes: React.FC<HomeScreenTabRoutesProps> = ({ }) => {
    return (
        <Tabs.Navigator initialRouteName="Meal">
            <Tabs.Screen name="Meal" component={CreateMeal} />
            <Tabs.Screen name="Custom" component={CustomCalculation} />
        </Tabs.Navigator>
    );
}