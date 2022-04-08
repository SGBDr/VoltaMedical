import { StyleSheet, Text, View, SafeAreaView } from "react-native";

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

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={{ color: "white" }}>SAISIR</Text>
			</View>

			<View style={styles.date}>
				<Text style={{ color: "white" }}>{`${date.getDay()} ${
					Month[date.getMonth()]
				} ${date.getFullYear()}, ${date.getHours()}h${date.getMinutes()}`}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	date: {
		backgroundColor: "#01337A",
	},
	header: {
		backgroundColor: "gray",
		color: "#fff",
	},
});
