
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

import OTPTextInput from "react-native-otp-textinput"
export default function Pass2({ navigation }) {
    const onInputCompleted = () => {
        navigation.navigate("Pass3")
    }
    return (
        <>
            <StatusBar backgroundColor={"#fff"}></StatusBar>

            <View style={styles.Container}>
                <ScrollView>
                    <View
                        style={{
                            height: height * .3,
                            width: width,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <Text style={styles.textheader}>نسيت كلمه المرور</Text>
                        <Text style={styles.texttitle}>تم إرسال الكود علي رقم الهاتف
                            01158659437



                        </Text>
                    </View>


                    <View style={{
                        height: height * .6,
                        width: width,
                        // backgroundColor: Const.select_color,
                        alignItems: "center",



                    }}>
                        <Image
                            source={require("../images/pass2.png")}
                            style={styles.image}
                            resizeMode="center"
                        >

                        </Image>


                        {/* <SMSVerifyCode
                            // ref={ref => (this.verifycode = ref)}
                            // onInputCompleted={onInputCompleted}
                            containerPaddingHorizontal={30}
                        /> */}
                        <OTPTextInput
                            containerStyle={{
                                height: height * .06,
                                // width: width * .12,
                                // borderWidth: .2,

                            }}
                            textInputStyle={{
                                fontSize: 15
                            }}
                            inputCount={6}
                        >

                        </OTPTextInput>




                        <TouchableOpacity
                            style={{
                                ...styles.textinput,
                                backgroundColor: Const.color,
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: height * .05,
                                width: width * .85,
                                borderRadius: 5
                            }}

                            onPress={() => navigation.navigate("Pass3")}

                        >
                            <Text style={{ fontSize: 14, color: "#fff" }}>تحقق</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Login")}

                        >
                            <Text style={styles.text}>تغيير رقم الهاتف</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
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
        width: width * .11,
        backgroundColor: "#fff",
        borderRadius: 3,
        marginVertical: height * .009,
        padding: 10,
        borderWidth: .1,
        color: "#000",
        fontFamily: "segoe"

    },
    text: {
        marginTop: height * .02,
        color: "#000",
        fontFamily: "segoe",
        textDecorationLine: "underline",
        color: Const.color

    }
});


