
import { useState } from 'react'
import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './styles';

export default function Atividade6() {

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);
    const [analise, setAnalise] = useState('');
    const mensErro = 'Valores inválidos';

    function calculaImc() {
        const tmpImc = peso / (altura * altura);
        setImc(tmpImc);
        analiseImc(tmpImc);
    }

    function analiseImc(imc){
        if (imc < 18.5){
            setAnalise('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 24.9){
            setAnalise('Peso normal');
        } else if (imc >= 25 && imc < 29.9){
            setAnalise('Sobrepeso');
        } else if (imc >= 30 && imc < 34.9){
            setAnalise('Obesidade Grau 1');
        } else if (imc >= 35 && imc < 39.9){
            setAnalise('Obesidade Grau 2');
        } else {
            setAnalise('Obesidade Grau 3');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 6</Text>
            <View style={styles.ladoALado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso} />
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura} />
            </View>

            <Text style={styles.imc}>{isNaN(imc) ? mensErro : imc.toFixed(2)}</Text>

            <Text calcular={analiseImc} style={styles.imc}>{analise}</Text>

            <Botao calcular={calculaImc}>Calcular</Botao>
        </View>
    )
}