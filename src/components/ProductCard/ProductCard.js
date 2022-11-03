import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({ product }) => {
    return (
        <TouchableOpacity style={styles.container} >
            <Image style={styles.image} source={{ uri: product.imgURL }} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price} >{product.price}</Text>
                {product.inStock == true ? (<></>) : (<Text style={styles.stock}>STOKTA YOK</Text>)}
            </View>
        </TouchableOpacity>
    );
};

export default ProductCard;