import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import Constants from 'expo-constants';

export default function ScheduleButton({ navigation, route }) {
  const data = route.params;
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, textAlign: 'center', color: 'black' }}>
        {data.day}
      </Text>
      <FlatList
        data={[
          {
            button: 'Tests',
            data: [
              { time: '11:00 AM :', sub: 'arabic' },
              { time: '12:00 PM :', sub: 'English' },
              { time: '01:00 PM :', sub: 'Math' },
            ],
          },
          {
            button: 'Assigments',
            data: [
              { time: '03:00 PM :', sub: 'Write a story' },
              { time: '03:10 PM :', sub: 'Presentation' },
              { time: '03:30 PM :', sub: 'Nothing' },
            ],
          },
          {
            button: 'Meetings',
            data: [
              { time: '05:00 PM :', sub: 'Coding' },
              { time: '06:00 PM :', sub: 'Nothing' },
              { time: '07:00 AM :', sub: 'Design Thinking' },
            ],
          },
          {
            button: 'Dates',
            data: [
              { time: '08:00 PM :', sub: 'Visiting grandma' },
              { time: '08:30 PM :', sub: 'Go to the sea' },
              { time: '09:40 AM :', sub: 'Nothing' },
            ],
          },
        ]}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Appointment', {
                    dates: item.data,
                    name : item.button,
                  });
                }}>
                <Text style={styles.text}>{item.button}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF3CA',
    padding: 8,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 15,
    padding: 10,
    color: '#919190',
    borderColor: '#EF7B7B',
    borderWidth: 3,
    paddingLeft: 5,
    borderRadius: 5,
  },
});
