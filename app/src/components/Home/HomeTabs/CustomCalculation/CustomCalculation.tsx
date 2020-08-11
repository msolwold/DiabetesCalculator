import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import { MealDetailComponent } from './MealDetails/MealDetailComponent';
import { CarbCalculationComponent } from './CarbCalculation/CarbCalculationComponent';
import { BGCalculationComponent } from './BGCalculation/BGCalculationComponent';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface CustomCalculationProps {}

export const CustomCalculation: React.FC<CustomCalculationProps> = ({}) => {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
			style={styles.container}
		>
			<MealDetailComponent />
			<BGCalculationComponent />
			<CarbCalculationComponent />
		</KeyboardAvoidingView>
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
