
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
    Linking
} from 'react-native';
const { height, width } = Dimensions.get("screen")
import * as Const from '../Constant/Const'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ActionButton from 'react-native-action-button';
export default function Home({ navigation }) {
    const [arr, setarr] = useState([{
        text: "تحليل دم"
    }, {
        text: "تحليل سكر"

    }, {
        text: "تحليل ضغط"

    }, {
        text: "تحليل حمل"

    },])
    const [arr2, setarr2] = useState([{}, {},])
    const [images, setimages] = useState([
        {
            url: require("../images/lab.jpg")
        },
        {
            url: require("../images/lab2.jpg")
        },
        {
            url: require("../images/lab3.jpg")
        }, {
            url: require("../images/lab4.jpg")
        }
    ])
    return (
        <>
            <StatusBar backgroundColor={"#fff"}></StatusBar>


            <View style={styles.Container}>
                <ScrollView contentContainerStyle={{ alignItems: "center", width: width, height: height * .9 }}>
                    <View
                        style={{
                            height: height * .15,
                            width: width * .85,
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Profile")}
                        >
                            <Image
                                style={{
                                    height: height * .045,
                                    width: width * .1,
                                    borderRadius: 100
                                }}
                                source={require("../images/lab.jpg")}
                            />
                        </TouchableOpacity>
                        <Text style={styles.textheader}>الحياه</Text>
                        <View style={{
                            height: height * .04,
                            width: width * .1,
                            borderRadius: 100
                        }}>

                        </View>
                    </View>

                    <TextInput
                        placeholder='البحث باسم التحليل'
                        style={styles.textinput}
                    // keyboardType='number-pad'

                    />

                    <Image
                        source={images[1].url}
                        style={styles.image}
                    >

                    </Image>
                    <View
                        style={{
                            height: height * .04,
                            width: width * .3,
                            alignItems: "center",
                            justifyContent: "center",
                            justifyContent: "space-around",
                            flexDirection: "row"
                        }}>

                        <TouchableOpacity style={styles.circle}>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.circle}>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...styles.circle, backgroundColor: Const.color }}>

                        </TouchableOpacity>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.text}>جميع التحاليل</Text>
                    </View>
                    <View style={{
                        height: height * .14,
                        width: width * .9,
                        flexWrap: "wrap",
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}>


                        {
                            arr.map((item, index) =>
                            (
                                <TouchableOpacity
                                    style={{
                                        height: height * .05,
                                        width: width * .4,
                                        backgroundColor: Const.select_color,
                                        borderRadius: 10,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: width * .02

                                    }}
                                >
                                    <Text style={{ ...styles.text, fontSize: 13 }}>{item.text}</Text>
                                </TouchableOpacity>

                            ))
                        }
                    </View>


                    <TouchableOpacity style={{
                        height: height * .02,
                        width: width * .8,
                        alignItems: "flex-end"
                    }}
                        onPress={() => navigation.navigate("Analysis")}

                    >
                        <Text style={styles.text2}>عرض الكل</Text>
                    </TouchableOpacity>
                    <View style={styles.row}>
                        <Text style={styles.text}>التحاليل غير النتهية</Text>
                    </View>
                    <View style={{
                        height: height * .075,
                        width: width * .9,
                        flexWrap: "wrap",
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}>


                        {
                            arr2.map((item, index) =>
                            (
                                <TouchableOpacity
                                    style={{
                                        height: height * .05,
                                        width: width * .4,
                                        backgroundColor: Const.select_color,
                                        borderRadius: 10,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: width * .02

                                    }}
                                >
                                    <Text style={{ ...styles.text, fontSize: 13 }}>تحليل دم</Text>
                                </TouchableOpacity>

                            ))
                        }
                    </View>


                    <TouchableOpacity style={{
                        height: height * .02,
                        width: width * .8,
                        alignItems: "flex-end"
                    }}
                        onPress={() => navigation.navigate("Analysis")}


                    >
                        <Text style={styles.text2}>عرض الكل</Text>
                    </TouchableOpacity>



                    <ActionButton buttonColor={Const.color}>
                        <ActionButton.Item buttonColor='#9b59b6' title="" onPress={() => Linking.openURL(`tel:01158659437}`)}>
                            <Ionicons name="call-outline" style={styles.actionButtonIcon} />
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#3498db' title="" onPress={() => { navigation.navigate("Chat") }}>
                            <Ionicons name="chatbubbles" style={styles.actionButtonIcon} />
                        </ActionButton.Item>

                    </ActionButton>
                </ScrollView >
            </View >


        </>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        justifyContent: "space-around"
    }, textheader: {
        fontSize: 18,
        color: "#000",
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
    image: {
        height: height * .2,
        width: width * .85,
        borderRadius: 5,
        marginTop: height * .02
    }, textinput: {
        height: height * .05,
        width: width * .85,
        backgroundColor: Const.select_color,
        borderRadius: 5,
        padding: 10,
        color: "#000",
        fontFamily: "segoe"

    },
    text: {
        color: "#000",
        fontFamily: "segoe",
        fontSize: 15


    }, circle: {
        height: height * .008,
        width: width * .07,
        borderRadius: 20,
        backgroundColor: Const.select_color
    },
    row: {
        width: width * .85,
        height: height * .04,
        justifyContent: "center"
    }, text2: {
        color: "#000",
        fontFamily: "segoe",
        fontSize: 12,

    },
    touc: {
        height: height * .06,
        width: width * .134,
        backgroundColor: Const.select_color,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: height * .09,
        right: width * .08,
        borderRadius: 100,
        elevation: 1

    }, touc2: {
        height: height * .06,
        width: width * .134,
        backgroundColor: Const.select_color,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: height * .02,
        right: width * .08,
        borderRadius: 100,
        elevation: 1

    },
    icon: {
        fontSize: 18,
        color: Const.color
    }, actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});


