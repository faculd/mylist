import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/login';
import ForgotPasswordScreen from '../pages/forgotPassword';
import SignupScreen from '../pages/signup';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen}
          options={{ 
            title: 'Recuperar Senha',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#4a7a42',
          }}
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen}
          options={{ 
            title: 'Criar Conta',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#4a7a42',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}