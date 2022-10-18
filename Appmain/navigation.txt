import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import firstScreen from './screens/firstScreen';
import secondScreen from './screens/secondScreen';
import thirdScreen from './screens/thirdScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="alignContent" component={firstScreen} />
      <Tab.Screen name="position" component={secondScreen} />
      <Tab.Screen name="justifyContent" component={thirdScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}