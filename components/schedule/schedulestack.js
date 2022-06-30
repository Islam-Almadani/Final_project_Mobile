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

import Schedule from './schedule';
import ScheduleButton from './Schedulebuttons';
import Button1 from './buttons/button';


const Stack = createStackNavigator();
export default function ScheduleStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Days"
        component={Schedule}
        initialParams={{
          day : '',
        }}
      />
      <Stack.Screen name="Schedule" component={ScheduleButton} />
      <Stack.Screen name="Appointment" component={Button1} initialParams={{
          name : '',
        }}/>

    </Stack.Navigator>
  );
}
