import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Tabs from './navigation/Tabs';
import PlantDetail from './screens/PlantDetail';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Tabs}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="PlantDetail"
          component={PlantDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
