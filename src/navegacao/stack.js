import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Exemplos from '../exemplos';
import Exemplos2 from '../ex2';
import Exemplos3 from '../ex3';
import Exemplos4 from '../ex4';
import Exemplos5 from '../ex5';


const Stack = createNativeStackNavigator();

function NavegacaoStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Exemplos" component={Exemplos} />
        <Stack.Screen name="Ex2" component={Exemplos2} />
        <Stack.Screen name="Ex3" component={Exemplos3} />
        <Stack.Screen name="Ex4" component={Exemplos4} />
        <Stack.Screen name="Ex5" component={Exemplos5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavegacaoStack;