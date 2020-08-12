import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CreateMeal } from '../../components/Home/HomeTabs/CreateMeal/CreateMeal';
import { CustomCalculation } from '../../components/Home/HomeTabs/CustomCalculation/CustomCalculation';
import { HomeTabsParamList } from './HomeScreenTabs_types';

interface HomeScreenTabRoutesProps {
	setCurrentTab: (index: 0 | 1) => void;
}

const Tabs = createMaterialTopTabNavigator<HomeTabsParamList>();

export const HomeScreenTabRoutes: React.FC<HomeScreenTabRoutesProps> = (props) => {
	return (
		<Tabs.Navigator initialRouteName="Meal">
			<Tabs.Screen
				name="Meal"
				component={CreateMeal}
				listeners={{
					focus: (e) => {
						props.setCurrentTab(0);
					},
				}}
			/>
			<Tabs.Screen
				name="Custom"
				component={CustomCalculation}
				listeners={{
					focus: (e) => {
						props.setCurrentTab(1);
					},
				}}
			/>
		</Tabs.Navigator>
	);
};
