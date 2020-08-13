import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, View } from 'react-native';
import { CarbCalculationComponent } from './CarbCalculation/CarbCalculationComponent';
import { BGCalculationComponent } from './BGCalculation/BGCalculationComponent';
import {
	BGMealInfo,
	CarbMealInfo,
	MealInfo,
} from '../../../../models/Home/types';
import { MealDetailComponent } from '../Shared/MealDetails/MealDetailComponent';
import { HomeScreenContext } from '../../HomeScreenProvider';

interface CustomCalculationProps {}

export const CustomCalculation: React.FC<CustomCalculationProps> = ({}) => {
	let { _setCustomCalculation, customCalculation } = useContext(
		HomeScreenContext
	);

	// useEffect(() => {
	// 	_setCustomCalculation({
	// 		mealInfo,
	// 		bgMealInfo: bgInfo,
	// 		carbMealInfo: carbInfo,
	// 	});
	// }, [mealInfo, bgInfo, carbInfo]);

	return (
		<View style={styles.container}>
			<MealDetailComponent
				setMealInfo={_setInfo}
				mealInfo={customCalculation.mealInfo}
			/>
			<KeyboardAvoidingView
				behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
				style={styles.container}
			>
				<BGCalculationComponent
					setBGInfo={_setInfo}
					bgInfo={customCalculation.bgMealInfo}
				/>
				<CarbCalculationComponent
					setCarbInfo={_setInfo}
					carbInfo={customCalculation.carbMealInfo}
				/>
			</KeyboardAvoidingView>
		</View>
	);

	function _setInfo(
		mealInfo: MealInfo = customCalculation.mealInfo,
		bgInfo: BGMealInfo = customCalculation.bgMealInfo,
		carbInfo: CarbMealInfo = customCalculation.carbMealInfo
	): void {
		_setCustomCalculation({
			mealInfo: mealInfo,
			bgMealInfo: bgInfo,
			carbMealInfo: carbInfo,
		});
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
