import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atividade3() {

    const [numero, setNumero] = useState(0);

    function mensagem() {
        alert('Aula de React-Native')
    }

    function incrementar(){
        setNumero(numero+1);
    }

    function decrementar(){
        setNumero(numero-1);
    }
    
    function zerar(){
        setNumero(0);
    }


    return (
        <View style={styles.container}>

        <Text style={styles.titulo}>Atividade 3</Text>

            <View style={styles.box}>
            
                <View style={styles.operacao}>
                    <TouchableOpacity style={styles.botao_operacao} onPress={() => decrementar()}>
                        <Text style={[styles.txtBotao, styles.txtBotao_op]}>-</Text>
                    </TouchableOpacity>

                    <Text style={[styles.titulo, styles.titulo_numero]}>{numero}</Text>

                    <TouchableOpacity style={styles.botao_operacao} onPress={() => incrementar()}>
                        <Text style={[styles.txtBotao, styles.txtBotao_op]}>+</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.botao} onPress={() => zerar()}>
                    <Text style={styles.txtBotao}>Zerar</Text>
                </TouchableOpacity>

            </View>

            

            {/* <TouchableOpacity style={styles.botao} onPress={() => incrementar()}>
                <Text style={styles.txtBotao}>Zerar</Text>
            </TouchableOpacity> */}
        </View>
    );
}