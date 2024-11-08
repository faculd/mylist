import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS, SIZES, FONTS, COMMON_STYLES } from '../../constants/theme';

interface SignupStyles {
  container: ViewStyle;
  title: TextStyle;
  form: ViewStyle;
  input: ViewStyle;
  inputError: ViewStyle;
  errorText: TextStyle;
  signupButton: ViewStyle;
  signupButtonText: TextStyle;
  loginLink: TextStyle;
}

export const styles = StyleSheet.create<SignupStyles>({
  container: {
    ...COMMON_STYLES.container,
    backgroundColor: COLORS.white,
  },
  title: {
    ...FONTS.title,
    color: COLORS.text.dark,
    marginBottom: 30,
  },
  form: {
    width: '100%',
    maxWidth: SIZES.maxWidth,
  },
  input: {
    ...COMMON_STYLES.input,
  },
  inputError: {
    borderColor: COLORS.error,
    borderWidth: 1,
  },
  errorText: {
    color: COLORS.error,
    fontSize: FONTS.small.fontSize,
    marginTop: -10,
    marginBottom: 10,
    marginLeft: 5,
  },
  signupButton: {
    ...COMMON_STYLES.button,
    marginTop: 10,
  },
  signupButtonText: {
    ...COMMON_STYLES.buttonText,
  },
  loginLink: {
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: 20,
    ...FONTS.body,
  }
});