import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import InfoBar from "./components/InfoBar";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <InfoBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
});
