import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function List({ meal }) {
  return meal.map((item) => (
    <View key={item} style={style.listitem}>
      <Text style={style.text}>{item}</Text>
    </View>
  ));
}

const style = StyleSheet.create({
  listitem: {
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "grey",
  },
  text: {
    textAlign: "center",
  },
});
