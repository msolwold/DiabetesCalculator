import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, AsyncStorage, Alert } from 'react-native';
import { DataRowComponent } from '../../Shared/DataRowComponent';
import {
	MealInfo,
	BGMealInfo,
	CarbMealInfo,
} from '../../../../../models/Home/types';

interface CarbCalculationComponentProps {
	setCarbInfo: (
		mealInfo?: MealInfo,
		bgInfo?: BGMealInfo,
		carbInfo?: CarbMealInfo
	) => void;
	carbInfo: CarbMealInfo;
}

export const CarbCalculationComponent: React.FC<CarbCalculationComponentProps> = (
	props
) => {
	let [insulinRatio, setInsulinRatio] = useState<number>();

	useEffect(() => {
		AsyncStorage.getItem('insulinRatio', (errors, result) => {
			if (errors) console.log(errors);
			else if (result) setInsulinRatio(parseInt(result));
		});
	});

	return (
		<View style={styles.container}>
			<DataRowComponent
				rowName="Carbs from Meal"
				rowNameStyle={styles.titleText}
				value={props.carbInfo.mealCarbs}
				unit="carbs"
				_onChange={_setMealCarbs}
				editable={true}
			/>
			<DataRowComponent
				rowName="Carb Ratio"
				rowNameStyle={styles.titleText}
				value={insulinRatio || null}
				unit=": 1"
				_onChange={() => {}}
				editable={false}
			/>
			<DataRowComponent
				rowName="Units for Meal"
				rowNameStyle={styles.resultText}
				value={props.carbInfo.insulinDose}
				unit="units"
				_onChange={() => {}}
				editable={false}
			/>
		</View>
	);

	function _setMealCarbs(text: string): void {
		let carbInfo: CarbMealInfo;
		if (text == '') carbInfo = new CarbMealInfo();
		else {
			let mealCarbs = parseInt(text);
			let insulinDose = _getMealUnits(mealCarbs);
			carbInfo = new CarbMealInfo(
				mealCarbs,
				insulinRatio,
				insulinDose || undefined
			);
		}
		props.setCarbInfo(undefined, undefined, carbInfo);
	}

	// TODO: Maybe make this more betterer
	function _getMealUnits(mealCarbs: number): number | null {
		if (!mealCarbs || !insulinRatio) return null;
		return Math.round((mealCarbs / insulinRatio) * 10) / 10;
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		width: '100%',
	},
	titleText: {
		fontSize: 25,
		fontWeight: '700',
	},
	resultText: {
		fontSize: 20,
		fontWeight: '300',
	},
});
