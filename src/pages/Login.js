import React, {useState, useEffect} from "react";
import {WebView, View, AsyncStorage, KeyboardAvoidingView, Platform, Image, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";

import api from '../services/api';
//logo no topo da página
import logo from "../assets/logo.png";

export default function Login({ navigation }) {
    return (
<WebView
        source={{uri: 'https://www.supersaas.com.br/schedule/Fernando_Nascimento/Calend%C3%A1rio_de_Reuni%C3%B5es_M&M'}}
        style={{marginTop: 25}}
      />
    );
}