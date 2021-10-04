import React, { Component } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text,Alert } from "react-native";
import { Actions } from "react-native-router-flux";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            emails: '',
            passwords: '',
            emailError: '',
            passwordError: ''
        }
    }
    signup() {
        Actions.signup()

    }
    welcome() {
        Actions.welcome()
    }
    submit=()=>{
        const { emails, passwords} = this.state 
        // if(this.state.password=='123' && this.state.email=='abhijit@gmail.com'){
        //     Actions.welcome()
        // }
        // else{
        //     alert('invalid')
        // }
        fetch('http://192.168.2.116:3001/api/login/login', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emails,
        password: passwords
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson.msg);
        localStorage.setItem('login',JSON.stringify({Login:true,token:result.token}))
        if(responseJson.msg==='Login Successfully'){
        Actions.welcome();
        }

      })
      .catch((error) => {
        alert("Error" + error);
      })
    }
    
    emailvalidater()
    {
        if(this.state.emails=='')
        {
            this.setState({emailError:' email can not be empty'})
        }
        else{
            this.setState({emailError:''})
        }
    }

    passwordvalidater()
    {
        if(this.state.passwords=='')
        {
            this.setState({passwordError:' password can not be empty'})
        }
        else{
            this.setState({passwordError:''})
        }
    }

    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.logintext}>login</Text>
                <TextInput
                    style={styles.inputs}
                    placeholder='email'
                    onBlur={()=>this.emailvalidater()}
                    onChangeText={(text) => this.setState({ emails: text })}
                />
                <Text style={styles.emailError}>{this.state.emailError}</Text>
                <TextInput
                    style={styles.inputs}
                    placeholder='password' secureTextEntry={true}
                    onBlur={()=>this.passwordvalidater()}
                    onChangeText={(text) => this.setState({ passwords: text })}
                />
                <Text style={styles.emailError}>{this.state.passwordError}</Text>
                <TouchableOpacity onPress={()=>{this.submit()}}>
                    <Text style={styles.buttontext}>login</Text>
                </TouchableOpacity>
                
                <View style={styles.line}>
                    <Text style={styles.linetext}>Don't have a account?</Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.buttontextlogin}>Signup</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputs: {
        width: 300,
        borderRadius: 25,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255,255,255,0.3)',
        color: '#ffffff',
        marginVertical: 10
    },
    buttontext: {
        fontSize: 18,
        paddingHorizontal: 16,
        height: 35,
        width: 80,
        borderRadius: 25,
        textAlign: 'center',
        backgroundColor: 'rgba(255,255,255,0.3)'

    },
    logintext: {
        fontSize: 29

    },
    line: {
        fontSize: 20,
        flexDirection: 'row'
    },
    text: {
        color: '#F8F8FF'
    },
    buttontextlogin: {
        fontSize: 18,
        color: "#FFFFFF"
    },
    linetext: {
        fontSize: 18
    },
    emailError:{
          color: '#FF7F7F',
          fontSize: 18
    }

})