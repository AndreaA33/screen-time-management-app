import React, { useState } from "react";
import { StyleSheet, Text, View,ScrollView,SafeAreaView, Button,TextInput,Image } from 'react-native';
import {COLORS , FONT , SIZES} from '../../constants/themes';
import Inputcomp from "../../page components/inputcomp";
import star from "../../assets/images/Star1.png";
import Buttoncomp from "../../page components/buttoncomp";
import { useNavigation } from "@react-navigation/native";
import {useForm, Controller} from "react-hook-form"




const Login = () => {

  const navigation = useNavigation();
  const {username, setusername} = useState('');
  const {password, setpassword} = useState('');
  const {control, handleSubmit} = useForm();


  const onLoginPress = () => {
    console.warn("Login")
    navigation.navigate('Devices')
  }
  const onNewherPress = () => {
    navigation.navigate('Signin')
  }
  const onConnectPress = () => {
    navigation.navigate('Codescreen')
  }
  const onForgotPress = () => {
    console.warn("")
    navigation.navigate('Forgot')
  }


  return (
      <View style={styles.container}>
        <View style= {styles.star}>
          <Image source = {star} style = {styles.star}/>
        </View>
        <View style={styles.mainn}>
          <Text style={styles.heading}>WELCOME </Text>
          <View style = {styles.submain}>

            <Inputcomp type = "prim" placeholder= "email" value={username} setValue={setusername}  name = "email"/>
            <Inputcomp type = "prim" placeholder= "password" value={password} setValue={setpassword} secureTextEntry = {true}/>
            <Buttoncomp type = "prim" onPress = {onLoginPress} title = "Login"/>
            <Buttoncomp txttype = "prim"  onPress = {onNewherPress} title = "New here? Create an account"/>
            <Buttoncomp txttype = "prim"  onPress = {onConnectPress} title = "Want to connect device? Click here"/>
            <Buttoncomp txttype = "prim"  onPress = {onForgotPress} title = "Forgot password"/>
          </View>
        </View>
      </View>

  );
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
    justifyContent: 'center',
  },
  submain: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  star:{
    right: "9.5%",
    top: "-18%"
  },
  heading: {
    padding: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Login