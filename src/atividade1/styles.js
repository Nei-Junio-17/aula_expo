import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#e3f2fd',     
        width: '100%',
        height: '100%',
        alignItems:'center',
        borderRadius: 20,
    },  
    titulo: {
        fontSize: 30,
        margin: 15,
        padding: 20,
        fontWeight: 'bold', 
    },
    imagem:{
        width: '90%',
        resizeMode: 'center'
    },
});

export default styles;