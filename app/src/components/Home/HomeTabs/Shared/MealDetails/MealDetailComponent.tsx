import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { DatePickerComponent } from '../../../../Shared/DatePicker/DatePickerComponent';
import moment from 'moment';
import { ItemPickerComponent } from '../../../../Shared/ItemPicker/ItemPickerComponent';
import { mealTypes } from '../../../../../models/Shared/listItems';
import { DiabetesCalculator } from '../../../../../models/Shared/enumerations';

interface MealDetailComponentProps {
	setMealInfo: (
		mealName: string,
		mealType: DiabetesCalculator.MealType,
		mealDate: Date
	) => void;
}

export const MealDetailComponent: React.FC<MealDetailComponentProps> = (
	props
) => {
	let [mealName, setMealName] = useState<string>('');
	let [mealType, setMealType] = useState<DiabetesCalculator.MealType>(-1);
	let [mealDate, setMealDate] = useState<Date>(new Date());
	let [dateModalVisible, setDateModalVisible] = useState<boolean>(false);

	useEffect(() => {
		props.setMealInfo(mealName, mealType, mealDate);
	}, [mealName, mealType, mealDate]);

	return (
		<View style={styles.container}>
			<View style={styles.sectionContainer}>
				<MealDetailItemComponent labelName="Meal Name">
					<TextInput
						returnKeyType="done"
						placeholder="Enter Meal Name..."
						value={mealName}
						onChangeText={(text) => setMealName(text)}
						style={styles.nameInput}
					></TextInput>
				</MealDetailItemComponent>
			</View>

			<View style={styles.sectionContainer}>
				<MealDetailItemComponent labelName="Meal Type">
					<ItemPickerComponent
						data={mealTypes}
						_onChange={setMealType}
					/>
				</MealDetailItemComponent>

				<MealDetailItemComponent labelName="Meal Date">
					<TouchableOpacity
						style={styles.datePicker}
						onPress={() => _toggleModal()}
					>
						<Text>{moment(mealDate).format('MMMM Do YYYY')}</Text>
					</TouchableOpacity>
				</MealDetailItemComponent>
			</View>

			<DatePickerComponent
				isVisible={dateModalVisible}
				savedDate={mealDate}
				saveDate={_setDate}
				closeModal={_toggleModal}
				resetDate={_resetDate}
			/>
		</View>
	);

	function _setDate(date: Date): void {
		setMealDate(date);
		_toggleModal();
	}

	function _resetDate(): void {
		setMealDate(new Date());
		_toggleModal();
	}

	function _toggleModal(): void {
		setDateModalVisible((dateModalVisible = !dateModalVisible));
	}
};

interface MealDetailItemComponentProps {
	labelName: string;
}

const MealDetailItemComponent: React.FC<MealDetailItemComponentProps> = (
	props
) => {
	return (
		<View style={styles.fieldContainer}>
			<View style={{ flex: 1 }}>
				<Text style={{ fontWeight: '700' }}>{props.labelName}:</Text>
			</View>
			<View style={{ flex: 1 }}>{props.children}</View>
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
		alignContent: 'space-around',
		width: '100%',
		padding: 10,
	},
	nameInput: {
		height: 30,
		width: '100%',
		borderWidth: 0.5,
		padding: 2,
	},
	datePicker: {
		flex: 1,
		borderWidth: 0.5,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
