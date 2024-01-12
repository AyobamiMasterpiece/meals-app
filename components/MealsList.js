import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "./MealItem";

export default function MealsList({ item }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={item}
        renderItem={({ item }) => {
          const mealProp = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
          };
          return <MealItem {...mealProp}></MealItem>;
        }}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
});
