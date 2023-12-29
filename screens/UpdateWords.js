import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import HomeStyles from '../styles/HomeStyles';
import AdminStyles from '../styles/AdminStyles';
import "firebase/firestore";
import {firestore} from '../firebase'
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AppStyles from '../styles/AppStyles';
import { SelectList } from 'react-native-dropdown-select-list'

const UpdateWords = ({ navigation }) => {

    const [filteredWords, setFilteredWords] = useState([]);
    const [allWords, setAllWords] = useState([]);
    const [selected, setSelected] = React.useState("");
    let [ingilizce, setIngilizce] = React.useState("");
    let [turkce, setTurkce] = React.useState("");
    const [selectedEnglish, setSelectedEnglish] = useState('');
    const [selectedTurkish, setSelectedTurkish] = useState('');


    const data = [formattedWords];

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const wordsSnapshot = await firestore.collection('words').get();
                const fetchedWords = wordsSnapshot.docs.map(doc => ({ 
                    id: doc.data().wordId,
                    ingilizce: doc.data().ingilizce, 
                    turkce: doc.data().turkce,
                    key: doc.id
                 }));
                setAllWords(fetchedWords);
                setFilteredWords(fetchedWords);

                console.log('allWords:', allWords);
            } catch (error) {
                console.error('Kelime alınırken hata oluştu:', error);
            }
        };

        fetchWords();
    }, []);

    let guncelle = async () => {
        try {
          const selectedWordData = allWords.find(word => word.ingilizce === selectedEnglish);
          if (selectedWordData) {
            const docId = selectedWordData.key; // Firestore belgesinin ID'si
            await firestore.collection('words').doc(docId).update({
              ingilizce: selectedEnglish,
              turkce: selectedTurkish,
            });
            console.log('Kelime güncellendi:', selectedEnglish);
          } else {
            console.log('Güncellenecek kelime bulunamadı.');
          }
        } catch (error) {
          console.error('Kelime güncellenirken hata oluştu:', error);
        }
      };
      

    const handleSelection = (value) => {
        setSelected(value); // Seçilen kelimeyi state'e atama
        // Firestore'dan ilgili kelimenin ingilizce ve turkce alanlarını çekme
        console.log('seçilen kelimenin idsi:', value);
        const selectedWordData = allWords.find(word => word.ingilizce.toString() === value);
        console.log('seçilen kelimenin verisi: ', selectedWordData);
        if (selectedWordData) {
          setSelectedEnglish(selectedWordData.ingilizce);
          setSelectedTurkish(selectedWordData.turkce);
        }
      };
    
    const formattedWords = allWords.map(word => ({
        label: word.id.toString(),
        value: word.ingilizce,
        key: word.id.toString()
    }))

    //console.log('formatted:', formattedWords)

    return(
        <View style={HomeStyles.home}>
            <Text style={HomeStyles.hosgeldinMesaji}></Text>
            <View style={HomeStyles.sayfa}>
                <View style={[AppStyles.buttonField, AppStyles.topMargin, AdminStyles.container]}>
                    <SelectList 
                        setSelected={handleSelection} 
                        data={formattedWords} 
                        save="value"
                        dropdownTextStyles={AdminStyles.dropdownTextStyles}
                        boxStyles={AdminStyles.boxStyles}
                        dropdownStyles={AdminStyles.dropdownStyles}
                        inputStyles={AdminStyles.inputStyles}
                        searchPlaceholder="Ara"
                        placeholder	="Kelime Seç"
                        
                    />
                    <TextInput
                        style={AdminStyles.inputGuncelle}
                        placeholder = 'Kelime'
                        value={selectedEnglish}
                        onChangeText={text => setSelectedEnglish(text)}
                    />
                    <TextInput
                        style={AdminStyles.inputGuncelle}
                        placeholder = 'Anlamı'
                        value={selectedTurkish}
                        onChangeText={text => setSelectedTurkish(text)}
                    />
                    <TouchableOpacity style={AdminStyles.guncelleButton} onPress={guncelle}>
                        <Text style={AppStyles.lightText}>Güncelle</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    );
};
export default UpdateWords;