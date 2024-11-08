import { ViewStyle, TextStyle, Dimensions } from 'react-native';

export const COLORS = {
  // Cores principais
  primary: '#4a7a42',
  primaryLight: '#6ba562',
  primaryDark: '#385831',

  // Cores de fundo
  background: '#f4f4f4',
  white: '#fff',

  // Textos
  text: {
    dark: '#333',
    medium: '#555',
    light: '#666',
    lighter: '#888',
  },

  // Estados
  success: '#4CAF50',
  error: '#f44336',  // Certifique-se de que esta linha está presente
  warning: '#ff9800',
  info: '#2196F3',

  // Elementos de UI
  border: '#ddd',
  google: '#e0e0e0',
  divider: '#e0e0e0',
};

export const SIZES = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height,
  padding: 20,
  borderRadius: 8,
  buttonHeight: 50,
  maxWidth: 400,
};

export const FONTS: { [key: string]: TextStyle } = {
  title: {
      fontSize: 24,
      fontWeight: 'bold' as const,
  },
  subtitle: {
      fontSize: 18,
  },
  body: {
      fontSize: 16,
  },
  small: {
      fontSize: 14,
  },
  tiny: {
      fontSize: 12,
  },
};


type CommonStylesType = {
    container: ViewStyle;
    input: ViewStyle;
    button: ViewStyle;
    buttonText: TextStyle;
};

export const COMMON_STYLES: CommonStylesType = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: SIZES.padding,
    },
    input: {
        width: '100%',
        maxWidth: SIZES.maxWidth,
        height: SIZES.buttonHeight,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: SIZES.borderRadius,
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    button: {
        width: '100%',
        maxWidth: SIZES.maxWidth,
        height: SIZES.buttonHeight,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: COLORS.white,
        fontSize: FONTS.body.fontSize,
        fontWeight: 'bold',
    },
};