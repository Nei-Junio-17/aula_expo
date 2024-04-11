import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";

import styles from "./styles";

export default function Atividade4() {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [txtTela, setTxtTela] = useState('Insira o nome e sobrenome');
    const [isFocusNome, setIsFocusNome] = useState(false);
    const [isFocusSobrenome, setIsFocusSobrenome] = useState(false);

    function exibeTextoHandle() {
        //setTxtTela(nome+' '+sobrenome);
        setTxtTela(`${nome} ${sobrenome}`);
        setNome('');
        setSobrenome('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>

            <Text style={styles.texto}>{txtTela}</Text>

            <Text style={styles.titleinput}>Nome</Text>

            <TextInput
                style={
                    isFocusNome ?
                        [styles.input,
                        {
                            color: '#ffcdd2',
                            backgroundColor: '#b71c1c',
                            outline: 'none'
                        }]
                        :
                        styles.input
                }
                onChangeText={(valor) => setNome(valor)}
                value={nome}
                onFocus={() => setIsFocusNome(true)}
                onBlur={() => setIsFocusNome(false)}
            />

            <Text style={styles.titleinput}>Sobrenome</Text>

            <TextInput
                style={
                    isFocusSobrenome ?
                        [styles.input,
                        {
                            color: '#ffcdd2',
                            backgroundColor: '#b71c1c',
                            outline: 'none'
                        }]
                        :
                        styles.input
                }
                onChangeText={(valor) => setSobrenome(valor)}
                value={sobrenome}
                onFocus={() => setIsFocusSobrenome(true)}
                onBlur={() => setIsFocusSobrenome(false)}
            />


            <Pressable
                style={({ pressed }) => pressed ? [styles.botao, styles.botaoPress] : styles.botao}
                onPress={() => exibeTextoHandle()}>
                {
                    ({ pressed }) => (
                        <Text 
                            style={
                                pressed ? 
                                    [styles.txtBotao, 
                                        { color: '#b71c1c' }] 
                                    : 
                                        styles.txtBotao
                            }
                >Exibir texto</Text>
            )
        }
            </Pressable>

        </View>
    )
}