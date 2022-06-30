import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';

import Profile from       './components/profile/profile';
import Home from          './components/Home/Home';
import Schedule from      './components/schedule/schedule';
import Editprofile from   './components/profile/Editprofile';
import Profilestack from  './components/profile/profilestack';
import HomeStack from     './components/Home/HomeStack';
import ScheduleStack from './components/schedule/schedulestack';



// or any pure javascript modules available in npm
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#EF7B7B',
          inactiveTintColor: '#919190',
          activeBackgroundColor: '#FCF3CA',
          inactiveBackgroundColor: '#FCF3CA',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="Schedule"
          component={ScheduleStack}
          options={{
            tabBarLabel: 'Schedule',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="calendar-month"
                color={color}
                size={size}
              />
            ),
          }}></Tab.Screen>

        
        <Tab.Screen
          name="Profile"
          component={Profilestack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
