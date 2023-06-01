
import React, { useContext } from 'react';
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

export default function Pass3() {
    const { login } = useContext(AuthContext)
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
                        <Text style={styles.texttitle}>من فضلك أدخل رقم الهاتف الذي
                            استخدمته في التسجيل



                        </Text>
                    </View>


                    <View style={{
                        height: height * .6,
                        width: width,
                        // backgroundColor: Const.select_color,
                        alignItems: "center",



                    }}>
                        <Image
                            source={require("../images/pass3.png")}
                            style={styles.image}
                            resizeMode="center"
                        >

                        </Image>


                        <TextInput
                            placeholder='كلمه المرور الجديده'
                            style={styles.textinput}
                            keyboardType='number-pad'

                        />

                        <TextInput
                            placeholder='تأكيد كلمه المرور'
                            style={styles.textinput}
                            keyboardType='number-pad'

                        />



                        <TouchableOpacity
                            style={{
                                ...styles.textinput,
                                backgroundColor: Const.color,
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: height * .05
                            }}
                            onPress={() => login()}

                        >
                            <Text style={{ fontSize: 14, color: "#fff" }}>تسجيل الدخول</Text>
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


