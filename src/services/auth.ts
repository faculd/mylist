import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { makeRedirectUri } from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

export const useGoogleSignIn = () => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: '529744299893-0964jhnnb94v95ubbsam42bqsc2lamc7.apps.googleusercontent.com', // Web Client ID do Google Cloud Console
    redirectUri: makeRedirectUri({
      scheme: 'mylist' // nome do seu app
    }),
  });

  const signIn = async () => {
    try {
      const result = await promptAsync();
      if (result?.type === 'success') {
        const { id_token } = result.params;
        // Aqui você pode usar o id_token para autenticar com seu backend
        return result;
      }
      throw new Error('Login cancelado ou falhou');
    } catch (error) {
      console.error('Erro no login com Google:', error);
      throw new Error('Erro ao realizar login com Google');
    }
  };

  return {
    signIn,
    request,
  };
};