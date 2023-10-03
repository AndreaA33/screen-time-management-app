import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from "react-redux";
//import {useRouter} from "expo-router";

import Signin from './components/SigninScreen';
import Login from './components/loginScreen';
import Codescreen from './components/codescreen';
import Connected from './components/connectedscreen';
import Devices from './components/devicescreen/devices';
import Manage from './components/manageScreen/manage';
import Setting from './components/settingsScreen/Setting';
import Forgot from './components/Forgotpswdscreen/Forgot';

const Stack = createNativeStackNavigator();

export default function App() {
  //const router  = useRouter();
  return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator screenOptions = {{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="Codescreen" component={Codescreen}/>
        <Stack.Screen name="Connected" component={Connected}/>
        <Stack.Screen name="Forgot" component={Forgot}/>
        <Stack.Screen name="Devices" component={Devices}/>
        <Stack.Screen name="Manage" component={Manage}/>
        <Stack.Screen name="Settings" component={Setting}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
}


const styles = StyleSheet.create({

});
