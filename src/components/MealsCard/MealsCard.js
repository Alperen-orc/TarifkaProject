import React from "react";
import { View, Text,ImageBackground, TouchableNativeFeedback } from "react-native";
import styles from "./MealsCard.styles"

const MealsCard = ({meal, onSelect}) => {
    return (
        <TouchableNativeFeedback onPress={onSelect}>
        <View style={styles.main_container}>
            <View style={styles.container}>
                <View style={styles.image_view}>
                <ImageBackground source={{ uri: meal.strMealThumb }} style={styles.image}>
            <Text style={styles.image_text}>{meal.strMeal}</Text>
            </ImageBackground>
                </View>
            </View>
        </View>
        </TouchableNativeFeedback>
    )
};

export default MealsCard;