import React from "react";
import { View,Text,SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from "./pages/Categories";
import Meals from "./pages/Meals";
import Details from "./pages/Details";

const Stack=createNativeStackNavigator();

const Route=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesPage" component={Categories} options={{
          title:"Categories",
          headerTitleAlign:"center",
          headerStyle:{backgroundColor:"white"},
          headerTintColor:"orange",
        }}></Stack.Screen>
        <Stack.Screen name="MealsPage" component={Meals} options={{
          title:"Meals",
          headerTitleAlign:"center",
          headerStyle:{backgroundColor:"white"},
          headerTintColor:"orange",
          headerBackTitle:"Categories"
        }}></Stack.Screen>
         <Stack.Screen name="DetailsPage" component={Details} options={{
          title:"Details",
          headerTitleAlign:"center",
          headerStyle:{backgroundColor:"white"},
          headerTintColor:"orange",
          headerBackTitle:"Meals",
        }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default Route;
