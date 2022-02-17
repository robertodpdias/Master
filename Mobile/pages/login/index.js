import React from "react";
import Styles from './style';
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import {useFonts,Montserrat_400Regular,Montserrat_500Medium} from '@expo-google-fonts/montserrat';


export default function Login({navigation}){
    const [fontsLoaded] = useFonts({Montserrat_500Medium, Montserrat_400Regular}); 

    return(
        <View style={Styles.page}>
            <View style={Styles.header}>
                <Image style={Styles.logo} source={require('../global/assets/logo.png')}></Image>
            </View>
            <View style={Styles.main}>
                <Text style={Styles.loginText}>Login</Text>
                    <View style={Styles.inputsBox}>
                        <TextInput placeholder={"CPF"} style={Styles.inputs}></TextInput>
                        <TextInput placeholder={"Senha"} style={Styles.inputs}></TextInput>
                    </View>
                <TouchableOpacity style={Styles.loginButton}>Logar</TouchableOpacity>
            </View>
        </View>
    );
}