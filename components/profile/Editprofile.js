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

export default function Editprofile({ navigation }) {
  const [name, setname] = React.useState('name');
  const [age, setage] = React.useState("");
  const [country, setcountry] = React.useState('');
  const [gender, setgender] = React.useState('');
  const [discription, setdiscription] = React.useState('');
  const [school, setschool] = React.useState('');

  const [text1, onChangeText1] = React.useState('');
  const [text2, onChangeText2] = React.useState('');
  const [text3, onChangeText3] = React.useState('');
  const [text4, onChangeText4] = React.useState('');
  const [text5, onChangeText5] = React.useState('');
  const [text6, onChangeText6] = React.useState('');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#FCF3CA',
        padding: 8,
      }}>
      <FlatList
        data = {[
        {text : text1 , onChange : onChangeText1 , name : 'The New Name:'}, 
        {text : text2 , onChange : onChangeText2 , name : 'The New Age:'}, 
        {text : text3 , onChange : onChangeText3 , name : 'The New Country:'}, 
        {text : text4 , onChange : onChangeText4 , name : 'The New Discription:'}, 
        {text : text5 , onChange : onChangeText5 , name : 'The New School:'},]} 
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={styles.paragraph}>{item.name}</Text>
              <TextInput
              style={styles.input}
              onChangeText={item.onChange}
              value={item.text}
              />
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        onPress={() => {
        
          navigation.navigate('Profile', {
            name: text1,
            age: text2,
            country: text3,
            discription: text4,
            school: text5,
          });
        }}
        style={{
          borderWidth: 2,
          margin: 8,
          marginTop: 8,
          borderRadius: 5,
          padding: 10,
          paddingLeft: 5,
          marginRight: 210,
          textAlign: 'center',
          alignSelf: 'flex-end',
          justifyContent: 'center',
          paddingRight: 5,
          borderColor: '#EF7B7B',
          backgroundColor: '#EF7B7B',
        }}>
        <Text> Save Changes </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    paddingLeft : 8,
    borderColor: '#EF7B7B',
    color: 'Black',
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'auto',
    color: '#919190',
  },
});
