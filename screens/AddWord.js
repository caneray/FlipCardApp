import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeStyles from '../styles/HomeStyles';
import AdminStyles from '../styles/AdminStyles';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';
import AppStyles from '../styles/AppStyles';
import { KeyboardAvoidingView } from 'react-native-web';

const AddWord = () => {

    let [ingilizce, setIngilizce] = React.useState("");
    let [turkce, setTurkce] = React.useState("");

    return(
        <View style={HomeStyles.home}>
            <Text style={HomeStyles.hosgeldinMesaji}>Kelime Ekle</Text>
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
                </View>
            </View>
        </View>
    );
};
export default AddWord;