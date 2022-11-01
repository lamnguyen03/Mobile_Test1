import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import myProfile from './screens/myProfile';
import productDetail from './screens/productDetail';
import categoryListing from './screens/categoryListing';



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Category Listing" component={categoryListing} />
      <Tab.Screen name="Product Detail" component={productDetail} />
      <Tab.Screen name="My Profile" component={myProfile} />
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