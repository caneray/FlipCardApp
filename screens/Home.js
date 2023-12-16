import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AppStyles from '../styles/AppStyles';
import HomeStyles from '../styles/HomeStyles';
import { useNavigation } from '@react-navigation/native';
import Learn from './Learn';


const HomeScreen = () => {

  const navigation = useNavigation();

  const navigateToLearn = () => {
    navigation.navigate('Learn'); // 'LearnScreen' yerine gidilecek ekranın adını belirtin
  };

  const navigateToFavorites = () => {
    navigation.navigate('Favorites'); // 'FavoritesScreen' yerine gidilecek ekranın adını belirtin
  };

  const navigateToUnknownWords = () => {
    navigation.navigate('UnknownWords'); // 'UnknownWordsScreen' yerine gidilecek ekranın adını belirtin
  };

  const navigateToLearnedWords = () => {
    navigation.navigate('LearnedWords'); // 'LearnedWordsScreen' yerine gidilecek ekranın adını belirtin
  };

  return (
    <View style={HomeStyles.home}>
      <Text style={HomeStyles.hosgeldinMesaji}>Hoş Geldin!</Text>
      <View style={HomeStyles.sayfa}>
        <View style={HomeStyles.menuBas}>
          <TouchableOpacity style={HomeStyles.k1} onPress={navigateToLearn}>
            <Text style={HomeStyles.menuText}>Öğrenmeye</Text>
            <Text style={HomeStyles.menuText}>Başla!</Text>
          </TouchableOpacity>
        </View>
        <View style={HomeStyles.menuAra}>
          <TouchableOpacity style={HomeStyles.k2} onPress={navigateToFavorites}>
            <Text style={HomeStyles.menuText}>Favori</Text>
            <Text style={HomeStyles.menuText}>Kelimelerim</Text>
          </TouchableOpacity>
        </View>
        <View style={HomeStyles.menuAra}>
          <TouchableOpacity style={HomeStyles.k3} onPress={navigateToUnknownWords}>
            <Text style={HomeStyles.menuText}>Bilmediğim</Text>
            <Text style={HomeStyles.menuText}>Kelimeler</Text>
          </TouchableOpacity>
        </View>
        <View style={HomeStyles.menuSon}>
          <TouchableOpacity style={HomeStyles.k4} onPress={navigateToLearnedWords}>
            <Text style={HomeStyles.menuText}>Öğrendiğim</Text>
            <Text style={HomeStyles.menuText}>Kelimeler</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
