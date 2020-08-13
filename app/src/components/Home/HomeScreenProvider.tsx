import React, { createContext, useState } from 'react';
import { Meal } from '../../models/Shared/types';

export const HomeScreenContext = createContext<{
	mealCalculation: Meal | undefined;
	customCalculation: Meal | undefined;
	_setMealCalculation: (meal: Meal) => void;
	_setCustomCalculation: (meal: Meal) => void;
	currentTab: 0 | 1;
	setCurrentTab: (index: 0 | 1) => void;
}>({
	mealCalculation: undefined,
	customCalculation: undefined,
	_setMealCalculation: () => {},
	_setCustomCalculation: () => {},
	currentTab: 0,
	setCurrentTab: () => {},
});

interface HomeScreenProviderProps {}

export const HomeScreenProvider: React.FC<HomeScreenProviderProps> = ({
	children,
}) => {
	let [mealCalculation, setMealCalculation] = useState<Meal>();
	let [customCalculation, setCustomCalculation] = useState<Meal>();
	let [currentTab, setCurrentTab] = useState<0 | 1>(0);

	return (
		<HomeScreenContext.Provider
			value={{
				mealCalculation,
				customCalculation,
				_setMealCalculation,
				_setCustomCalculation,
				currentTab,
				setCurrentTab,
			}}
		>
			{children}
		</HomeScreenContext.Provider>
	);

	function _setMealCalculation(meal: Meal) {
		setMealCalculation(meal);
	}

	function _setCustomCalculation(meal: Meal) {
		setCustomCalculation(meal);
	}
};
