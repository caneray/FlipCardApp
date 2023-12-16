import Login from './screens/login';
import SignUp from './screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import Home from './screens/Home';
import Learn from './screens/Learn';
import Favorites from './screens/Favorites';
import LearnedWords from './screens/LearnedWords';
import UnknownWords from './screens/UnknownWords';
const Stack = createNativeStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    'Montserrat-Medium' : require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular' : require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold' : require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-SemiBold' : require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}} />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}} />
        <Stack.Screen 
          name='Learn' 
          component={Learn} 
        />
        <Stack.Screen 
        name='Favorites' 
        component={Favorites} 
        />
        <Stack.Screen 
        name='UnknownWords' 
        component={UnknownWords} 
        />
        <Stack.Screen 
        name='LearnedWords' 
        component={LearnedWords} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}