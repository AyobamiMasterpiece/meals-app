import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavouritesContext } from "../store/Context/FavouritesContext";
import Meal from "../models/meal";
import { MEALS } from "../data/data";
import MealsList from "../components/MealsList";

export default function FavouriteScreen() {
  const [favourites, dispatch] = useContext(FavouritesContext);
  let data = MEALS.filter((meal) => favourites.includes(meal.id));
  if (data.length === 0) {
    return (
      <View style={styles.root}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          SORRY!{" "}
        </Text>
        <Text style={styles.text}>You have not added any Favourites yet</Text>
      </View>
    );
  }
  return <MealsList item={data}></MealsList>;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    margin: 20,
  },
});
