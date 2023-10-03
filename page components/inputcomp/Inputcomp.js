import React from "react";
import { StyleSheet, Text, View,ScrollView,SafeAreaView, Button,TextInput } from 'react-native';
import {Controller} from "react-hook-form"


const Inputcomp = ({control, name, placeholder,secureTextEntry,type,value,onChange}) => {

  return (
    <View>
        <TextInput style = {[styles.input, styles['input_'+type]]} value = {value} onChangeText = {onChange} placeholder  = {placeholder} secureTextEntry = {secureTextEntry}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#D9D9D9",
  },
  input_prim:{
    paddingHorizontal: 10,
    width: 229,
    height: 42,
    marginVertical: 13,
    borderRadius: 15,
  },
  input_sec:{
    paddingHorizontal: 10,
    width: 60,
    height: 61,
    marginHorizontal: 13,
    marginVertical: 17,
    borderRadius: 15,
  },
});

export default Inputcomp

var type = "me";
var neww = "hi"
console.log(type+ neww)