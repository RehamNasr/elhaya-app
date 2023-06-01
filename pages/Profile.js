
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
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AuthContext } from './createContext';

export default function Profile({ navigation }) {
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
                    source={require("../images/lab.jpg")}
                    style={styles.image}
                >

                </Image>
                <Text style={{
                    fontSize: 16,
                    color: "#000",
                    fontFamily: "segoe",
                    marginTop: -height * .02,
                    marginBottom: height * .04
                }}>ريهام جمال محمد نصر
                </Text>
                {
                    info.map((item, index) => (
                        <View
                            style={styles.section}

                        >
                            <View style={styles.section1}>
                                <Ionicons
                                    name={item.iconname}
                                    style={styles.icon}
                                />
                            </View>
                            <View style={styles.section2}>
                                <Text style={styles.text}>{item.header}</Text>

                                <Text style={{ fontSize: 14, color: "#000", alignSelf: "flex-start", fontFamily: "segoe" }}>{item.text}</Text>
                            </View>
                        </View>
                    ))
                }

                <TouchableOpacity
                    style={styles.section}
                    onPress={()=>{
                        navigation.navigate("Info")
                    }}

                >
                    <View style={styles.section1}>
                        <Ionicons
                            name="ios-information-circle-outline"
                            style={styles.icon}
                        />
                    </View>
                    <View style={styles.section2}>
                        <Text style={{ fontSize: 14, color: "#000",  fontFamily: "segoe" }}>معلومات عن المعمل</Text>
                    </View>
                    <View style={{ ...styles.section1, alignItems: "flex-end" }}>
                        <Ionicons
                            name="chevron-back"
                            style={{ ...styles.icon, fontSize: 12 }}

                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.section}
                    onPress={() => logout()}
                >
                    <View style={styles.section1}>
                        <Ionicons
                            name="exit-outline"
                            style={styles.icon}
                        />
                    </View>
                    <View style={styles.section2}>
                        <Text style={{ fontSize: 14, color: "#000" }}>تسجيل الخروج</Text>

                    </View>
                </TouchableOpacity>
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

    },
    text: {
        color: "#000",
        fontFamily: "segoe",

    }, row: {
        height: height * .1,
        width: width * .85,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection:"row-reverse"
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


