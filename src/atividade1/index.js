import * as React from 'react';
import { Text, View, Image } from 'react-native';

import Ola from './ola/olaIndex';

import logo from 'D:/TEMP/neijunio/mobile/aula_expo/assets/002-1-react-native.png';

import styles from './styles';

const Saudacoes = (props)  =>{
    return(
        <Text style={{textAlign: 'center'}}>
            Olá {props.name}
        </Text>
    );
}

export default function Atividade1 () { 

    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.imagem} />
            <Text style={styles.titulo}>
                Atividade 1
            </Text>

            {/* <Ola nomePessoa={'Nei'}/>
            <Ola nomePessoa={'Nei'}/> */}

            <Ola>Nei</Ola>
            <Ola>Nei</Ola>
        </View>
    );
}
