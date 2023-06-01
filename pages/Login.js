
import React, { useEffect, useContext, useState } from 'react';
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
import { AuthContext } from './createContext';
export default function Signup({ navigation }) {
    const { login } = useContext(AuthContext)
    const [phone, setPhone] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState("")

    const checklogin = () => {
        if (phone != "01158659437") {
            setError("رقم الهاتف غير صحيح")
            return;
        } else if (pass != "123456789") {
            setError("كلمه المرور غير صحيحه")
            return;
        } else {
            setError("")
            login()
            return
        }

    }

    return (
        <>
            <StatusBar backgroundColor={"#fff"}></StatusBar>

            <ScrollView>
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
                            value={phone}
                            onChangeText={(value) => {
                                setPhone(value)
                            }}

                        />
                        <TextInput
                            placeholder='كلمه المرور'
                            style={styles.textinput}
                            value={pass}
                            onChangeText={(value) => {
                                setPass(value)
                            }}

                        />
                        <Text style={{ fontSize: 10, color: "#f00", fontFamily: "segoe", alignSelf: "flex-start", marginLeft: width * .09 }}>{error}</Text>
                        <View style={{ width: width * .82 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Pass1")}

                            >
                                <Text style={{
                                    color: "#000",
                                    fontFamily: "segoe",
                                    alignSelf: "flex-end",
                                    fontSize: 12
                                }}>نسيت كلمه المرور</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={{
                                ...styles.textinput,
                                backgroundColor: Const.color,
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: height * .05
                            }}
                            onPress={() => checklogin()}
                        >
                            <Text style={{ fontSize: 14, color: "#fff" }}>تسجيل الدخول</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Signup")}

                        >
                            <Text style={styles.text}>انشاء حساب</Text>
                        </TouchableOpacity>

                    </View>
                </View >
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        justifyContent: "space-around",
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
        padding: 10,
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


