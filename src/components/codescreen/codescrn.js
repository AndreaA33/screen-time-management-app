import React, { useState } from "react";
import { StyleSheet, Text, View,ScrollView,SafeAreaView, Button,TextInput,Image } from 'react-native';
import {COLORS , FONT , SIZES} from '../../../constants/themes';
import Inputcomp from "../../page components/inputcomp";
import star from "../../assets/images/Star1.png";
import Buttoncomp from "../../page components/buttoncomp";
import { useNavigation } from "@react-navigation/native";


const Codescrn = () => {

  const navigation = useNavigation();

  const {num, setnum} = useState('');

  const onSubmitPress = () => {
    console.warn("Submit")
  }
  const onGoBackPress = () => {
    navigation.navigate('Login')
  }

  return (
      <View style={styles.container}>
      <View style= {styles.star}>
        <Image source = {star} style = {styles.star}/>
      </View>
      <View style={styles.mainn}>
        <Text style={styles.heading}>ENTER CODE </Text>
        <View style = {styles.inputbox}>
          <Inputcomp type = "sec" value={num} setValue={setnum}/>
          <Inputcomp type = "sec" value={num} setValue={setnum}/>
          <Inputcomp type = "sec" value={num} setValue={setnum}/>
          <Inputcomp type = "sec" value={num} setValue={setnum}/>
        </View>
        <View style = {styles.submain}>
          <Buttoncomp type = "prim" onPress = {onSubmitPress} title = "Submit"/>
          <Buttoncomp txttype = "prim"  onPress = {onGoBackPress} title = "<- Go back"/>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: '#E9EDE8',
        alignItems: 'center',
        justifyContent: 'center',
        height: "115%",
        width: "100%"
    },
    mainn:{
        top: "-14%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputbox:{
      display: "flex",
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    submain: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
    },
    star:{
        right: "9.5%",
        top: "-21.5%"
    },
    heading: {
        padding: 30,
        fontSize: 20,
        fontWeight: "bold",
    }
})

export default Codescrn
