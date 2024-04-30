import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        padding: 8,
        width: '100%',
        alignItems: 'center',
        borderRadius: 20
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
    }
});

export default styles;