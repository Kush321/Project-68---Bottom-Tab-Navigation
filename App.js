import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fb from './fb';
import In from './in';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <AppContainer />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Fb: { screen: Fb },
  In: { screen: In }
})

const AppContainer = createAppContainer(TabNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
  },
});