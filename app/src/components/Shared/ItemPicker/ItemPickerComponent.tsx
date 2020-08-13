import React from 'react';
import { StyleSheet } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import { ListItem } from '../../../models/Shared/types';

interface ItemPickerComponentProps {
    data: Array<ListItem>;
    _onChange: (key: number) => void;
}

export const ItemPickerComponent: React.FC<ItemPickerComponentProps> = (
	props
) => {
	return (
		<ModalSelector
            data={props.data}
            onChange={(option) => props._onChange(option.key)}
			cancelText="Cancel"
			backdropPressToClose={true}
			initValue="Pick Meal Type..."
            animationType="fade"
            style={styles.style}
			selectStyle={styles.selectStyle}
			overlayStyle={styles.overlayStyle}
			optionStyle={styles.optionStyle}
			optionTextStyle={styles.optionTextStyle}
			cancelStyle={styles.optionStyle}
		/>
	);
};

const styles = StyleSheet.create({
    style: {
        flex: 1,
        borderWidth: .5,
        borderRadius: 5,
	},
	selectStyle: {
        borderWidth: 0,
	},
	overlayStyle: {
		flex: 1,
		padding: 0,
		paddingBottom: 40,
		justifyContent: 'flex-end',
		backgroundColor: 'rgba(0,0,0,0.85)',
	},
	optionStyle: {
		height: 50,
		borderBottomColor: 'black',
		justifyContent: 'center',
	},
	optionTextStyle: {
		fontWeight: '700',
		textAlignVertical: 'center',
	},
});
