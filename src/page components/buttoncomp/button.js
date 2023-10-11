import React, { Component } from 'react'
import { StyleSheet, Text, View,ScrollView,SafeAreaView, Button,TextInput,Image,Pressable } from 'react-native';

const Buttonn = ({title,onPress,type,txttype}) => {
    return (
      <Pressable onPress = {onPress} style = {[styles['buttonn_'+type]]}>
        <Text style = {[styles['txt_'+txttype]]}>{title}</Text>
      </Pressable>
    )
}


const styles = StyleSheet.create({
  buttonn_prim:{
    borderRadius: 20,
    marginVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    width: 225,
    height: 49,
    backgroundColor: "#5A5CE9",
    shadowOpacity: 0.2,
    shadowOffset: {width: 3,height: 3}
  },
  txt_prim:{
    fontSize: 12,
    fontStyle: "normal",
    marginVertical: 9,
    textDecorationLine: 'underline',
    fontWeight: "bold",
  },
  txt_sec:{
    fontSize: 12,
    fontStyle: "normal",
    marginVertical: 30,
    fontWeight: "bold",
  }
})

export default Buttonn
