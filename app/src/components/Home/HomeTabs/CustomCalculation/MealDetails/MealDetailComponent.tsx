import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Picker } from 'react-native';

interface MealDetailComponentProps {}

export const MealDetailComponent: React.FC<MealDetailComponentProps> = ({}) => {
	let [mealName, setMealName] = useState<string>('');

	return (
		<View style={styles.container}>
			<View style={styles.sectionContainer}>
				<View style={styles.fieldContainer}>
					<Text>Meal Name:</Text>
					<TextInput
						returnKeyType="done"
						placeholder="Enter Meal Name..."
						value={mealName}
						onChangeText={(text) => setMealName(text)}
						style={styles.nameInput}
					></TextInput>
				</View>
			</View>

			<View style={styles.sectionContainer}>
				<View style={styles.fieldContainer}>
					<Text>Meal Type:</Text>
					<View style={styles.picker}>
						<Picker selectedValue="breakfast">
							<Picker.Item label="Breakfast" value="breakfast" />
							<Picker.Item label="Lunch" value="lunch" />
							<Picker.Item label="Dinner" value="dinner" />
							<Picker.Item label="Snack" value="snack" />
						</Picker>
					</View>
				</View>
				<View style={styles.fieldContainer}>
					<Text>Meal Date:</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '30%',
		justifyContent: 'flex-start',
		borderWidth: 0.5,
	},
	sectionContainer: {
		flex: 1,
		flexDirection: 'row',
		width: '100%',
	},
	fieldContainer: {
		flex: 1,
		alignItems: 'flex-start',
		width: '100%',
		borderWidth: 0.5,
		padding: 10,
	},
	nameInput: {
		height: 30,
		width: '100%',
		borderWidth: 0.5,
		padding: 2,
	},
	picker: {
		width: ,
		height: 20,
		backgroundColor: 'black',
	},
});
