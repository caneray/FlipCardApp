import { Text, View, TextInput, Image, Button, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import AppStyles from '../styles/AppStyles';
import InlineTextButton from '../components/InlineTextButton';
import React from 'react';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUp({ navigation }) {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [confirmPassword, setConfirmPassword] = React.useState("");
  let [validationMessage, setValidationMessage] = React.useState("");

  let validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setValidationMessage("Şifreler eşleşmedi!");
    } else {
      setValidationMessage("");
    }

    setValue(value);
  };

  let signUp = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser);
        navigation.navigate("ToDo", { user: userCredential.user });
      })
      .catch((error) => {
        setValidationMessage(error.message);
      });
    }
  }

  return (
    <View style={AppStyles.container } >
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={60}>
        <Text style={[AppStyles.baslik]}>Kayıt Ol</Text>
        <Text style={[AppStyles.errorText]}>{validationMessage}</Text>
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
          onChangeText={(value) => validateAndSet(value, confirmPassword, setPassword)} />
        <TextInput 
          style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText, AppStyles.placeholder]} 
          placeholder='Şifre Tekrar' 
          placeholderTextColor="#000000" 
          secureTextEntry={true} 
          value={confirmPassword} 
          onChangeText={(value) => validateAndSet(value, password, setConfirmPassword)} />
        <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
          <Text style={AppStyles.text}>Zaten bir hesabınız var mı? </Text>
          <InlineTextButton text="Giriş Yap" onPress={() => navigation.popToTop()} />
        </View>
        <View style={[AppStyles.buttonField, AppStyles.topMargin]}>
          <TouchableOpacity style={AppStyles.loginButton} onPress={signUp}>
            <Text style={AppStyles.lightText}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
        {/* <Button title="Kayıt Ol" onPress={signUp} color="#f7b267" /> */}
      </KeyboardAvoidingView>
      <View>
        <Image
          source={require('../assets/fca.png')}
          style={{ width: 360, height: 360, marginBottom: -124 }} 
        />
      </View>
    </View>
  );
}


