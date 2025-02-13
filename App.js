import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

//import Mensagem from './src/ex2';
//import Atividade1 from './src/atividade1';
//import Exemplo3 from './src/ex3';
//import Atividade3 from './src/atividade 3';
//import Exemplo4 from './src/ex4';
//import Atividade4 from './src/atividade 4';
//import Exemplo5 from './src/ex5';
//import Atividade5 from './src/atividade 5';
// import Atividade6 from './src/atividade 6';
// import Exemplo7 from './src/ex7';
// import Exemplo8 from './src/ex8';

import NavegacaoStack from './src/navegacao/stack';
export default function App() {
  return (
    <View style={styles.container}>
      <NavegacaoStack />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 15,
  },
});