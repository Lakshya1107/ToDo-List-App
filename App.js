import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import TasksScreen from './screens/TasksScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return <AppContainer />;
}

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  TasksScreen: TasksScreen,
});

const AppContainer = createAppContainer(SwitchNavigator);