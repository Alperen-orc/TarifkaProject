import React from "react";
import { View,SafeAreaView,Text,TouchableWithoutFeedback,Image } from "react-native";
import styles from "./CategoriesCard.styles"

const CategoriesCard=({categories,onSelect})=>{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.main_container}>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: categories.strCategoryThumb}}/>
            <Text style={styles.text}>{categories.strCategory}</Text>
        </View>
        </View>
        </TouchableWithoutFeedback>
        
    );
}

export default CategoriesCard;