import React, { useState } from "react";
import { StyleSheet, Text, View,ScrollView,SafeAreaView, Button,TextInput,Image } from 'react-native';
import Buttoncomp from "../../page components/buttoncomp";
import { useNavigation } from "@react-navigation/native";

const Sidebar = () => {

    const navigation = useNavigation();

    const onDevicesPress = () => {
        navigation.navigate('Devices')
      }
      const onManagePress = () => {
        navigation.navigate('Manage')
      }
      const onBlockedPress = () => {
        navigation.navigate('Blocked')
      }
      const onSetingsPress = () => {
        navigation.navigate('Settings')
      }

    return (
        <View style = {styles.container}>
            <View style = {styles.mian}>
                <Buttoncomp txttype = "sec" onPress =  {onDevicesPress} title = "DEVICES"/>
                <Buttoncomp txttype = "sec"  onPress = {onManagePress} title = "MANAGE"/>
                <Buttoncomp txttype = "sec"  onPress = {onBlockedPress} title = "BLOCKED"/>
                <Buttoncomp txttype = "sec"  onPress = {onSetingsPress} title = "SETTINGS"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        width: 81,
        height: "100%",
        top: 0,
    },
    mian: {
        marginVertical: 200,
        alignItems: 'center',
        justifyContent: 'center',

    }
})

export default Sidebar
