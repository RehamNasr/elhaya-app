
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
    TouchableOpacity,
    Linking
} from 'react-native';
const { height, width } = Dimensions.get("screen")
import * as Const from '../Constant/Const'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AuthContext } from './createContext';

export default function Info({ navigation }) {
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
    const { logout } = useContext(AuthContext)
    return (
        <>
            <StatusBar backgroundColor={"#fff"}></StatusBar>

            <View style={styles.Container}>
                <View
                    style={styles.row}
                >
                    <TouchableOpacity>
                        <Ionicons
                            name="ios-notifications"
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 17,
                        color: "#000",
                        fontFamily: "segoe",
                    }}
                    >معلومات عن المعمل
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}

                    >
                        <Ionicons
                            name="chevron-forward"
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
                <Image
                    source={require("../images/logo.png")}
                    style={styles.image}
                >

                </Image>
                <Text style={{
                    fontSize: 16,
                    color: "#000",
                    fontFamily: "segoe",
                    marginTop: -height * .02,
                    marginBottom: height * .04
                }}>معمل الحياه
                </Text>
                <View style={styles.box}>
                    <Text style={styles.header}>نبذه :</Text>
                    <Text style={styles.text}>تم تصميم البرنامج ليساعد في ادراه معامل التحاليل الطبيه
                        من تخزين بيانات المرضي و نتائجهم و طباعتها و البحث عنهم
                        بطريقه سلسلهو القيام بالحسابات  و الاحصائيات الشهريه
                        و السنويه و الحفاظ علي بياناتك من العبث
                        يقوم النظام بكل ذلك بشكل دقيق
                        و فعال أيضا بدون اهدار الوقت </Text>
                </View>
                <View style={{ ...styles.box, flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.header}>تصميم :</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ ...styles.text, width: width * .3 }}> CTA شركه </Text>
                        <Text style={{ ...styles.text, width: width * .3 }}>              م.ريهام نصر      </Text>

                    </View>
                </View>
                <View style={styles.box}>
                    <Text style={styles.header}>للتواصل :</Text>
                    <TouchableOpacity
                    onPress={()=>{
                        Linking.openURL('tel:01158659437');
                    }}
                    >
                        <Text style={styles.text}>01158659437  </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                       onPress={()=>{
                        Linking.openURL('https://www.google.com');
                    }}
                    >
                        <Text style={{ ...styles.text, marginVertical: height * .01 }}>www.Facebook.com/support</Text>
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
        // justifyContent: "center",

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
        borderWidth: .1

    }, box: {
        borderBottomWidth: .2,
        paddingVertical: height * .02,
        borderColor: "#000",
        width: width * .8
    },
    header: {
        fontSize: 18,
        color: "#000",
        fontFamily: "segoe",
        textDecorationLine: "underline",
        marginBottom: height * .01
    },
    text: {
        color: "#000",
        fontFamily: "segoe",
        fontSize: 12,
        width: width * .8

    }, row: {
        height: height * .1,
        width: width * .85,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row-reverse"
    }, icon: {
        fontSize: 20,
        color: "#000"
    }, image: {
        height: height * .15,
        width: width * .34,
        borderRadius: 100,
        marginVertical: height * .04
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
        alignItems: "flex-start"
    },
    section2: {
        height: height * .06,
        width: width * .6,
        // alignItems: "center",
        justifyContent: "center",
        justifyContent: "space-around"
    }
});


