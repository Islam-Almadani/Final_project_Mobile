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

import Editprofile from './Editprofile';

export default function Proflie({ navigation, route }) {
  const data = route.params;
  const [name, setname] = useState('Islam Al-Madani');

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.Imagestyle}
        source={require('../pic/pro.png')}
      />
      <Text style={styles.paragraph}>{data.name}</Text>
      <FlatList
      data = {[
        {start : 'Age : ' ,end : data.age },
        {start : 'Country : ' ,end : data.country },
        {start : 'discription : ' ,end : data.discription },
        {start : 'School : ' ,end : data.school },

      ]}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return(
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}> {item.start}</Text>
            <Text style={styles.text}>{item.end}</Text>
          </View>
        )
      }}
      
      
      />
      
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('EditProfile');
        }}
        style={styles.touchableOpacity}>
        <Text> Edit Profile </Text>
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
    margin: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#EF7B7B',
  },
  Imagestyle: {
    width: 100,
    height: 100,
    marginTop: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
  text: {
    margin: 10,
    fontSize: 18,
    color: '#919190',
    alignSelf: 'stretch',
  },
  touchableOpacity: {
    borderWidth: 2,
    margin: 8,
    borderRadius: 5,
    marginTop : 10,
    padding : 8,
    paddingLeft: 5,
    marginRight: 220,
    textAlign: 'center',
    paddingRight: 5,
    borderColor: '#EF7B7B',
    backgroundColor: '#EF7B7B',
    fontWeight: 'bold',
  },
});
