import { TextInput } from 'react-native';

import styles from './styles';

export default function Input({placeholder, valor, atualizaValor}) {
    return (
        <TextInput
        style={[styles.input, {outline: 'none'}]}
        placeholder={placeholder}
        placeholderTextColor='lightgray'
        keyboardType='numeric'
        value={valor}
        onChangeText={vlr => atualizaValor(vlr)}
        />
    )
}