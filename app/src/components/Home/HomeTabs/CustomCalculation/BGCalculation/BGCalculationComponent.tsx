import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { DataRowComponent } from '../../Shared/DataRowComponent';
import {
	BGMealInfo,
	MealInfo,
	CarbMealInfo,
} from '../../../../../models/Home/types';

interface BGCalculationComponentProps {
	setBGInfo: (
		mealInfo?: MealInfo,
		bgInfo?: BGMealInfo,
		carbInfo?: CarbMealInfo
	) => void;
	bgInfo: BGMealInfo;
}

export const BGCalculationComponent: React.FC<BGCalculationComponentProps> = (
	props
) => {
	return (
		<View style={styles.container}>
			<DataRowComponent
				rowName="Current BG"
				rowNameStyle={styles.titleText}
				value={props.bgInfo.currentBG}
				unit="mg/dL"
				_onChange={_setCurrentBG}
				editable={true}
			/>
			<DataRowComponent
				rowName="Target BG"
				rowNameStyle={styles.titleText}
				value={props.bgInfo.targetBG}
				unit="mg/dL"
				_onChange={() => {}}
				editable={false}
			/>
			<DataRowComponent
				rowName="Units for Correction"
				rowNameStyle={styles.resultText}
				value={props.bgInfo.correctionUnits || null}
				unit="units"
				_onChange={() => {}}
				editable={false}
			/>
		</View>
	);

	function _setCurrentBG(text: string): void {
		let bgInfo: BGMealInfo;
		if (text == '') bgInfo = new BGMealInfo();
		else {
			let currentBG = parseInt(text);
			let correctionUnits: number | null = _getCorrectionUnits(currentBG);
			bgInfo = new BGMealInfo(
				currentBG,
				correctionUnits != null,
				correctionUnits || 0
			);
		}
		props.setBGInfo(undefined, bgInfo);
	}

	// TODO: Set logic for correction dosage
	function _getCorrectionUnits(currentBG: number): number | null {
		if (!currentBG || currentBG < 120) return null;
		else return 2;
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
