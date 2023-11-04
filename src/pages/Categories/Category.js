import React from "react";
import { View,SafeAreaView,FlatList,Text } from "react-native";
import useFetch from "../../hooks/useFetch"
import config from "../../../config";
import Loading from "../../components/Loading"
import Error from "../../components/Error"

import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";

const Category=({navigation})=>{
    const{loading,error,data}=useFetch(config.CATEGORIES_URL);

    const handleCategorySelect= strCategory => {
        navigation.navigate("MealsPage",{strCategory});
    };

    const renderCategory=({item})=>
        <CategoriesCard categories={item} onSelect={()=>handleCategorySelect(item.strCategory)}></CategoriesCard>
    

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }

    return (
        <SafeAreaView>
            <FlatList
                data={data.categories}
                renderItem={renderCategory} />
        </SafeAreaView>
    );
}

export default Category;
