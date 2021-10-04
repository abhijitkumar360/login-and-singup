import React, { Component } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Button } from "react-native";
import { Actions } from "react-native-router-flux";

export default class Welcome extends Component {
    submit(){
        Actions.login()
    }
    render(){
        return(
            <View style={styles.Welcometext}>
                <Text style={styles.Dashboard}>welcome to Dashboard</Text>
            <TouchableOpacity onPress={()=>{this.submit()}}>
                <Text style={styles.buttontext}>logout</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Welcometext:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',

    },
    buttontext: {
        fontSize: 20,
        // paddingHorizontal: 16,
        // height: 35,
        // width: 80,
        // borderRadius: 25,
        textAlign: 'center',
        color:"#841584",
        // backgroundColor: 'rgba(255,255,255,0.3)'
    },
    Dashboard:{
        fontSize:30
    }
})