import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { HomeScreenContext } from '../HomeScreenProvider';

interface HomeButtonsProps {}

export const HomeButtons: React.FC<HomeButtonsProps> = ({}) => {
	let { mealCalculation, customCalculation, currentTab, _clearCustomCalculation } = useContext(
		HomeScreenContext
	);

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => {
					alert('TEMP: Are you sure you want to clear the screen?')
					_clearCustomCalculation();
				}}
				style={styles.button}
			>
				<Text>{currentTab}</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => {
					alert(
						currentTab == 0
							? `${JSON.stringify(mealCalculation)}`
							: `${JSON.stringify(customCalculation)}`
					);
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
