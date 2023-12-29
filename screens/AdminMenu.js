import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeStyles from '../styles/HomeStyles';
import AdminStyles from '../styles/AdminStyles';
import { useNavigation } from '@react-navigation/native';


const AdminMenu = () => {

  const navigation = useNavigation();

  const navigateToCreate = () => {
    navigation.navigate('AddWord'); 
  };

  const navigateToUpdate = () => {
    navigation.navigate('UpdateWords'); 
  };

  const navigateToDelete = () => {
    navigation.navigate('DeleteWords'); 
  };

  return (
    <View style={HomeStyles.home}>
      <Text style={HomeStyles.hosgeldinMesaji}></Text>
      <View style={HomeStyles.sayfa}>
        <View style={HomeStyles.menuBas}>
          <TouchableOpacity style={AdminStyles.k1} onPress={navigateToCreate}>
            <Text style={HomeStyles.menuText}>Kelime</Text>
            <Text style={HomeStyles.menuText}>Ekle</Text>
          </TouchableOpacity>
        </View>
        <View style={HomeStyles.menuAra}>
          <TouchableOpacity style={AdminStyles.k2} onPress={navigateToUpdate}>
            <Text style={HomeStyles.menuText}>Kelime</Text>
            <Text style={HomeStyles.menuText}>Düzenle</Text>
          </TouchableOpacity>
        </View>
        <View style={HomeStyles.menuSon}>
          <TouchableOpacity style={AdminStyles.k3} onPress={navigateToDelete}>
            <Text style={HomeStyles.menuText}>Kelime</Text>
            <Text style={HomeStyles.menuText}>Sil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AdminMenu;
