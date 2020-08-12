import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { HomeScreenContext } from '../HomeScreenProvider';

interface HomeButtonsProps {}

export const HomeButtons: React.FC<HomeButtonsProps> = ({}) => {
	let { _setMealCalculation, _setCustomCalculation, currentTab } = useContext(
		HomeScreenContext
	);

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => {
					alert('TEMP: Are you sure you want to clear the screen?'),
						_setMealCalculation();
				}}
				style={styles.button}
			>
				<Text>{currentTab}</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					alert('TEMP: Are you sure you want to log this meal?'),
						_setCustomCalculation();
				}}
				style={styles.button}
			>
				<Text>Submit Meal</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	button: {
		flex: 1,
		borderWidth: 0.5,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
