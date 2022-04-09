import { StyleSheet, Text, View, Switch, TextInput, Button } from "react-native";
import {useState} from 'react'
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

export default function SaisirScreen() {
	let date = new Date();
	const Month = [
		"janvier",
		"fevrier",
		"mars",
		"avril",
		"mai",
		"juin",
		"juillet",
		"août",
		"septembre",
		"octobre",
		"novembre",
		"decembre",
	];
	let isEnabled = false

	return (
		<View style={styles.container}>
			<View style={styles.date}>
				<Text style={{ color: "white" }}>
					{`${date.getDay()} ${Month[date.getMonth()]} ${date.getFullYear()}, ${date.getHours()}h${date.getMinutes()}`}
				</Text>
			</View>
			<View>
				<Text>A combien notez vous votre état sur 5 ?</Text>
				<TextInput
					style={styles.input}
					placeholder=""
					keyboardType="numeric"
					maxLength={1}
				/>
			</View>
			<View style={styles.container}>
				<Text>Avez vous ressenti une arythmie depuis la derniere saisie ?</Text>
				<Switch
					trackColor={{ false: "#767577", true: "#81b0ff" }}
					thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
					ios_backgroundColor="#3e3e3e"
					onValueChange={() => isEnabled = !isEnabled}
					value={isEnabled}
					style={styles.switch}
				/>
			</View>
			<View style={styles.container}>
				<Text>Laissez un commentaire expliquant votre situation medical actuel.</Text>
				<TextInput placeholder="Quelques lignes" style={styles.input1}/>
			</View>
			<View style={styles.header}>
				<Button style={{ color: "white" }} title={"SAISIR"} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		margin: 40,
	},
	switch: {
		alignSelf: "center"
	},
	input :{
		height: 50,
		width: 50,
		backgroundColor: 'gray',
		borderRadius: 15,
		color: 'white',
		alignSelf: "center"
	},
	input1 :{
		height: 200,
		width: 300,
		backgroundColor: 'gray',
		borderRadius: 15,
		padding: 10,
		color: 'white',
		alignSelf: "center"
	},
	date: {
		backgroundColor: "#01337A",
		marginBottom: 20
	},
	header: {
		backgroundColor: "gray",
		color: "#fff",
	},
});
