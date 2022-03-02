import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import Style from "./style";
import GStyle from "../global/style/style.js";
import { StatusBar } from "expo-status-bar";
import md5 from "../global/script/md5";

export default function Login({navigation}){
    
    const json = [
        {text:"CPF", keyboardtype: "number-pad"},
        {text:"Senha",type: "pass"},
    ]

    const [getSenha, setSenha] =  React.useState("");
    const [getCPF, setCPF] =  React.useState("");

    const logar = () => {
        let log = {
            cpf: getCPF,
            senha: md5(getSenha)
        }
        let settings = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(log),
        }
        async function post() {
            let info = await fetch("http://192.168.0.101:3000/login", settings);
            let resp = await info.json();
            return resp;
        }
        post().then(resp=>{
            console.log(resp);
        })
    }

    return(
        <View style={Style.page}>
            <StatusBar hidden={true} />
            <View style={GStyle.header}>
                <Image style={GStyle.image} source={require('../global/assets/logo.png')}/>
            </View>
            <Text style={Style.loginText}>Login</Text>
            <View style={Style.form}>
                {
                    json.map((e,index)=>{
                        let [getStyle, setStyle] = React.useState(GStyle.input);
                        if(e.type == "pass"){
                            return(<TextInput style={getStyle} key={index} placeholderTextColor="#F00" onFocus={()=>{setStyle(GStyle.inputFocus)}} onBlur={()=>{setStyle(GStyle.input)}} onChangeText={(e)=>setSenha(e)} placeholder={e.text} secureTextEntry={true}></TextInput>);
                        }else{
                            return(<TextInput style={getStyle} key={index} placeholderTextColor="#F00" onFocus={()=>{setStyle(GStyle.inputFocus)}} onBlur={()=>{setStyle(GStyle.input)}} onChangeText={(e)=>setCPF(e)} placeholder={e.text} keyboardType={e.keyboardtype}></TextInput>)
                        }
                    })
                }
            </View>
            <TouchableOpacity style={GStyle.button} onPress={()=>logar()}>
                <Text style={GStyle.textButton}>Logar</Text>
            </TouchableOpacity>
        </View>
    );
}