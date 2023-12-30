import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FlipCard from 'react-native-flip-card';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { firebase } from '../firebase';

const App = () => {
  const screenWidth = Dimensions.get('window').width;

  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const todoRef = firebase.firestore().collection('words');

  useEffect(() => {
    todoRef.onSnapshot((querySnapshot) => {
      const words = [];
      querySnapshot.forEach((doc) => {
        const { ingilizce, turkce, wordId } = doc.data();
        words.push({
          id: doc.id,
          ingilizce,
          turkce,
          wordId,
        });
      });
      setWords(words);
    });
  }, []);

  const currentUser = firebase.auth().currentUser;

  const FavoriteField = async () => {
    try {
      if (currentUser) {
        const userId = currentUser.uid;

        // Firestore'da belgeyi bulun (favoriler alanı false olan)
        const querySnapshot = await firebase
          .firestore()
          .collection('user-favori')
          .where('favorimi', '==', false)
          .get();
        const userWord = querySnapshot.docs.find(
          (doc) => doc.data().userId === userId
        );

        // Belge varsa, ilk belgeyi alın ve "favoriler" alanını true olarak güncelle
        if (querySnapshot.size > 0 && currentWordIndex < words.length) {
          const documentRef = querySnapshot.docs[0].ref;

          const wordId = words[currentWordIndex].wordId;

          // Belgeyi güncelle
          await documentRef.update({
            favorimi: true,
            userId: userId,
            wordId: wordId,
          });

          console.log('"favorilerim", "userId" ve "wordId" alanları güncellendi.');

          // Bir sonraki kelimeye geç
          setCurrentWordIndex((prevIndex) =>
            prevIndex < words.length - 1 ? prevIndex + 1 : prevIndex
          );

          // Yeni bir belge oluştur (user-words koleksiyonuna)
          const newDocumentRef = await firebase
            .firestore()
            .collection('user-favori')
            .add({
              favorimi: false,
              userId: userId,
              wordId: '', // Boş bir değer veya diğer gerekli alanları ekleyebilirsiniz
            });

          console.log('Yeni belge oluşturuldu:', newDocumentRef.id);
        } else {
          Alert.alert('Uyarı', 'Bu kelime zaten favorilerde.');
        }
      } else {
        console.log('Kullanıcı oturum açmamış.');
      }
    } catch (error) {
      console.error('Güncelleme hatası:', error);
    }
  };

  const UnknownField = async () => {
    try {
      if (currentUser) {
        const userId = currentUser.uid;

        // Firestore'da belgeyi bulun (favoriler alanı false olan)
        const querySnapshot = await firebase
          .firestore()
          .collection('user-bilinmeyen')
          .where('biliniyormu', '==', false)
          .get();
        const userWord = querySnapshot.docs.find(
          (doc) => doc.data().userId === userId
        );

        // Belge varsa, ilk belgeyi alın ve "favoriler" alanını true olarak güncelle
        if (querySnapshot.size > 0 && currentWordIndex < words.length) {
          const documentRef = querySnapshot.docs[0].ref;

          const wordId = words[currentWordIndex].wordId;

          // Belgeyi güncelle
          await documentRef.update({
            biliniyormu: true,
            userId: userId,
            wordId: wordId,
          });

          console.log('"güncelleme başarılı');

          // Bir sonraki kelimeye geç
          setCurrentWordIndex((prevIndex) =>
            prevIndex < words.length - 1 ? prevIndex + 1 : prevIndex
          );

          // Yeni bir belge oluştur (user-words koleksiyonuna)
          const newDocumentRef = await firebase
            .firestore()
            .collection('user-bilinmeyen')
            .add({
              biliniyormu: false,
              userId: userId,
              wordId: '', // Boş bir değer veya diğer gerekli alanları ekleyebilirsiniz
            });

          console.log('Yeni belge oluşturuldu:', newDocumentRef.id);
        } else {
          Alert.alert('Uyarı', 'Bu kelime zaten favorilerde.');
        }
      } else {
        console.log('Kullanıcı oturum açmamış.');
      }
    } catch (error) {
      console.error('Güncelleme hatası:', error);
    }
  };


  const LearnedField = async () => {
    try {
      if (currentUser) {
        const userId = currentUser.uid;

        // Firestore'da belgeyi bulun (favoriler alanı false olan)
        const querySnapshot = await firebase
          .firestore()
          .collection('user-ogrenilen')
          .where('ogrenildimi', '==', false)
          .get();
        const userWord = querySnapshot.docs.find(
          (doc) => doc.data().userId === userId
        );

        // Belge varsa, ilk belgeyi alın ve "favoriler" alanını true olarak güncelle
        if (querySnapshot.size > 0 && currentWordIndex < words.length) {
          const documentRef = querySnapshot.docs[0].ref;

          const wordId = words[currentWordIndex].wordId;

          // Belgeyi güncelle
          await documentRef.update({
            ogrenildimi: true,
            userId: userId,
            wordId: wordId,
          });

          console.log('"güncelleme başarılı');

          // Bir sonraki kelimeye geç
          setCurrentWordIndex((prevIndex) =>
            prevIndex < words.length - 1 ? prevIndex + 1 : prevIndex
          );

          // Yeni bir belge oluştur (user-words koleksiyonuna)
          const newDocumentRef = await firebase
            .firestore()
            .collection('user-ogrenilen')
            .add({
              ogrenildimi: false,
              userId: userId,
              wordId: '', // Boş bir değer veya diğer gerekli alanları ekleyebilirsiniz
            });

          console.log('Yeni belge oluşturuldu:', newDocumentRef.id);
        } else {
          Alert.alert('Uyarı', 'Bu kelime zaten favorilerde.');
        }
      } else {
        console.log('Kullanıcı oturum açmamış.');
      }
    } catch (error) {
      console.error('Güncelleme hatası:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {words.length > 0 && currentWordIndex < words.length && (
        <FlipCard
          style={[styles.card, { width: screenWidth - 50 }]}
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          flip={false}
          onFlipEnd={() => console.log('Card flipped')}
          onFlipStart={() => console.log('Card flip starting')}
          clickable={true}
        >
          <View style={[styles.cardContent, styles.frontCard]}>
            <Text style={styles.cardText}>
              {words[currentWordIndex].ingilizce}
            </Text>
          </View>
          <View style={[styles.cardContent, styles.backCard]}>
            <Text style={styles.cardText}>
              {words[currentWordIndex].turkce}
            </Text>
          </View>
        </FlipCard>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={LearnedField}>
          <Icon name="check" size={33} color="#178F3F" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={UnknownField}>
          <Icon name="times" size={33} color="#EE4562" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={FavoriteField}>
          <Icon name="heart" size={30} color="#B145EE" regular />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF9EF',
  },
  card: {
    flex: 1,
    paddingTop: 57,
    width: 301,
    height: 407,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  frontCard: {
    backgroundColor: '#80CA64',
  },
  backCard: {
    backgroundColor: '#80CA64',
  },
  cardText: {
    fontSize: 36,
    color: 'white',
    fontFamily: 'Montserrat-ExtraBold',
  },
  buttonContainer: {
    flexDirection: 'row', // Yatay düzen
    justifyContent: 'space-between', // Butonlar arasında boşluk bırak
    paddingHorizontal: 20, // Yatay kenar boşluğu
    marginBottom: 150,
  },
  button: {
    backgroundColor: '#FFEDB7',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    margin: 15,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default App;