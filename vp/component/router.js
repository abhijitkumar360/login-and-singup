import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import Login from './login';
import Signup from './signup';
import Welcome from "./welcome";

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Stack key='root' hideNavBar={true}>
                    <Scene key='login' component={Login} title='Login' initial={true} />
                    <Scene key='signup' component={Signup} title='Signup' />
                    <Scene key='welcome' component={Welcome} title='welcome' />
                </Stack>
            </Router>
        );
    }
}