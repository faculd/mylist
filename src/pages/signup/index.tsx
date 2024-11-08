import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { styles } from './styles';

// Definição do tipo de navegação
type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Schema de validação
const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Nome completo é obrigatório'),
  email: Yup.string()
    .email('Email inválido')
    .required('Email é obrigatório'),
  password: Yup.string()
    .min(6, 'Senha deve ter pelo menos 6 caracteres')
    .required('Senha é obrigatória'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'As senhas devem corresponder')
    .required('Confirmação de senha é obrigatória'),
});

export default function SignupScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleSignup = async (values: { fullName: string; email: string; password: string }) => {
    try {
      // Aqui virá a lógica de cadastro real
      console.log('Cadastro:', values);
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Falha ao realizar cadastro');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <Formik
        initialValues={{ fullName: '', email: '', password: '', confirmPassword: '' }}
        validationSchema={SignupSchema}
        onSubmit={handleSignup}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.form}>
            <TextInput
              style={[
                styles.input,
                touched.fullName && errors.fullName ? styles.inputError : null
              ]}
              placeholder="Nome completo"
              autoCapitalize="words"
              value={values.fullName}
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
            />
            {touched.fullName && errors.fullName && (
              <Text style={styles.errorText}>{errors.fullName}</Text>
            )}

            <TextInput
              style={[
                styles.input,
                touched.email && errors.email ? styles.inputError : null
              ]}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <TextInput
              style={[
                styles.input,
                touched.password && errors.password ? styles.inputError : null
              ]}
              placeholder="Senha"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <TextInput
              style={[
                styles.input,
                touched.confirmPassword && errors.confirmPassword ? styles.inputError : null
              ]}
              placeholder="Confirmar senha"
              secureTextEntry
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}

            <TouchableOpacity 
              style={styles.signupButton}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.signupButtonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginLink}>Já possui uma conta? Faça login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}