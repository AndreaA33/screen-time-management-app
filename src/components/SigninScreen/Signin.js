import React, { useState } from "react";
import { StyleSheet, Text, View,ScrollView,SafeAreaView, Button,TextInput,Image } from 'react-native';
import {COLORS , FONT , SIZES} from '../../../constants/themes';
import Inputcomp from "../../page components/inputcomp";
import star from "../../assets/images/Star1.png";
import Buttoncomp from "../../page components/buttoncomp";
import { useNavigation } from "@react-navigation/native";



const Signin = () => {

  const navigation = useNavigation();

  const {name, setname} = useState('');
  const {username, setusername} = useState('');
  const {password, setpassword} = useState('');
  const {passwordagain, setpasswordagain} = useState('');

  const onSigninPress = () => {
    console.warn("Login")
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
          <Text style={styles.heading}>WELCOME</Text>
          <View style = {styles.submain}>
          <Inputcomp type = "prim" placeholder= "name" value={name} setValue={setname}/>
            <Inputcomp type = "prim" placeholder= "email" value={username} setValue={setusername}/>
            <Inputcomp type = "prim" placeholder= "password" value={password} setValue={setpassword} secureTextEntry = {true}/>
            <Inputcomp type = "prim" placeholder= "reat password" value={passwordagain} setValue={setpasswordagain} secureTextEntry = {true}/>
            <Buttoncomp type = "prim" onPress = {onSigninPress} title = "Sign in"/>
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
    top: "-10%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  submain: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  star:{
    right: "9.5%",
    top: "-13.6%"
  },
  heading: {
    padding: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Signin