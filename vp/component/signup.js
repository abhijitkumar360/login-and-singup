import React, { Component } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Alert } from "react-native";
import { Actions } from "react-native-router-flux";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: '',
      passwords: '',
      repassword: ''
    }
  }
  validate = () => {
    const { emails, passwords, repassword } = this.state
    if(emails==''){
      alert('please enter the email feild')
      return false
    }
    else if(passwords==''){
      alert('please enter the password feild')
      return false
    }
    else if(repassword==''){
      alert('please enter the repassword feild')
      return false
    }
    else if(passwords!==repassword){
      alert("re-password don't match ")
      return false
    }
    else {
    fetch('http://192.168.2.116:3001/api/login/user', {
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
      })
      .catch((error) => {
        alert("Error" + error);
      })
    };
    return true
  }

  // makeapi = () => {
  //   if (this.validate()) {
  //     alert('successfuly login')
  //   }
  // }

  login() {
    Actions.login()
  }
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.logintext}>Singup</Text>
        <TextInput style={styles.inputs} placeholder='email'
          onChangeText={(text) => this.setState({ emails: text })} />

        <TextInput style={styles.inputs} placeholder='password' secureTextEntry={true}
          onChangeText={(text) => this.setState({ passwords: text })} />

        <TextInput style={styles.inputs} placeholder='re-password'
          onChangeText={(text) => this.setState({ repassword: text })} />

        <TouchableOpacity onPress={() => this.validate()}>
          <Text style={styles.buttontext}>Singup</Text>
        </TouchableOpacity>

        <View style={styles.line}>
          <Text style={styles.linetext}>Don't have a account?</Text>
          <TouchableOpacity onPress={this.login}><Text style={styles.buttontextsingup}>login</Text></TouchableOpacity>
        </View>
      </View>
    );
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
  line: {
    fontSize: 18,
    flexDirection: 'row'
  },
  buttontext: {
    fontSize: 18,
    paddingHorizontal: 16,
    height: 35,
    width: 90,
    borderRadius: 25,
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)'
  },
  logintext: {
    fontSize: 29
  },
  buttontextsingup: {
    fontSize: 18,
    color: "#FFFFFF"
  },
  linetext: {
    fontSize: 18
  }

})
