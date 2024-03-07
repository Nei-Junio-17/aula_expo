import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

//import Mensagem from './src/ex2';
import Atividade1 from './src/atividade1';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade1 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa500',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
});