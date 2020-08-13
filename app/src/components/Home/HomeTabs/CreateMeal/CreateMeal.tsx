import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MealAssembler } from './meal-assembler/MealAssembler';
import { MealCalculation } from './calulculations/MealCalculation';
import { MealDetailComponent } from '../Shared/MealDetails/MealDetailComponent';
import { MealInfo } from '../../../../models/Home/types';
import { DiabetesCalculator } from '../../../../models/Shared/enumerations';

interface CreateMealProps {}

export const CreateMeal: React.FC<CreateMealProps> = ({}) => {
	let [mealInfo, setMealInfo] = useState<MealInfo>();
	return (
		<View style={styles.container}>
{/* 			<MealDetailComponent
				setMealInfo={_setMealInfo}
			/> */}
			<MealAssembler></MealAssembler>
			<MealCalculation></MealCalculation>
		</View>
	);

	function _setMealInfo(
		mealName: string,
		mealType: DiabetesCalculator.MealType,
		mealDate: Date
	): void {
		setMealInfo({ mealName, mealType, mealDate, enteredDate: new Date() });
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
