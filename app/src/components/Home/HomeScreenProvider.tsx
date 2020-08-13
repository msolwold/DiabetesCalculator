import React, { createContext, useState } from 'react';
import { Meal } from '../../models/Shared/types';

export const HomeScreenContext = createContext<{
	mealCalculation: Meal;
	customCalculation: Meal;
	_setMealCalculation: (meal: Meal) => void;
	_clearMealCalculation: () => void;
	_setCustomCalculation: (meal: Meal) => void;
	_clearCustomCalculation: () => void;
	currentTab: 0 | 1;
	setCurrentTab: (index: 0 | 1) => void;
}>({
	mealCalculation: new Meal(),
	customCalculation: new Meal(),
	_setMealCalculation: () => {},
	_clearMealCalculation: () => {},
	_setCustomCalculation: () => {},
	_clearCustomCalculation: () => {},
	currentTab: 0,
	setCurrentTab: () => {},
});

interface HomeScreenProviderProps {}

export const HomeScreenProvider: React.FC<HomeScreenProviderProps> = ({
	children,
}) => {
	let [mealCalculation, setMealCalculation] = useState<Meal>(new Meal());
	let [customCalculation, setCustomCalculation] = useState<Meal>(new Meal());
	let [currentTab, setCurrentTab] = useState<0 | 1>(0);

	return (
		<HomeScreenContext.Provider
			value={{
				mealCalculation,
				customCalculation,
				_setMealCalculation,
				_clearMealCalculation,
				_setCustomCalculation,
				_clearCustomCalculation,
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

	function _clearMealCalculation() {
		setMealCalculation(new Meal());
	}

	function _setCustomCalculation(meal: Meal) {
		setCustomCalculation(meal);
	}

	function _clearCustomCalculation() {
		setCustomCalculation(new Meal());
	}
};
