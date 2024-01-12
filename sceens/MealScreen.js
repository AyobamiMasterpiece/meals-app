import React, { useContext, useLayoutEffect } from "react";
import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/data";
import MealDetail from "../components/MealDetail";
import List from "../components/List";
import { FavouritesContext } from "../store/Context/FavouritesContext";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function MealScreen({ route, navigation }) {
  console.log(route.params.id);
  const meal = MEALS.find((id) => id.id == route.params.id);
  const [FavouriteState, dispatch] = useContext(FavouritesContext);
  const isfavourties = FavouriteState.includes(meal.id);
  const handlefavourites = () => {
    console.log(FavouriteState, "lol");
    if (isfavourties) {
      console.log("remove");
      dispatch({
        type: "remove",
        id: meal.id,
      });
    } else {
      console.log("add");
      dispatch({
        type: "add",
        id: meal.id,
      });
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => {
        return (
          <Ionicons
            name={isfavourties ? "star" : "star-outline"}
            size={30}
            color={"white"}
            onPress={handlefavourites}
          ></Ionicons>
        );
      },
    });
  }, [navigation, handlefavourites]);
  return (
    <View>
      <ScrollView
        style={{
          marginTop: 5,
          marginBottom: 25,
        }}
      >
        <Image source={{ uri: meal.imageUrl }} style={styles.img}></Image>
        <Text style={styles.title}>{meal.title}</Text>
        <MealDetail
          complexity={meal.complexity}
          affordability={meal.affordability}
          duration={meal.duration}
        ></MealDetail>

        <View
          style={{
            width: "90%",
            alignSelf: "center",
          }}
        >
          <View style={styles.subtitlecontainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>
          <List meal={meal.ingredients}></List>
          <View style={styles.subtitlecontainer}>
            <Text style={styles.subtitle}>Steps</Text>
          </View>
          <List meal={meal.steps}></List>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  img: {
    width: "90%",
    alignSelf: "center",
    height: 300,
    borderRadius: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  subtitlecontainer: {
    padding: 6,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
    // backgroundColor: "black",
  },
});
