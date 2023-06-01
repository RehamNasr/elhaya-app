
import React, { useContext, useState } from 'react';
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
    const [info, setinfo] = useState({
        name: "",
        phone: "",
        pass: ""
    })
    function isValidEgyptianPhoneNumber(phoneNumber) {
        // regular expression to match Egyptian phone numbers
        const egyptianPhoneNumberRegex = /^01[0-5]\d{8}$/;

        // test if the phone number matches the regex
        return egyptianPhoneNumberRegex.test(phoneNumber);
    }
    const [error, seterror] = useState("")
    const checksignup = () => {
        if (info.name.trim() == "" || info.name.length <= 2) {
            seterror("يجب ادخال الاسم")
            return
        }
        if (!isValidEgyptianPhoneNumber(info.phone)) {
            seterror("يجب ادخال رقم هاتف صحيح")
            return
        }
        if (info.pass.trim().length <= 0) {
            seterror("يجب ادخال كلمه مرور قويه")
            return
        }
        seterror("")
        login()

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
                        <Text style={styles.texttitle}> سجل حساب باستخدام رقم هاتفك

                        </Text>
                    </View>


                    <View style={{
                        height: height * .7,
                        width: width,
                        // backgroundColor: Const.select_color,
                        alignItems: "center",



                    }}>
                        <Image
                            source={require("../images/signup.png")}
                            style={styles.image}
                        >

                        </Image>
                        <TextInput
                            placeholder='الاسم'
                            style={styles.textinput}
                            value={info.name}
                            onChangeText={(value) => {
                                setinfo({ ...info, name: value })
                            }}


                        />

                        <TextInput
                            placeholder='رقم الهاتف'
                            style={styles.textinput}
                            keyboardType='number-pad'
                            value={info.phone}
                            onChangeText={(value) => {
                                setinfo({ ...info, phone: value })
                            }}

                        />
                        <TextInput
                            placeholder='كلمه المرور'
                            style={styles.textinput}
                            value={info.pass}
                            onChangeText={(value) => {
                                setinfo({ ...info, pass: value })
                            }}

                        />


                        <Text style={{ fontSize: 10, color: "#f00", fontFamily: "segoe", alignSelf: "flex-start", marginLeft: width * .09 }}>{error}</Text>

                        <TouchableOpacity
                            style={{
                                ...styles.textinput,
                                backgroundColor: Const.color,
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: height * .05
                            }}
                            onPress={() => checksignup()}

                        >
                            <Text style={{ fontSize: 14, color: "#fff" }}>انشاء حساب</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Login")}

                        >
                            <Text style={styles.text}>تسجيل دخول</Text>
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
        width: width * .5,
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


