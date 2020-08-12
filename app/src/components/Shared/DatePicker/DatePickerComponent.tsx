import React, { useState } from 'react';
import { Modal, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DatePickerComponentProps {
	isVisible: boolean;
	savedDate: Date;
	saveDate: (date: Date) => void;
	closeModal: () => void;
	resetDate?: () => void;
}

export const DatePickerComponent: React.FC<DatePickerComponentProps> = (
	props
) => {
	let [selectedDate, setSelectedDate] = useState<Date>(props.savedDate);

	return (
		<Modal transparent={true} visible={props.isVisible}>
			<View style={styles.modalContainer}>
				<View style={styles.datePickerHeader}>
					<View style={{ flex: 1 }}>
						{props.resetDate && (
							<TouchableOpacity
								onPress={props.resetDate}
								style={styles.datePickerHeaderButtons}
							>
								<Text
									style={styles.datePickerHeaderButtonsText}
								>
									Reset
								</Text>
							</TouchableOpacity>
						)}
					</View>
					<View
						style={{
							flex: 1,
							flexDirection: 'row',
							justifyContent: 'flex-end',
						}}
					>
						<View>
							<TouchableOpacity
								onPress={props.closeModal}
								style={styles.datePickerHeaderButtons}
							>
								<Text
									style={styles.datePickerHeaderButtonsText}
								>
									Close
								</Text>
							</TouchableOpacity>
						</View>

						<View>
							<TouchableOpacity
								onPress={() => props.saveDate(selectedDate)}
								style={styles.datePickerHeaderButtons}
							>
								<Text
									style={styles.datePickerHeaderButtonsText}
								>
									Save
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View style={styles.datePickerContainer}>
					<DateTimePicker
						value={selectedDate}
						onChange={(event, date) =>
							setSelectedDate(date || new Date())
						}
					/>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.85)',
		justifyContent: 'flex-end',
	},
	datePickerHeader: {
		width: '100%',
		height: 40,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: 'white',
		borderBottomWidth: 0.5,
	},
	datePickerHeaderButtons: {
		height: '100%',
		width: 80,
		alignItems: 'center',
		justifyContent: 'center',
	},
	datePickerHeaderButtonsText: {
		fontSize: 20,
		fontWeight: '600',
		color: '#147EFB',
	},
	datePickerContainer: {
		paddingBottom: 20,
		backgroundColor: 'white',
	},
});
