import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { DataRowComponent } from '../../Shared/DataRowComponent';

interface BGCalculationComponentProps {}

export const BGCalculationComponent: React.FC<BGCalculationComponentProps> = ({}) => {
	let [currentBG, setCurrentBG] = useState<number | null>(null);
	let [carbsFromMeal, setCarbsFromMeal] = useState<number | null>(0);

	return (
		<View style={styles.container}>
			<DataRowComponent
				rowName="Current BG"
				rowNameStyle={styles.titleText}
				value={currentBG}
				unit="mg/dL"
				_onChange={_setCurrentBG}
				editable={true}
			/>
			<DataRowComponent
				rowName="Target BG"
				rowNameStyle={styles.titleText}
				value={120}
				unit="mg/dL"
				_onChange={() => {}}
				editable={false}
			/>
			<DataRowComponent
				rowName="Units for Correction"
				rowNameStyle={styles.resultText}
				value={_getCorrectionUnits()}
				unit="mg/dL"
				_onChange={() => {}}
				editable={false}
			/>
		</View>
	);

	function _setCurrentBG(text: string): void {
		if (text == '') setCurrentBG(null);
		else setCurrentBG(parseInt(text));
	}

	// TODO: Set logic for correction dosage
	function _getCorrectionUnits(): number | null {
		if (!currentBG) return null;
		else return 20;
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		justifyContent: 'space-around',
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
