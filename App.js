import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

//import Mensagem from './src/ex2';
//import Atividade1 from './src/atividade1';
//import Exemplo3 from './src/ex3';
//import Atividade3 from './src/atividade 3';
//import Exemplo4 from './src/ex4';
//import Atividade4 from './src/atividade 4';
//import Exemplo5 from './src/ex5';
import Atividade5 from './src/atividade 5';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade5 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c51162',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
});