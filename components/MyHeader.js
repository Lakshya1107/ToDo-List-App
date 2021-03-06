import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { View, Text, StyeSheet, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class MyHeader extends Component {
  render() {
    return (
      <Header
        centerComponent = {{
          text: this.props.title,
          style: { color: '#90A5A9', fontSize: 20, fontWeight: 'bold' },
        }}
        backgroundColor = "#eaf8fe"
      />
    );
  }
}