import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fafafa',
        borderRadius: 20,
        alignItems: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    botao: {
        width: '70%',
        padding: 10,
        margin: 20,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    txtBotao: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fafafa'
    },
    box: {
        width:'300px',
        height:'250px',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'grey',
        padding: 5
    },
    botao_operacao: {
        width: '50px',
        padding: 10,
        margin: 20,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        
    },
    operacao:{
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})

export default styles;