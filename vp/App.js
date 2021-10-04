import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Routes from './component/router';
// import AK from "./component/fetch"

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Routes />
        {/* <Appp /> */}
        {/* <AK/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1
  }

});
