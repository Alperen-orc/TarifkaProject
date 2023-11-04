import React from "react";
import { View,Text,Image,TouchableOpacity } from "react-native";
import styles from "./DetailsCard.styles"

const DetailsCard=({detail,onSelect})=>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:detail.strMealThumb}}></Image>
            <Text style={styles.meal}>{detail.strMeal}</Text>
            <Text style={styles.area}>{detail.strArea}</Text>
            <View style={styles.strech}></View>
            <Text style={styles.desc}>{detail.strInstructions}</Text>
            <TouchableOpacity style={styles.btn} onPress={onSelect}>
                <Text style={styles.btn_text}>Watch On Youtube</Text>
            </TouchableOpacity>
        </View>
    );
}

export default DetailsCard;