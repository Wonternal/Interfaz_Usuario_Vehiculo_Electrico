import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { useState } from "react";

const InfoBar = () => {
    const [hours, setHours] = useState(new Date().getHours());
    const [minutes, setMinutes] = useState(new Date().getMinutes());

    setInterval(() => {
        setHours(new Date().getHours());
        setMinutes(new Date().getMinutes());
    }, 1000);

    return (
        <View style={styles.infoBarContainer}>
            <ImageBackground source={require("../assets/images.jpeg")} style={styles.image}>
                <View style={styles.leftIcons}>
                    <Image source={require("../assets/coche.png")} style={styles.iconStyle} />
                </View>
                <View style={styles.rightIcons}>
                    <Image source={require("../assets/shield.png")} style={styles.iconStyle} />
                    <Image source={require("../assets/bluetooth.png")} style={styles.iconStyle} />
                    <Image source={require("../assets/person.png")} style={styles.iconStyle} />
                    <Image source={require("../assets/lte.png")} style={styles.iconStyle} />
                    <Text style={{ color: "white" }}>
                        {hours} : {minutes}
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

    iconStyle: {
        width: 24,
        height: 24,
        marginRight: 5,
    },
});

export default InfoBar;
