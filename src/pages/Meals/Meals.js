import React from "react";
import { View,Text,SafeAreaView,FlatList } from "react-native";
import config from "../../../config";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

import MealsCard from "../../components/MealsCard/MealsCard";


const Meals=({route,navigation})=>{

    const {strCategory}=route.params;    

    const {loading,error,data}=useFetch(config.MEALS_URL+strCategory)
    

    const handleMealsSelect= idMeal => {
        navigation.navigate("DetailsPage",{idMeal});
    }; 

    const renderMeals=({item})=>
        <MealsCard meal={item} onSelect={()=>handleMealsSelect(item.idMeal)}></MealsCard>
    

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }

    return(
        <SafeAreaView>
            <FlatList
            data={data.meals}
            renderItem={renderMeals}
            ></FlatList>
        </SafeAreaView>
    );
}

export default Meals;