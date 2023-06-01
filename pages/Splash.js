
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    Image
} from 'react-native';
const { height, width } = Dimensions.get("screen")
export default function Splash() {
    return (
        <>
            <View style={styles.Container}>
                <Image
                    source={require("../images/logo.png")}
                    style={styles.image}
                >

                </Image>
                <Text style={styles.text}>By CTA</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }, image: {
        height: height * .15,
        width: width * .3
    },
    text: {
        bottom: height * .02,
        position: "absolute",
        color: "#000",
        fontFamily: "segoe"
    }
});


