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
    titulo_numero: {
        flexDirection: 'row',
        fontSize: 35,
        
        width: '100px',
        backgroundColor: '#303030',
        borderRadius: 5,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        borderWidth: 2,
        borderColor: '#010101'
    },
    botao: {
        width: '80%',
        padding: 10,
        margin: 20,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#a0a0a0'
    },
    txtBotao: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fafafa',
    },
    txtBotao_op: {
        fontSize: 28,
        
    },
    box: {
        width:'300px',
        height:'250px',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'grey',
        padding: 5,
        borderWidth: 3,
        borderColor: '#000',
        marginTop: 20
    },
    botao_operacao: {
        width: '50px',
        padding: 10,
       
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#a0a0a0',
        
    },
    operacao:{
        width:'80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default styles;