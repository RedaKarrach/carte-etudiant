import React, { useRef, useState } from 'react';
import {
	SafeAreaView,
	FlatList,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

export default function App() {
	const [names, setNames] = useState(['Karrach', 'Reda', 'Sofia', 'Youssef']);
	const counterRef = useRef(1);

	function addName() {
		const newName = `Nouvel Élève numero ${counterRef.current}`;
		counterRef.current += 1;

		setNames(prev => [newName, ...prev]);
	}

	const renderItem = ({ item, index }) => (
		<View style={styles.item}>
			<Text style={styles.itemIndex}>{index + 1}.</Text>
			<Text style={styles.itemText}>{item}</Text>
		</View>
	);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Image source={require('./assets/emsi.png')} style={styles.logo} />
				<Text style={styles.title}>Liste des étudiants</Text>
			</View>

			<FlatList
				data={names}
				keyExtractor={(item, idx) => `${item}-${idx}`}
				renderItem={renderItem}
				contentContainerStyle={styles.list}
				style={styles.flat}
			/>

			<TouchableOpacity style={styles.button} onPress={addName} activeOpacity={0.8}>
				<Text style={styles.buttonText}>Ajouter un nom</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f6f7fb',
		padding: 16,
	},
	header: {
		alignItems: 'center',
		marginBottom: 12,
	},
	logo: {
		width: 80,
		height: 80,
		resizeMode: 'contain',
		marginBottom: 8,
	},
	title: {
		fontSize: 20,
		fontWeight: '700',
		color: '#1f2937',
	},
	flat: {
		flex: 1,
		marginVertical: 12,
	},
	list: {
		paddingBottom: 24,
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',
		padding: 12,
		marginVertical: 6,
		marginHorizontal: 6,
		borderRadius: 8,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.06,
		shadowRadius: 2,
		elevation: 2,
	},
	itemIndex: {
		width: 28,
		fontSize: 16,
		color: '#6b7280',
		fontWeight: '600',
	},
	itemText: {
		fontSize: 16,
		color: '#111827',
		fontWeight: '500',
	},
	button: {
		backgroundColor: '#2563eb',
		paddingVertical: 14,
		paddingHorizontal: 20,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 8,
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: '700',
	},
});

