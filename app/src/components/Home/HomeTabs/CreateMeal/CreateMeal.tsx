import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MealAssembler } from './meal-assembler/MealAssembler';
import { MealCalculation } from './calulculations/MealCalculation';
import { MealDetailComponent } from '../Shared/MealDetails/MealDetailComponent';

interface CreateMealProps {}

export const CreateMeal: React.FC<CreateMealProps> = ({}) => {
	let [mealName, setMealName] = useState<string>('');
	let [mealType, setMealType] = useState<string>('breakfast');
	let [mealDate, setMealDate] = useState<Date>(new Date());
	return (
		<View style={styles.container}>
			<MealDetailComponent
				mealName={mealName}
				setMealName={setMealName}
				setMealType={setMealType}
				mealDate={mealDate}
				setMealDate={setMealDate}
			/>
			<MealAssembler></MealAssembler>
			<MealCalculation></MealCalculation>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
