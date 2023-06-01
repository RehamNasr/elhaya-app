import React, { useContext } from 'react';
import { StyleSheet, Text, Image, View, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Ionicons from 'react-native-vector-icons/Ionicons'


const { height, width } = Dimensions.get("screen")
import * as Const from '../Constant/Const'
export default function Slider1({ navigation }) {
    const slides = [
        {
            key: 1,

            text: 'مرحبا بك في معمل الحياه ',
            image: require('../images/slider1.png'),
        },
        {
            key: 2,

            text: 'تقدر تطلع علي نتائج التحاليل في أي وقت عن طريق الابلكيشن  ',
            image: require('../images/slider2.png'),

        },
        {
            key: 3,

            text: 'و تقدر تتواصل مع االمعمل في أي وقت لاي استفسار',
            image: require('../images/slider3.png'),

        }
    ];
    const _renderItem = ({ item }) => {
        return (
            <View style={styles.Container}>
                <View style={styles.content}>
                    <Image source={item.image} style={styles.image} resizeMode='center' />
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            </View>
        );
    }
    _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ionicons
                    name="chevron-back"
                    color={Const.color}
                    size={24}
                />
            </View>
        );
    };
    _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ionicons
                    name="checkmark-outline"
                    color={Const.color}
                    size={24}
                />
            </View>
        );
    };


    return (
        <>
            <AppIntroSlider
                renderItem={_renderItem}
                data={slides}
                showDoneButton={true}
                showNextButton={true}

                renderDoneButton={this._renderDoneButton}
                renderNextButton={this._renderNextButton}
                activeDotStyle={{
                    backgroundColor: "#fff",
                    width: width * .06,
                    height: height * .005
                }}
                dotStyle={{
                    backgroundColor: "#fff",
                    width: width * .06,
                    height: height * .005
                }}
                // reverse
                style={styles.slider}
                onDone={() => navigation.navigate("Login")}
            />

        </>
    )


}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",

    },
    content: {
        position: 'absolute',
        top: '35%', // Position the content in the center of the slide
        transform: [{ translateY: -50 }, { scaleX: -1 }], // Flip the content horizontally and position it in the center
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: height * .35,
        // width: width * .3
    },
    text: {
        color: "#000",
        fontFamily: "segoe",
        width: width * .6,
        textAlign: "center",
        fontSize: 15
    }, buttonCircle: {
        width: width * .9,
        height: height * .05,
        backgroundColor: Const.select_color,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',


    },
    slider: {
        transform: [{ scaleX: -1 }], // Flip the slider horizontally
    },
});