import React, { useState } from "react";
import { StyleSheet, Text, View,ScrollView,SafeAreaView, Button,TextInput,Image } from 'react-native';
import {COLORS , FONT , SIZES} from '../../constants/themes';
import Inputcomp from "../../page components/inputcomp";
import star from "../../assets/images/Star1.png";
import Buttoncomp from "../../page components/buttoncomp";
import { useNavigation } from "@react-navigation/native";

const Connected = () => {

    const navigation = useNavigation();

    const onDisconnectPress = () => {
        console.warn("Disconnect")
    }
    return (
        <View style = {styles.main}>
            <View style= {styles.star}>
            <Image source = {star} style = {styles.star}/>
            </View>
            <View style = {styles.submain}>
            <Text style = {styles.txt} >THIS DEVICE IS CONNECTED TO Name IPHONE  </Text>
            <Buttoncomp txttype = "prim" onPress = {onDisconnectPress} title = "Want to disconnect? Request disconnection"/>
            </View>
        </View>

  )
}

const styles = StyleSheet.create({
    mian:{
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
    },
    submain:{
        top: "20%",
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    txt:{
        fontSize: 32,
        fontStyle: "normal",
        marginVertical: 9,
        fontWeight: "bold",
        textAlign: "center"
    },
    star:{
        right: "0%",
        top: "0%"
      },


})

export default Connected
