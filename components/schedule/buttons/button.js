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
  SafeAreaView,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';

export default function Button1({route}) {
  const data = route.params;
  const {dates} = route.params;
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>{data.name}</Text>
      <FlatList
        data={dates}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.text}> {item.time}</Text>
              <Text style={styles.text}>{item.sub}</Text>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={styles.touchableOpacity}>
        <Text> Add {data.name} </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FCF3CA',
    padding: 8,
  },
  paragraph: {
    marginBottom: 15,

    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#EF7B7B',
  },
  text: {
    margin: 8,
    fontSize: 24,
    color: '#919190',
    alignSelf: 'stretch',
  },
  touchableOpacity: {
    borderWidth: 2,
    margin: 8,
    borderRadius: 5,
    padding : 10 ,
    paddingLeft: 5,
    textAlign: 'center',
    alignSelf: 'center',
    bottom: 10,
    left: 10,
    paddingRight: 5,
    borderColor: '#EF7B7B',
    backgroundColor: '#EF7B7B',
    fontWeight: 'bold',
  },
});
