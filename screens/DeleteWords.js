import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, FlatList, Pressable } from 'react-native';
import FlipCard from 'react-native-flip-card';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { firebase } from '../firebase'

const DeleteWords = () => {
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
                    <TouchableOpacity style={styles.button}> 
                        <Icon name="trash-alt" size={30} color="#ffffff" solid />       
                </TouchableOpacity> 
                </View>
            </View>
          )}
      />
  </View>
 );
};


const styles = StyleSheet.create({
 kutular: {
 
    backgroundColor: '#4fc1e9',
    padding: 15,
    borderRadius: 25, 
    margin: 5,
    marginHorizontal: 10,
    width: 315,
    height: 94,
 },
 innerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
 },
 itemHeading: {
    fontFamily: 'Montserrat-ExtraBold', 
    fontSize: 31,  
    color: 'white'  
 },
 button:{

 },
});

export default DeleteWords;