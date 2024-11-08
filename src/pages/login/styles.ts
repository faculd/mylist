import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS, SIZES, FONTS, COMMON_STYLES } from '../../constants/theme';

interface LoginStyles {
  container: ViewStyle;
  welcomeText: TextStyle;
  loginForm: ViewStyle;
  loginTitle: TextStyle;
  input: ViewStyle;
  inputError: ViewStyle;
  errorText: TextStyle;
  forgotPassword: TextStyle;
  loginButton: ViewStyle;
  loginButtonText: TextStyle;
  divider: ViewStyle;
  dividerText: TextStyle;
  googleButton: ViewStyle;
  googleIcon: ImageStyle;
  googleButtonText: TextStyle;
  signupText: TextStyle;
  signupLink: TextStyle;
}

export const styles = StyleSheet.create<LoginStyles>({
    container: {
        ...COMMON_STYLES.container,
        backgroundColor: COLORS.background,
        width: SIZES.windowWidth,
    },
    welcomeText: {
        color: COLORS.primary,
        fontSize: FONTS.title.fontSize,
        fontWeight: FONTS.title.fontWeight,
        marginBottom: 40,
        textAlign: 'center',
    },
    loginForm: {
        width: '100%',
        maxWidth: SIZES.maxWidth,
        paddingHorizontal: SIZES.padding,
        position: 'relative',
    },
    loginTitle: {
        fontSize: FONTS.subtitle.fontSize,
        color: COLORS.text.dark,
        marginBottom: 20,
        alignSelf: 'flex-start',
    },
    input: {
        ...COMMON_STYLES.input,
        borderColor: COLORS.border,
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
    forgotPassword: {
        alignSelf: 'flex-end',
        fontSize: FONTS.small.fontSize,
        color: COLORS.text.lighter,
        marginTop: 5,
    },
    loginButton: {
        ...COMMON_STYLES.button,
        width: SIZES.windowWidth * 0.8,
        borderRadius: 20,
        marginTop: 20,
        alignSelf: 'flex-start',
    },
    loginButtonText: {
        color: COLORS.white,
        fontSize: FONTS.body.fontSize,
        fontWeight: 'bold',
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    dividerText: {
        color: COLORS.text.lighter,
        fontSize: FONTS.tiny.fontSize,
        textAlign: 'center',
        flex: 1,
    },
    googleButton: {        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',        
        width: SIZES.windowWidth * 0.8,
        padding: 12,
        backgroundColor: COLORS.google,
        borderRadius: 20,
    },
    googleIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    googleButtonText: {
        color: COLORS.text.medium,
        fontSize: FONTS.body.fontSize,
    },
    signupText: {
        fontSize: FONTS.small.fontSize,
        color: COLORS.text.medium,
        marginTop: 40,
        textAlign: 'center',
    },
    signupLink: {
        color: COLORS.primary,
        fontWeight: 'bold',
    },
});