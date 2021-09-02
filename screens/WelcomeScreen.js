import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { Icon } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader';

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <MyHeader title="ToDo List App" />
        <View
          style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.text}>
            This is an app to make a tasks list to remember your ToDo things
          </Text>
          <View style={{ flex: 0.3 }}>
            <Image
              style={styles.image}
              source={require('../assets/todolist.png')}
              resizeMode={'stretch'}
            />
          </View>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => {
              this.props.navigation.navigate('TasksScreen');
            }}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6fc0b8',
  },
  continueButton: {
    width: '75%',
    height: RFValue(50),
    marginTop: RFValue(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(3),
    backgroundColor: '#32867d',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 400,
  },
  continueButtonText: {
    fontSize: RFValue(23),
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: '#32867d',
    marginTop: 300,
  },
  image: {
    width: 300,
    height: RFValue(320),
    marginTop: 50
  },
});
