import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/data";

import React from "react";
import CategoriesItem from "../components/CategoriesItem";

export default function CategoriesScreen({ navigation }) {
  console.log(navigation);
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <CategoriesItem
            title={item.title}
            color={item.color}
            onpress={() => {
              navigation.navigate("mealdetail", { id: item.id });
            }}
          ></CategoriesItem>
        );
      }}
      numColumns={2}
    />
  );
}
