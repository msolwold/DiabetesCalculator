import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { DataRowComponent } from '../../Shared/DataRowComponent';

interface BGCalculationComponentProps {
	setBgInfo: (
		currentBG: number,
		correction: boolean,
		correctionUnits?: number
	) => void;
}

export const BGCalculationComponent: React.FC<BGCalculationComponentProps> = (
	props
) => {
	let [currentBG, setCurrentBG] = useState<number | null>(null);

	useEffect(() => {
		let correctionUnits = _getCorrectionUnits() || 0;
		if (correctionUnits > 0) {
			props.setBgInfo(currentBG || 0, true, correctionUnits);
		} else {
			props.setBgInfo(currentBG || 0, false);
		}
	}, [currentBG]);

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
				unit="units"
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
