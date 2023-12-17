import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, } from 'react-native';
import FlipCard from 'react-native-flip-card';
import Icon from 'react-native-vector-icons/FontAwesome5';

const App = () => {
 const screenWidth = Dimensions.get('window').width;

 return (
    <SafeAreaView style={styles.container}>
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
          <Text style={styles.cardText}>Front</Text>
        </View>
        <View style={[styles.cardContent, styles.backCard]}>
          <Text style={styles.cardText}>Back</Text>
        </View>
      </FlipCard>

      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
      <Icon name="check" size={33} color="#178F3F" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Icon name="times" size={33} color="#EE4562" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
      <Icon name="heart" size={30} color="#B145EE" regular/>
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
    backgroundColor: '#FFF9EF'
 },
 card: {
    paddingTop: 77,
    paddingBottom: 77,
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
  backgroundColor: '#80CA64'
 },
 cardText: {
    fontSize: 36,
    color: 'white',
    fontFamily: 'Montserrat-ExtraBold'
 },
 buttonContainer: {
  flexDirection: 'row', // Yatay düzen
  justifyContent: 'space-between', // Butonlar arasında boşluk bırak
  paddingHorizontal: 20, // Yatay kenar boşluğu
  marginBottom: 150
},
button: {
  backgroundColor: '#FFEDB7',
  paddingVertical: 15,
  paddingHorizontal: 20,
  borderRadius: 20,
  margin: 15
},
buttonText: {
  
  fontWeight: 'bold',
},
});

export default App;