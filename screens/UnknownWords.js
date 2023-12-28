import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, FlatList, Pressable } from 'react-native';
import FlipCard from 'react-native-flip-card';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { firebase } from '../firebase'

const App = () => {
 const [words, setUsers] = useState([]);
 const todoRef = firebase.firestore().collection('words');

 useEffect(async () => {
     todoRef
     .onSnapshot(
         querySnapshot => {
             const words = []
             querySnapshot.forEach((doc) => {
                 const {ingilizce} = doc.data()
                 words.push({
                     id: doc.id,
                     ingilizce,

                 })
             })
             setUsers(words)
         }
     )
 }, [])

 return (
  <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF9E9',  }}>
      <FlatList
          style={{marginTop: 30}} 
          data={words}
          numColumns={1}
          renderItem={({item}) =>(
          <View style={styles.kutular}>
                <View style={styles.innerContainer}>
                    <Text style={styles.itemHeading}>{item.ingilizce}</Text>
                </View>
            </View>
          )}
      />
  </View>
 );
};


const styles = StyleSheet.create({
 kutular: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ee4562',
    padding: 15,
    borderRadius: 25, 
    margin: 5,
    marginHorizontal: 10,
    width: 315,
    height: 94,
 },
 innerContainer: {
    alignItems: 'center',
 },
 itemHeading: {
    fontFamily: 'Montserrat-ExtraBold', 
    fontSize: 32,
    color: 'white' 
 },
});

export default App;
