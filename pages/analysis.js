



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



export default function analysis({ navigation }) {

    const FirstRoute = () => (
        <Analysis1 />
    );

    const SecondRoute = () => (
        <Analysis2 />
    );
    // const layout = useWindowDimensions();


    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,

    });
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'جميع التحاليل' },
        { key: 'second', title: 'التحاليل غير المنتهيه ' },
    ]);
    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: Const.color }}
            style={{ backgroundColor: "#fff", elevation: 0, borderBottomWidth: .2, width: width, alignSelf: "center", borderColor: "#aaa" }}
            activeColor={"#000"}
            inactiveColor={"#aaa"}
            renderLabel={({ route, focused, color }) => (
                <View >
                    <Text style={{ color, fontSize: 12, fontFamily: "Almarai-Regular" }}>
                        {route.title}
                    </Text>
                </View>
            )}
        />
    );
    return (
        <>
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
                    <Text style={styles.textheader}>التحاليل</Text>
                    <TouchableOpacity>
                        <Ionicons
                            name="ios-notifications"
                            style={{ ...styles.icon, color: "#fff" }}
                        />
                    </TouchableOpacity>

                </View>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: width }}
                    renderTabBar={renderTabBar}
                />


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
        alignItems: "center"
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
        flexDirection: "row-reverse"

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