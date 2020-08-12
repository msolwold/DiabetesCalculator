import React, { useState, useEffect } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, View } from 'react-native';
import { CarbCalculationComponent } from './CarbCalculation/CarbCalculationComponent';
import { BGCalculationComponent } from './BGCalculation/BGCalculationComponent';
import { BGMealInfo, CarbMealInfo } from '../../../../models/Home/types';
import { MealDetailComponent } from '../Shared/MealDetails/MealDetailComponent';

interface CustomCalculationProps {}

export const CustomCalculation: React.FC<CustomCalculationProps> = ({}) => {
	let [mealName, setMealName] = useState<string>('');
	let [mealType, setMealType] = useState<string>('breakfast');
	let [mealDate, setMealDate] = useState<Date>(new Date());
	let [bgInfo, setBgInfo] = useState<BGMealInfo | null>(null);
	let [carbInfo, setCarbInfo] = useState<CarbMealInfo | null>(null);
/* 
	useEffect(() => {
		console.log(mealName, mealType, mealDate, bgInfo, carbInfo);
	}); */

	return (
		<View style={styles.container}>
			<MealDetailComponent
				mealName={mealName}
				setMealName={setMealName}
				setMealType={setMealType}
				mealDate={mealDate}
				setMealDate={setMealDate}
			/>
			<KeyboardAvoidingView
				behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
				style={styles.container}
			>
				<BGCalculationComponent setBgInfo={_setBgInfo} />
				<CarbCalculationComponent setCarbInfo={_setCarbInfo} />
			</KeyboardAvoidingView>
		</View>
	);

	function _setBgInfo(
		currentBG: number,
		correction: boolean,
		correctionUnits?: number
	): void {
		if (correction) {
			setBgInfo({ currentBG, correction, correctionUnits });
		} else {
			setBgInfo({ currentBG, correction });
		}
	}

	function _setCarbInfo(mealCarbs: number, insulinDose: number): void {
		setCarbInfo({ mealCarbs, insulinDose });
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
