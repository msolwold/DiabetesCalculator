import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, AsyncStorage, Alert } from 'react-native';
import { DataRowComponent } from '../../Shared/DataRowComponent';

interface CarbCalculationComponentProps {}

export const CarbCalculationComponent: React.FC<CarbCalculationComponentProps> = ({}) => {
	let [mealCarbs, setMealCarbs] = useState<number | null>(null);
	let [insulinRatio, setInsulinRatio] = useState<number | undefined>(
		undefined
	);

	useEffect(() => {
		AsyncStorage.getItem('insulinRatio', (errors, result) => {
			if (errors) console.log(errors);
			else if (result) setInsulinRatio(parseInt(result));
		});
	}, []);

	return (
		<View style={styles.container}>
			<DataRowComponent
				rowName="Carbs from Meal"
				rowNameStyle={styles.titleText}
				value={mealCarbs}
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
				value={_getMealUnits()}
				unit="units"
				_onChange={() => {}}
				editable={false}
			/>
		</View>
	);

	function _setMealCarbs(text: string): void {
		if (text == '') setMealCarbs(null);
		else setMealCarbs(parseInt(text));
	}

    // TODO: Maybe make this more betterer
	function _getMealUnits(): number | null {
		if (!mealCarbs || !insulinRatio) return null;
		return Math.round((mealCarbs / insulinRatio) * 10) / 10;
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		width: '100%',
		borderWidth: 0.5,
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