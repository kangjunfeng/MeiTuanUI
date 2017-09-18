/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
} from 'react-native';

import Main from './Component/Main/Main';

export default class MeiTuanTest extends Component {

    render() {
        return (
            <Main/>
        );
    }
}

AppRegistry.registerComponent('MeiTuanTest', () => MeiTuanTest);
