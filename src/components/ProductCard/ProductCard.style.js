import { Dimensions, StyleSheet} from "react-native";

export default StyleSheet.create({

    container: {
        flex: 10,
        backgroundColor: '#eceff1',
        borderRadius: 5,
        margin: 5,

    },

    inner_container: {
        padding: 5,
    },

    image: {
        resizeMode: 'contain',
        height: Dimensions.get('window').height / 4,
        borderRadius: 5,
        margin: 7,
    },

    title: {
        color: 'black',
        allowFontScaling: false,
        fontSize: 18,
        fontWeight: 'bold',
    },

    price: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'gray',
    },

    stock: {
        color: 'red',
        fontWeight: 'bold',

    },

});