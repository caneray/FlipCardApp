import { Text, View, TextInput, ImageBackground, Button, KeyboardAvoidingView, Platform, Image, TouchableOpacity, Touchable } from 'react-native';
import AppStyles from '../styles/AppStyles';
import InlineTextButton from '../components/InlineTextButton';
import React from 'react';
import "firebase/firestore";
import { auth, firestore } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { SafeAreaView } from 'react-native-safe-area-context';
import { collection } from 'firebase/firestore';
import { firebase } from '@react-native-firebase/database';
import AdminMenu from './AdminMenu';
import Home from './Home';


export default function Login({ navigation }) {
  // const background = require("../assets/");
  let [errorMessage, setErrorMessage] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");

  let login = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          checkUserRole(user);
          setErrorMessage("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          setErrorMessage(error.message)
        });
    } else {
      setErrorMessage("Kullanıcı adı ve şifre alanı boş geçilemez!");
    }
  };

    const checkUserRole = async (user) => {
      const userID = user.uid;
      const adminsCollection = await firestore.collection('admins').get();
      adminsCollection.forEach(doc => {
        const adminData = doc.data();
        if(adminData.userID === userID) {
          navigation.navigate(AdminMenu);
          return;
        }else{
          navigation.navigate(Home);
        }
      });
      
    };
    
  return (
    <View style={AppStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={60}>
        <Text style={[AppStyles.baslik]}>Giriş Yap</Text>
        <View>
          <Text style={AppStyles.errorText}>{errorMessage}</Text>
        </View>
        <TextInput 
          style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText, AppStyles.placeholder]} 
          placeholder='Mail' 
          placeholderTextColor="#000000"
          
          value={email}
          onChangeText={setEmail} />
        <TextInput 
          style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText, AppStyles.placeholder]} 
          placeholder='Şifre' 
          placeholderTextColor="#000000"
          secureTextEntry={true} 
          value={password} 
          onChangeText={setPassword} />

        <View style={[AppStyles.buttonField, AppStyles.topMargin]}>
          <TouchableOpacity style={AppStyles.loginButton} onPress={login}>
            <Text style={AppStyles.lightText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
        <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
          <Text style={AppStyles.text}>Hesabınız Yok Mu? </Text>
          <InlineTextButton  text="Kaydol" onPress={() => navigation.navigate("SignUp")} />
        </View>
      </KeyboardAvoidingView>
      <View>
      <Image
        source={require('../assets/fca.png')}
        style={{ width: 360, height: 360, marginBottom: -178 }} 
      />
      </View>
    </View>
  );
}


