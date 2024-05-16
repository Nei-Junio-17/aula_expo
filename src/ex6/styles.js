import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        padding: 8,
        width: '100%',
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'space-between'

    },
    titulo: {
        margin: 6,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#aaa',

    },
    ladoALado:{
        flexDirection: 'row',
        marginVertical: 30
    },
    imc:{
        color:'lightgray',
        fontSize: 65,
        marginVertical: 15,
        textAlign: 'center'
    }
});

export default styles;