import React, { useContext } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CreateMeal } from '../../components/Home/HomeTabs/CreateMeal/CreateMeal';
import { CustomCalculation } from '../../components/Home/HomeTabs/CustomCalculation/CustomCalculation';
import { HomeTabsParamList } from './HomeScreenTabs_types';
import { HomeScreenContext } from '../../components/Home/HomeScreenProvider';

interface HomeScreenTabRoutesProps {
}

const Tabs = createMaterialTopTabNavigator<HomeTabsParamList>();

export const HomeScreenTabRoutes: React.FC<HomeScreenTabRoutesProps> = ({}) => {
    let {setCurrentTab} = useContext(HomeScreenContext);
	return (
		<Tabs.Navigator initialRouteName="Meal">
			<Tabs.Screen
				name="Meal"
				component={CreateMeal}
				listeners={{
					focus: (e) => {
						setCurrentTab(0);
					},
				}}
			/>
			<Tabs.Screen
				name="Custom"
				component={CustomCalculation}
				listeners={{
					focus: (e) => {
						setCurrentTab(1);
					},
				}}
			/>
		</Tabs.Navigator>
	);
};
