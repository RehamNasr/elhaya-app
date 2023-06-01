
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
const { height, width } = Dimensions.get("screen")
import * as Const from '../Constant/Const'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function analysis1() {
    let [info, setinfo] = useState([
        {
            iconname: "md-phone-portrait-outline",
            header: "الهاتف",
            text: "01158659437"
        }, {
            iconname: "person",
            header: "السن",
            text: "20"
        }, {
            iconname: "location-sharp",
            header: "العنوان",
            text: "زفتي شارع محمد الحصري"
        }
    ])
    return (
        <>
            <StatusBar backgroundColor={"#fff"}></StatusBar>

            <View style={styles.Container}>
                <TextInput
                    placeholder='البحث باسم التحليل'
                    style={styles.textinput}
                    // keyboardType='number-pad'

                />

                {
                    info.map((item, index) => (
                        <View
                            style={styles.section}

                        >

                            <View style={styles.section2}>
                                <Text style={styles.text}>تحليل دم</Text>

                                <Text style={{ fontSize: 10, color: "#000", alignSelf: "flex-start", fontFamily: "segoe" }}>مايو 2020,10</Text>
                            </View>
                            <View style={styles.section1}>
                                <Ionicons
                                    name={"documents"}
                                    style={{ ...styles.icon, color: "#f00" }}
                                />
                            </View>
                        </View>
                    ))
                }


            </View >

        </>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        // justifyContent: "center",
        paddingTop: height * .02

    }, textheader: {
        fontSize: 18,
        color: Const.color,
        fontFamily: "segoe",
        marginVertical: height * .02
    }, texttitle: {
        fontSize: 15,
        color: "#000",
        fontFamily: "segoe",
        width: width * .6,
        textAlign: "center"
    }
    ,
    textinput: {
        height: height * .05,
        width: width * .85,
        backgroundColor: Const.select_color,
        borderRadius: 5,
        marginVertical: height * .009,
        padding: 10,
        color: "#000",
        fontFamily: "segoe"

    },
    text: {
        color: "#000",
        fontFamily: "segoe",
        fontSize: 15

    }, row: {
        height: height * .1,
        width: width * .85,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }, icon: {
        fontSize: 20,
        color: "#000"
    }, section: {
        height: height * .08,
        width: width * .8,
        flexDirection: "row",
        // backgroundColor:"#00f",
        alignItems: "center",
        // flexDirection: "row-reverse",
        borderBottomWidth: .4,
        borderColor: Const.select_color

    }, section1: {
        height: height * .06,
        width: width * .1,
        alignItems: "center",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    section2: {
        height: height * .06,
        width: width * .74,
        // alignItems: "center",
        justifyContent: "center",
        justifyContent: "space-around"
    }
});


