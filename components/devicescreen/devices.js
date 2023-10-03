import React, { Component } from 'react'
import { StyleSheet, Text, View,ScrollView,SafeAreaView, Button,TextInput,Image } from 'react-native';
import { useNavigation, Navigation } from "@react-navigation/native";
import Sidebar from '../../page components/sidebar/sidebar';
import STcontainer from '../../page components/screentimecontainer/STcontainer';

const Devices = () => {
    return (
      <View style = {styles.container}>
        <View style = {styles.Sidebar}>
          <Sidebar/>
        </View>
        <View style = {styles.main}>
            <Text style={styles.heading} >WELCOME BACK </Text>
            <View style = {styles.ST}>
              <STcontainer/>
            </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#FFFFFF',
    height: "100%",
    width: "80%",
    flexDirection: "row",
    borderRadius: 15,
  },
  main: {
    display: "flex",
    backgroundColor: '#E9EDE8',
    height: "100%",
    width: "100%",
    borderRadius: 40,
  },
  heading: {
    padding: 30,
    fontSize: 20,
    fontWeight: "bold",
    top: "2%"
  },
  Sidebar: {
    left: "0%",
  },
  ST: {
    top: "10%",
    alignItems: 'center',
    justifyContent: 'center',
  } 
})

export default Devices
