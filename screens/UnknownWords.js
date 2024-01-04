import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, FlatList, Pressable } from 'react-native';
import FlipCard from 'react-native-flip-card';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { firebase, auth, firestore } from '../firebase'

const App = () => {
    const [bilinmeyen, setbilinmeyen] = useState([]);
    const [bilinmeyenKelimeler, setbilinmeyenKelimeler] = useState([]);
    const currentUserId = auth.currentUser.uid;
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const userBilCollection = firestore.collection('user-bilinmeyen').where('userId', '==', currentUserId);
          const snapshot = await userBilCollection.get();
  
          const bilData = [];
          
          snapshot.forEach(doc => {
            bilData.push({ id: doc.id, ...doc.data() });
          });
          const wordIds = bilData.map(item => item.wordId);
  
          const bilinmeyenKelimeler = [];
          for(const wordId of wordIds){
            const wordsCol= firestore.collection('words').where('wordId', '==', wordId);
            const wordsSnapshot = await wordsCol.get();
            wordsSnapshot.forEach(doc => {
                bilinmeyenKelimeler.push({id: doc.id, ...doc.data()})
            });
          }
          setbilinmeyen(bilData);
          setbilinmeyenKelimeler(bilinmeyenKelimeler);
        } catch (error) {
          console.log('Favori belgeleri alınırken bir hata oluştu: ', error);
        }
      };
  
      fetchData();
    }, [currentUserId]);

 return (
  <View style={{ flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF9E9',  }}>
      <FlatList
          style={{marginTop: 30}} 
          data={bilinmeyenKelimeler}
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
