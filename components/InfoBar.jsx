import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

const InfoBar = () => {
    const horas = new Date().getHours();
    const minutos = new Date().getMinutes();
    console.log(horas);
    console.log(minutos);
    return (
        <View style={styles.infoBarContainer}>
            <ImageBackground source={require("../assets/images.jpeg")} style={styles.image}>
                <View style={styles.leftIcons}>
                    <Image source={require("../assets/cube.png")} style={{ width: 24, height: 24 }} />
                </View>
                <View style={styles.rightIcons}>
                    <Image source={require("../assets/shield.png")} style={{ width: 24, height: 24 }} />
                    <Image source={require("../assets/bluetooth.png")} style={{ width: 24, height: 24 }} />
                    <Text style={{ color: "white", marginRight: 5 }}>icono</Text>
                    <Text style={{ color: "white", marginRight: 5 }}>icono</Text>
                    <Text style={{ color: "white" }}>
                        {horas} : {minutos}
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    infoBarContainer: {
        flex: 0.05,
        backgroundColor: "white",
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
    },

    leftIcons: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
    },

    rightIcons: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
    },
});

export default InfoBar;
