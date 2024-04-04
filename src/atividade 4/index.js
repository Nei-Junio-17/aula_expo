import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";

import styles from "./styles";

export default function Atividade4() {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [txtTela, setTxtTela] = useState('Insira o nome e sobrenome');

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
                style={styles.input}
                onChangeText={(valor) => setNome(valor)}
                value={nome} />

            <Text style={styles.titleinput}>Sobrenome</Text>

            <TextInput
                style={styles.input}
                onChangeText={(valor) => setSobrenome(valor)}
                value={sobrenome} />


            <Pressable
                style={({ pressed }) => pressed ? [styles.botao, styles.botaoPress] : styles.botao}
                onPress={() => exibeTextoHandle()}>
                <Text style={styles.txtBotao}>Exibir texto</Text>
            </Pressable>

        </View>
    )
}