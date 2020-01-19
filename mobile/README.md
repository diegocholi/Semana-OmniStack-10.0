## Informações de projeto
Utilizar Expo no celular para compilar a aplicação e não precisar instalar os sdk's, ele é eficaz para aplicações de escopo pequeno e bem definido.
- Para instalar o expo no pc: *npm install -g expo-cli* ou *yarn global add expo-cli*.
- No linux e mac configurar o yarn global path:
    Colocar o comando ```export PATH="$(yarn global bin):$PATH"``` no arquivo de inicialização do sistema, 
    .bash_profile que fica na pasta raiz do sistema, se o bash_profile não existir ele pode ser também: .bashrc ou .zsgrc.
- Para criar o projeto com expo: *expo init mobile*
    [Documentação Expo](https://docs.expo.io/versions/v36.0.0/)
- Para iniciar o projeto: *yarn start* ou *npm start* -> Irá abrir o navegador, selecionar a opção Tunnel em Connection e escanear o QRCODE com o APP EXPO

## Dependências de projeto
- Expo: *npm install -g expo-cli* ou *yarn global add expo-cli*.
- Expo MapView: *expo install react-native-maps*, vide a documentação: [MapView](https://docs.expo.io/versions/latest/sdk/map-view/)
- Expo Location: *expo install expo-localization*, vide a documentação: [Expo location](https://docs.expo.io/versions/v36.0.0/sdk/localization/)
- Expo WebView: *expo install react-native-webview* [Expo WebView](https://docs.expo.io/versions/latest/sdk/webview/)
- React Navigation: *yarn add react-navigation* ou *npm install react-navigation*
  * Dependências do React Navigation: 
    1. Com expo no projeto: *expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context*
    2. Sem expo no projeto: *yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context*
      * Para mais informações sobre como configurar React Navigation sem expo: [React Navigation](https://reactnavigation.org/docs/en/getting-started.html)
    3. Navegação em pilha: 
      *yarn add react-navigation-stack* ou *npm install react-navigation-stack* 
      e *yarn add @react-native-community/masked-view* ou *npm install @react-native-community/masked-view*
      * Existe também a navegação por abas e via drawer, veja mais na documentação: [React Navigation](https://reactnavigation.org/docs/en/getting-started.html)
- Axios: *yarn add axios* ou *npm install axios*

## Particuliaridades do React Native
Diferente do ReactJS no React Native as tags não tem um significado semantico, diferenciando-se um pouco do HTML. Os estilos são declarados em uma const que utilizam a classe  StyleSheet do React Native, como no exemplo abaixo:
```  
  import React from 'react';
  import { StyleSheet, Text, View } from 'react-native';

  export default function App() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello OmniStack 2!</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7159c1',
      alignItems: 'center',
      justifyContent: 'center',
    },

    title: {
      fontWeight: "bold",
      fontSize: 32,
      color: "#fff"
    }
  });
```