import React from 'react'; //import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Definição do tipo de navegação
type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Schema de validação
const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('Email é obrigatório'),
});

export default function ForgotPasswordScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleForgotPassword = async (values: { email: string }) => {
    try {
      // Aqui virá a lógica de recuperação de senha real
      console.log('Recuperação de senha para:', values.email);
      Alert.alert('Sucesso', 'Email de recuperação enviado!');
    } catch (error) {
      Alert.alert('Erro', 'Falha ao enviar email de recuperação');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      
      <Formik
        initialValues={{ email: '' }}
        validationSchema={ForgotPasswordSchema}
        onSubmit={handleForgotPassword}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.form}>
            <Text style={styles.description}>
              Digite seu e-mail para receber um link de recuperação de senha
            </Text>

            <TextInput
              style={[
                styles.input,
                touched.email && errors.email ? styles.inputError : null
              ]}
              placeholder="Digite seu email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <TouchableOpacity 
              style={styles.submitButton}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.submitButtonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

// export default function ForgotPasswordScreen() {
//   const [email, setEmail] = useState('');
//   const navigation = useNavigation();

//   const handleSubmit = () => {
//     // Aqui você implementará a lógica de recuperação de senha
//     console.log('Email para recuperação:', email);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Recuperar Senha</Text>
      
//       <Text style={styles.description}>
//         Digite seu e-mail para receber um link de recuperação de senha
//       </Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Digite seu email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//         autoCorrect={false}
//       />

//       <TouchableOpacity 
//         style={styles.submitButton}
//         onPress={handleSubmit}
//       >
//         <Text style={styles.submitButtonText}>Enviar</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }