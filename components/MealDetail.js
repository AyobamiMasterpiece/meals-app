import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MealDetail({ duration, complexity, affordability }) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailitem}>{duration}m</Text>

      <Text style={styles.detailitem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailitem}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  detailitem: {
    fontSize: 12,
  },
});
