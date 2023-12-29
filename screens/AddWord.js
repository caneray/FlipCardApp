import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeStyles from '../styles/HomeStyles';
import AdminStyles from '../styles/AdminStyles';
import "firebase/firestore";
import {firestore} from '../firebase'
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';
import AppStyles from '../styles/AppStyles';
import { KeyboardAvoidingView } from 'react-native-web';

const AddWord = () => {

    let [ingilizce, setIngilizce] = React.useState("");
    let [turkce, setTurkce] = React.useState("");

    let Kaydet = async () => {
        // Firestore'a veri eklemek için bir referans oluşturun
        const wordsRef = await firestore.collection('words');

        // Eklenecek veriyi oluşturun
        const yeniKelime = {
            ingilizce: ingilizce,
            turkce: turkce,
        };

        // Firestore'a veriyi ekleme işlemi
        wordsRef
            .add(yeniKelime)
            .then(() => {
                console.log('Kelime başarıyla eklendi!');
            })
            .catch((error) => {
                console.error('Hata oluştu: ', error);
            });
    };

    return(
        <View style={HomeStyles.home}>
            <Text style={HomeStyles.hosgeldinMesaji}></Text>
            <View style={HomeStyles.sayfa}>
                <View style={AdminStyles.container}>
                    <TextInput
                        style={AdminStyles.inputEkle}
                        placeholder = 'Kelime'
                        value={ingilizce}
                        onChangeText={setIngilizce}
                    />
                    <TextInput
                        style={AdminStyles.inputEkle}
                        placeholder = 'Anlamı'
                        value={turkce}
                        onChangeText={setTurkce}
                    />
                    <View style={[AppStyles.buttonField, AppStyles.topMargin]}>
                        <TouchableOpacity style={AdminStyles.kaydetButton} onPress={Kaydet}>
                            <Text style={AppStyles.lightText}>Kaydet</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
            </View>
        </View>
    );
};
export default AddWord;