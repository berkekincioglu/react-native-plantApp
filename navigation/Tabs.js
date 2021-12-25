import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {icons, COLORS} from '../constants/index';

const Tab = createBottomTabNavigator();

const Test1 = () => {
  return (
    <View>
      <Text>Test 1</Text>
    </View>
  );
};
const Test2 = () => {
  return (
    <View>
      <Text>Test 2</Text>
    </View>
  );
};
const Test3 = () => {
  return (
    <View>
      <Text>Test 3 test</Text>
    </View>
  );
};
const Test4 = () => {
  return (
    <View>
      <Text>Test 4</Text>
    </View>
  );
};
const Test5 = () => {
  return (
    <View>
      <Text>Test 5</Text>
    </View>
  );
};
const CameraButton = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.primary,
      }}>
      <Image
        source={icons.camera}
        resizeMode="contain"
        style={{width: 23, height: 23}}
      />
    </View>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          height: '10%',
        },
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;
          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={icons.flash}
                  resizeMode="contain"
                  style={{tintColor, width: 25, height: 25}}
                />
              );
            case 'Box':
              return (
                <Image
                  source={icons.cube}
                  resizeMode="contain"
                  style={{tintColor, width: 25, height: 25}}
                />
              );
            case 'Camera':
              return <CameraButton />;
            case 'Search':
              return (
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{tintColor, width: 25, height: 25}}
                />
              );
            case 'Favorite':
              return (
                <Image
                  source={icons.heart}
                  resizeMode="contain"
                  style={{tintColor, width: 25, height: 25}}
                />
              );
          }
        },
      })}>
      <Tab.Screen
        options={{headerShown: false}}
        name="Home"
        component={Test1}
      />
      <Tab.Screen options={{headerShown: false}} name="Box" component={Test5} />
      <Tab.Screen
        options={{headerShown: false}}
        name="Camera"
        component={Test2}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Search"
        component={Test3}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Favorite"
        component={Test4}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
