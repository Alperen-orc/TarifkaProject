import React from "react";
import { View,SafeAreaView,FlatList, Linking } from "react-native";
import config from "../../../config";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

import DetailCard from "../../components/DetailsCard/DetailsCard"
 

const Details=({route})=>{

    const {idMeal}=route.params;
    const {loading,error,data}=useFetch(config.DETAILS_URL+idMeal)
 

    const renderDetails=({item})=><DetailCard detail={item} onSelect={()=>{Linking.openURL(item.strYoutube)}}></DetailCard>

    


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
            renderItem={renderDetails}
            >
            </FlatList>
        </SafeAreaView>
    );
}

export default Details;