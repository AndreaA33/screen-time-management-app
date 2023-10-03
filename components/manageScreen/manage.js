import React, { Component } from 'react'
import { StyleSheet, Text, View,ScrollView,SafeAreaView, Button,TextInput,Image } from 'react-native';
import { useNavigation, Navigation } from "@react-navigation/native";
import Sidebar from '../../page components/sidebar/sidebar';


const Manage = () => {

  return (
    <View style = {styles.container}>
      <Sidebar/>
    </View>
)
}

const styles = StyleSheet.create({
container: {
display: "flex",
backgroundColor: '#E9EDE8',
height: "115%",
width: "100%"
},
})

export default Manage