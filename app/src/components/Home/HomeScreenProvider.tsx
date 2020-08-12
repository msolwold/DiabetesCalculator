import React, { createContext, useState } from 'react';

export const HomeScreenContext = createContext<{
	mealCalculation: any;
	customCalculation: any;
	_setMealCalculation: () => void;
	_setCustomCalculation: () => void;
    currentTab: 0 | 1;
    setCurrentTab: (index: 0 | 1) => void;
}>({
	mealCalculation: null,
	customCalculation: null,
	_setMealCalculation: () => {},
    _setCustomCalculation: () => {},
    currentTab: 0,
	setCurrentTab: () => {},
});

interface HomeScreenProviderProps {}

export const HomeScreenProvider: React.FC<HomeScreenProviderProps> = ({
	children,
}) => {
	let [mealCalculation, setMealCalculation] = useState();
	let [customCalculation, setCustomCalculation] = useState();
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

	function _setMealCalculation() {
		console.log('_setMealCalculation');
	}

	function _setCustomCalculation() {
		console.log('_setCustomCalculation');
	}
};
