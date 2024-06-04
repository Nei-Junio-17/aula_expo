
import { useState } from 'react'
import { View, Text } from 'react-native';

import Input from './input';
import Botao from './botao';

import styles from './styles';

export default function Exemplo6() {

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);
    const [analise, setAnalise] = useState();
    const mensErro = 'Valores inválidos';

    function calculaImc() {
        const tmpImc = peso / (altura * altura);
        setImc(tmpImc);
    }

    function analiseImc(tmpImc){
        if (tmpImc < 18.5){
            setAnalise('Abaixo do peso');
        } else if (tmpImc => 18.5 && tmpImc < 24.9){
            setAnalise('Peso normal');
        } else if (tmpImc => 25 && tmpImc < 29.9){
            setAnalise('Sobrepedo');
        } else if (tmpImc => 30 && tmpImc < 34.9){
            setAnalise('Obesidade Grau 1');
        } else if (tmpImc => 35 && tmpImc < 39.9){
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

            <Text style={styles.imc}>{analise}</Text>

            <Botao calcular={calculaImc} analisar={analiseImc}>Calcular</Botao>
        </View>
    )
}