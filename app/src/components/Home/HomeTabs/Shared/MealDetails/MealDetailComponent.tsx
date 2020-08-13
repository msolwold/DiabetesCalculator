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
import {
	MealInfo,
	CarbMealInfo,
	BGMealInfo,
} from '../../../../../models/Home/types';

interface MealDetailComponentProps {
	setMealInfo: (
		mealInfo?: MealInfo,
		bgInfo?: BGMealInfo,
		carbInfo?: CarbMealInfo
	) => void;
	mealInfo: MealInfo;
}

export const MealDetailComponent: React.FC<MealDetailComponentProps> = (
	props
) => {
	let [dateModalVisible, setDateModalVisible] = useState<boolean>(false);

	return (
		<View style={styles.container}>
			<View style={styles.sectionContainer}>
				<MealDetailItemComponent labelName="Meal Name">
					<TextInput
						returnKeyType="done"
						placeholder="Enter Meal Name..."
						value={props.mealInfo.mealName}
						onChangeText={_setMealName}
						style={styles.nameInput}
					></TextInput>
				</MealDetailItemComponent>
			</View>

			<View style={styles.sectionContainer}>
				<MealDetailItemComponent labelName="Meal Type">
					<ItemPickerComponent
						data={mealTypes}
						_onChange={_setMealType}
					/>
				</MealDetailItemComponent>

				<MealDetailItemComponent labelName="Meal Date">
					<TouchableOpacity
						style={styles.datePicker}
						onPress={() => _toggleModal()}
					>
						<Text>
							{moment(props.mealInfo.mealDate).format(
								'MMMM Do YYYY'
							)}
						</Text>
					</TouchableOpacity>
				</MealDetailItemComponent>
			</View>

			<DatePickerComponent
				isVisible={dateModalVisible}
				savedDate={props.mealInfo.mealDate}
				saveDate={_setDate}
				closeModal={_toggleModal}
				resetDate={_resetDate}
			/>
		</View>
	);

	function _updateMealInfo(
		mealName: string = props.mealInfo.mealName,
		mealType: DiabetesCalculator.MealType = props.mealInfo.mealType,
		mealDate: Date = props.mealInfo.mealDate
	): void {
		props.setMealInfo(new MealInfo(mealName, mealType, mealDate));
	}

	function _setMealName(name: string) {
		_updateMealInfo(name);
	}

	function _setMealType(key: number) {
		_updateMealInfo(undefined, key);
	}

	function _setDate(date: Date): void {
		_updateMealInfo(undefined, undefined, date);
		_toggleModal();
	}

	function _resetDate(): void {
		_setDate(new Date());
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
