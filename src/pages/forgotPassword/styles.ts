import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS, SIZES, FONTS, COMMON_STYLES } from '../../constants/theme';

interface ForgotPasswordStyles {
  container: ViewStyle;
  title: TextStyle;
  form: ViewStyle;
  description: TextStyle;
  input: ViewStyle;
  inputError: ViewStyle;
  errorText: TextStyle;
  submitButton: ViewStyle;
  submitButtonText: TextStyle;
}

export const styles = StyleSheet.create<ForgotPasswordStyles>({
  container: {
    ...COMMON_STYLES.container,
    backgroundColor: COLORS.white,
  },
  title: {
    ...FONTS.title,
    color: COLORS.text.dark,
    marginBottom: 20,
  },
  form: {
    width: '100%',
    maxWidth: SIZES.maxWidth,
  },
  description: {
    ...FONTS.body,
    textAlign: 'center',
    marginBottom: 30,
    color: COLORS.text.light,
    paddingHorizontal: SIZES.padding,
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
  submitButton: {
    ...COMMON_STYLES.button,
    marginBottom: 15,
  },
  submitButtonText: {
    ...COMMON_STYLES.buttonText,
  }
});