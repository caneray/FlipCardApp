import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { firestore, auth } from '../firebase';

const Favorites = () => {
  const [favori, setFavori] = useState([]);
  const [favoriKelimeler, setFavoriKelimeler] = useState([]);
  const currentUserId = auth.currentUser.uid;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userFavoriCollection = firestore.collection('user-favori').where('userId', '==', currentUserId);
        const snapshot = await userFavoriCollection.get();

        const favoriData = [];
        
        snapshot.forEach(doc => {
          favoriData.push({ id: doc.id, ...doc.data() });
        });
        const wordIds = favoriData.map(item => item.wordId);

        const favoriKelimeler = [];
        for(const wordId of wordIds){
          const wordsCol= firestore.collection('words').where('wordId', '==', wordId);
          const wordsSnapshot = await wordsCol.get();
          wordsSnapshot.forEach(doc => {
            favoriKelimeler.push({id: doc.id, ...doc.data()})
          });
        }
        setFavori(favoriData);
        setFavoriKelimeler(favoriKelimeler);
      } catch (error) {
        console.log('Favori belgeleri alınırken bir hata oluştu: ', error);
      }
    };

    fetchData();
  }, [currentUserId]);


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF9E9' }}>
      <FlatList
        style={{ marginTop: 30 }}
        data={favoriKelimeler}
        numColumns={1}
        renderItem={({ item }) => (
          <View style={styles.kutular}>
            <View style={styles.innerContainer}>
              <Text style={styles.itemHeading}>{item.ingilizce}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  kutular: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B145EE',
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
    color: 'white',
  },
});

export default Favorites;
