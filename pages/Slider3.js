
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
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
const { height, width } = Dimensions.get("screen")
import * as Const from '../Constant/Const'

export default function Signup() {
    return (
        <>
            <StatusBar backgroundColor={"#fff"}></StatusBar>
            <View style={styles.Container}>
                <View
                    style={{
                        height: height * .2,
                        width: width * .9,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Text style={styles.textheader}>أهلا بك</Text>
                    <Text style={styles.texttitle}> سجل دخولك باستخدام رقم هاتفك
                        وكلمه المرور

                    </Text>
                </View>


                <View style={{
                    height: height * .7,
                    width: width,
                    // backgroundColor: Const.select_color,
                    alignItems: "center",



                }}>
                    <Image
                        source={require("../images/Login.png")}
                        style={styles.image}
                        resizeMode="center"
                    >

                    </Image>


                    <TextInput
                        placeholder='رقم الهاتف'
                        style={styles.textinput}
                        keyboardType='number-pad'

                    />
                    <TextInput
                        placeholder='كلمه المرور'
                        style={styles.textinput}

                    />

                    <View style={{ width: width * .82 }}>
                        <Text style={{
                            color: "#000",
                            fontFamily: "segoe",
                            alignSelf: "flex-start",
                            fontSize: 12
                        }}>نسيت كلمه المرور</Text>
                    </View>

                    <TouchableOpacity
                        style={{
                            ...styles.textinput,
                            backgroundColor: Const.color,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: height * .05
                        }}

                    >
                        <Text style={{ fontSize: 14, color: "#fff" }}>تسجيل الدخول</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.text}>انشاء حساب</Text>
                    </TouchableOpacity>

                </View>
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
    image: {
        height: height * .3,
        // width: width * .5,
    }, textinput: {
        height: height * .05,
        width: width * .85,
        backgroundColor: Const.select_color,
        borderRadius: 5,
        marginVertical: height * .009,
        padding: 10

    },
    text: {
        marginTop: height * .02,
        color: "#000",
        fontFamily: "segoe",
        textDecorationLine: "underline",
        color: Const.color

    }
});


