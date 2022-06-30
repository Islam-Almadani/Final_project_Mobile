import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from './profile';
import Editprofile from './Editprofile';

const Stack = createStackNavigator();
export default function Profilestack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile}
        initialParams = {{           
           name: "Name",
            age: "16",
            country: "Palestine",
            discription: "Description",
            school: "Code For Palestine",}}
       />
      <Stack.Screen name="EditProfile" component={Editprofile} />
    </Stack.Navigator>
  );
}
