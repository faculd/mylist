import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Formik } from "formik";
import * as Yup from "yup";
import { styles } from "./styles";
import { COLORS } from "../../constants/theme";
import { useGoogleSignIn } from "../../services/auth";

// Definição do tipo de navegação
type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Schema de validação
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  password: Yup.string()
    .min(6, "Senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
});

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useGoogleSignIn();

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      // Aqui virá a lógica de autenticação real
      console.log("Login:", values);
      Alert.alert("Sucesso", "Login realizado com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Falha ao realizar login");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      const response = await signIn();
      console.log('Google Auth Response:', response);
      
      // Aqui você implementará:
      // 1. Envio do token para seu backend
      // 2. Criação/atualização do usuário
      // 3. Redirecionamento
      
      Alert.alert('Sucesso', 'Login com Google realizado!');
    } catch (error: any) {
      Alert.alert('Erro', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem-vindo ao Trevis!</Text>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.loginForm}>
            <Text style={styles.loginTitle}>Entrar</Text>

            <TextInput
              style={[
                styles.input,
                touched.email && errors.email ? styles.inputError : null,
              ]}
              placeholder="Digite seu email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <TextInput
              style={[
                styles.input,
                touched.password && errors.password ? styles.inputError : null,
              ]}
              placeholder="Digite sua senha"
              secureTextEntry={!showPassword}
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <TouchableOpacity
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => handleSubmit()}
              disabled={isLoading}
            >
              <Text style={styles.loginButtonText}>
                {isLoading ? "Carregando..." : "Acessar"}
              </Text>
            </TouchableOpacity>

            <View style={styles.divider}>
              <Text style={styles.dividerText}>ou</Text>
            </View>

            <TouchableOpacity 
              style={styles.googleButton}
              onPress={handleGoogleSignIn}
              disabled={isLoading}
            >
              <Image
                source={require("../../../assets/logo_google_48.png")}
                style={styles.googleIcon}
              />
              <Text style={styles.googleButtonText}>
                {isLoading ? "Carregando..." : "Entrar com o Google"}
              </Text>
            </TouchableOpacity>

            <Text style={styles.signupText}>
              Ainda não possui uma conta?{" "}
              <Text
                style={styles.signupLink}
                onPress={() => navigation.navigate("Signup")}
              >
                Cadastre-se
              </Text>
            </Text>
          </View>
        )}
      </Formik>
    </View>
  );
}