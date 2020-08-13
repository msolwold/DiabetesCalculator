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
import { DiabetesCalculator } from '../../../../models/Shared/enumerations';

interface CustomCalculationProps {}

export const CustomCalculation: React.FC<CustomCalculationProps> = ({}) => {
	let [mealInfo, setMealInfo] = useState<MealInfo>();
	let [bgInfo, setBgInfo] = useState<BGMealInfo>();
	let [carbInfo, setCarbInfo] = useState<CarbMealInfo>();

	let { _setCustomCalculation } = useContext(HomeScreenContext);

	useEffect(() => {
		_setCustomCalculation({
			mealInfo,
			bgMealInfo: bgInfo,
			carbMealInfo: carbInfo,
		});
	}, [mealInfo, bgInfo, carbInfo]);

	return (
		<View style={styles.container}>
			<MealDetailComponent setMealInfo={_setMealInfo} />
			<KeyboardAvoidingView
				behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
				style={styles.container}
			>
				<BGCalculationComponent setBgInfo={_setBgInfo} />
				<CarbCalculationComponent setCarbInfo={_setCarbInfo} />
			</KeyboardAvoidingView>
		</View>
	);

	function _setMealInfo(
		mealName: string,
		mealType: DiabetesCalculator.MealType,
		mealDate: Date
	): void {
		setMealInfo({ mealName, mealType, mealDate, enteredDate: new Date() });
	}

	function _setBgInfo(
		currentBG: number,
		targetBG: number,
		correction: boolean,
		correctionUnits?: number
	): void {
		if (correction) {
			setBgInfo({ currentBG, targetBG, correction, correctionUnits });
		} else {
			setBgInfo({ currentBG, targetBG, correction });
		}
	}

	function _setCarbInfo(
		mealCarbs: number,
		carbsPerUnit: number,
		insulinDose: number
	): void {
		setCarbInfo({ mealCarbs, carbsPerUnit, insulinDose });
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
