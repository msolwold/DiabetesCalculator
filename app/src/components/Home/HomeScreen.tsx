import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HomeScreenTabRoutes } from '../../navigation/Home/HomeScreenTabs';
import { HomeScreenProvider } from './HomeScreenProvider';
import { HomeButtons } from './HomeButtons/HomeButtons';

export const HomeScreen = ({}) => {

	return (
		<HomeScreenProvider>
			<View style={styles.container}>
				<View style={styles.tabs}>
					<HomeScreenTabRoutes />
				</View>
				<View style={styles.bottom}>
					<HomeButtons />
				</View>
			</View>
		</HomeScreenProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	tabs: {
		flex: 1,
		backgroundColor: '#fff',
	},
	bottom: {
		height: '5%',
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
