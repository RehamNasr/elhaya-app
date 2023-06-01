



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
    TouchableOpacity,
    useWindowDimensions
} from 'react-native';
const { height, width } = Dimensions.get("screen")
import * as Const from '../Constant/Const'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import Analysis1 from '../pages/analysis1'
import Analysis2 from '../pages/analysis2'



export default function Chat({ navigation }) {
    const [arr, setarr] = useState([
        {
            message: "مع حضرتك يا فندم معمل الحياه  للاستفسار عن أي شئ",
            time: "11.00 صباحا",
            type: "send"
        }, {
            message: "كنت محتاجه اسأل سؤال",
            time: "11.00 صباحا",
            type: "send"
        }, {
            message: "اكيد يا فندم المعمل مفتوح  جميع الأيام من الساعه 9 صباحا الي 8 مساء عدا يوم الجمعه من 9 صباحا الي 4 مساء  تقدر تشرفنا في أي وقت",
            time: "11.00 صباحا",
            type: "rep"
        }, {
            message: "تمام شكرا ",
            time: "11.00 صباحا",
            type: "send"
        }])

    return (
        <>
            <StatusBar backgroundColor={Const.select_color}></StatusBar>
            <View style={styles.Container}>
                <View
                    style={styles.row}
                >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="chevron-forward"
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    <Image
                        style={styles.image}
                        source={require("../images/logo.png")}
                    ></Image>
                    <Text style={styles.textheader} >معمل الحياه</Text>



                </View>
                <View style={styles.mainbox}>
                    {
                        arr.map((item, index) => (
                            <View style={{
                                ...styles.box,
                                alignSelf: item.type != "send" ? "flex-end" : "flex-start",
                                backgroundColor: item.type == "send" ? Const.select_color : Const.color
                            }}>
                                <Text style={
                                    {
                                        ...styles.text1,
                                        color: item.type == "send" ? "#000" : Const.select_color
                                    }
                                }>
                                    مع حضرتك يا فندم معمل الحياه  للاستفسار
                                    عن أي شئ
                                </Text>
                                <Text style={
                                    {
                                        ...styles.text2,
                                        color: item.type == "send" ? "#000" : Const.select_color
                                    }
                                }
                                >11.00 صباحا</Text>
                            </View>
                        ))
                    }

                </View>
                <View
                    style={
                        styles.row2
                    }

                >
                    <TextInput
                        placeholder='اكتب الرساله هنا...'
                        style={styles.textinput}

                    />
                    <TouchableOpacity
                        style={{
                            height: height * .052,
                            width: width * .12,
                            backgroundColor: Const.select_color,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 5,
                            elevation: 1
                        }}
                    >
                        <Ionicons name="md-send-sharp"
                            style={{
                                fontSize: 12,
                                color: "#000",
                                transform: [{ scaleX: -1 }]
                            }} />
                    </TouchableOpacity>


                </View>


            </View>

        </>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        // justifyContent: "center",

    }, textheader: {
        fontSize: 18,
        color: "#000",
        fontFamily: "segoe",
        marginVertical: height * .02
    }, texttitle: {
        height: height * .05,
        width: width * .9,
        backgroundColor: Const.select_color,
        borderRadius: 5,
        marginVertical: height * .009,
        padding: 10,
        color: "#000",
        fontFamily: "segoe"
    }
    ,
    image: {
        height: height * .05,
        width: width * .1,
        marginHorizontal: width * .01
    }, row2: {
        height: height * .1,
        width: width * .9,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    textinput: {
        height: height * .052,
        width: width * .7,
        backgroundColor: Const.select_color,
        borderRadius: 5,
        marginVertical: height * .009,
        padding: 10,
        color: "#000",
        fontFamily: "segoe"

    }, mainbox: {
        height: height * .6,
        width: width * .9,
        paddingTop: height * .02
    },
    box: {
        minHeight: height * .1,
        maxWidth: width * .7,
        minWidth: width * .7,
        backgroundColor: Const.select_color,
        justifyContent: "center",
        backgroundColor: Const.select_color,
        borderRadius: 5,
        padding: 5,
        alignSelf: "flex-end",
        marginVertical: height * .002
    }, box2: {
        minHeight: height * .1,
        maxWidth: width * .35,
        backgroundColor: Const.color
    },
    text1: {
        color: "#000",
        fontFamily: "segoe",
        fontSize: 14

    }, text2: {
        color: "#000",
        fontFamily: "segoe",
        fontSize: 10,
        alignSelf: "flex-end"

    }, row: {
        height: height * .19,
        width: width,
        paddingLeft: width * .054,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Const.select_color
    }, icon: {
        fontSize: 20,
        color: "#000"
    }, section: {
        height: height * .08,
        width: width * .8,
        flexDirection: "row",
        // backgroundColor:"#00f",
        alignItems: "center",

    }, section1: {
        height: height * .06,
        width: width * .1,
        alignItems: "center",
        justifyContent: "center",
        alignItems: "flex-end"
    },
    section2: {
        height: height * .06,
        width: width * .6,
        // alignItems: "center",
        justifyContent: "center",
        justifyContent: "space-around"
    }
});