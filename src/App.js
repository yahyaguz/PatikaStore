import React from 'react';
import { View, FlatList, StyleSheet, TextInput, Text, ScrollView, } from 'react-native';
import ProductCard from './components/ProductCard';
import product_data from './product_data.json';

function App() {

    const renderProduct = ({ item }) => <ProductCard product={item} />

    return (
        <View style={styles.container} >
            <Text style={styles.main_title} >PATIKASTORE</Text>
            <TextInput style={styles.textinput} placeholder="  Ara..." />
            <ScrollView >
                <FlatList numColumns={2} horizontal={false}

                    data={product_data}
                    renderItem={renderProduct}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textinput: {
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#eceff1',
        color: 'gray',
    },
    main_title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'purple',
        marginTop: 7,
        marginLeft: 10,
    },
});

export default App;