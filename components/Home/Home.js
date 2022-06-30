import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';

export default function Home({ navigation }) {
  const para =
    'There are many advantages that come along with proper management of time. In your professional life, time management can benefit you in the following ways : ';
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        ref={(ref) => {
          this.scrollView = ref;
        }}>
        <Text style={styles.paragraph}>The importance of time management</Text>
        <Image
          style={styles.image}
          source={require('../pic/pic1.png')}></Image>
        <Text style={styles.item1}>{para}</Text>
        <FlatList
          data={[
            { key: '1-Deliver work on time' },
            { key: '2-Provide a better quality of work' },
            { key: '3-More productivity and efficiency' },
            { key: '4-Much less procrastination' },
            { key: '5-Less stress and anxiety' },
          ]}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.key + '\n'} </Text>
          )}
        />
        <View style={styles.viewStyle} />

        <Text style={styles.paragraph}>How to manage your time </Text>
        <Image
          style={styles.image}
          source={require('../pic/pic2.png')}></Image>
        <Text style={styles.item1}>managing time tips :</Text>

        <FlatList
          data={[
            { key: '1-Making and following a task schedule reduces anxiety.' },
            {
              key:
                '2-Good time management gives you extra time to spend in your daily life',
            },
            {
              key:
                '3-Managing time well leads to more opportunities and less time wasted on trivial activities',
            },
            {
              key:
                '4-Individuals who practice good time management are able to better achieve goals and objectives, and do so in a shorter length of time',
            },
          ]}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.key + '\n'} </Text>
          )}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Contact');
          }}
          style={styles.touchableOpacityStyle}>
          <Text> Contact </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FCF3CA',
    padding: 8,
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EF7B7B',
    textAlign: 'center',
  },
  item: {
    fontSize: 18,
    color: '#919190',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  item1: {
    fontSize: 18,
    color: '#EF7B7B',
    fontWeight: 'bold',
    margin: 10,
  },
  viewStyle: {
    height: 2,
    width: '90%',
    backgroundColor: '#EF7B7B',
    alignSelf: 'center',
  },
  touchableOpacityStyle:{
    borderWidth: 2,
    borderRadius: 5,
    padding: 9,
    textAlign: 'center',
    alignSelf: 'center',
    bottom: 5,
    left: 10,
    borderColor: '#EF7B7B',
    backgroundColor: '#EF7B7B',
  },
});
