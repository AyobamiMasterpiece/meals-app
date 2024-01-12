import React, { useContext, useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/data";
import MealItem from "../components/MealItem";
import { FavouritesContext } from "../store/Context/FavouritesContext";
import Ionicons from "react-native-vector-icons/Ionicons";
import MealsList from "../components/MealsList";

export default function MealDetailScreen({ route, navigation }) {
  const catid = route.params.id;
  const categorytitle = CATEGORIES.find(({ id }) => id == catid).title;
  // console.log(categorytitle);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categorytitle,
      // headerRight: () => {
      //   return <Ionicons name="star" size={20} color={"white"}></Ionicons>;
      // },
    });
  }, [catid, navigation]);
  const displayedmeals = MEALS.filter((item) => {
    return item.categoryIds.find((item) => item == catid);
  });

  return <MealsList item={displayedmeals}></MealsList>;
}
