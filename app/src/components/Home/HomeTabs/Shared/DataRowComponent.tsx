import React, { useRef } from 'react';
import {
	StyleProp,
	TextStyle,
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

interface DataRowComponentProps {
	rowName: string;
	rowNameStyle: StyleProp<TextStyle>;
	value: number | null;
	unit: string;
	_onChange: ((text: string) => void) | (() => void);
	editable: boolean;
}

export const DataRowComponent: React.FC<DataRowComponentProps> = (props) => {
    const textInput: React.RefObject<TextInput> = useRef(null);

	return (
		<TouchableOpacity
			activeOpacity={0}
			disabled={!props.editable}
			onPress={() => {
				textInput.current?.focus();
			}}
			style={styles.rowContainer}
		>
			<View>
				<Text style={props.rowNameStyle}>{props.rowName}</Text>
			</View>
			<View style={styles.inputContainer}>
				<TextInput
                    ref={textInput}
					returnKeyType="done"
					style={styles.textInput}
					placeholder="--"
					value={props.value?.toString()}
					editable={props.editable}
					keyboardType="numeric"
					onChangeText={props._onChange}
				></TextInput>
				<Text>{props.unit}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	rowContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	textInput: {
		padding: 5,
		textAlign: 'center',
	},
});
