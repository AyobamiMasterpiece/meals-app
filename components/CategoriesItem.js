import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CategoriesItem({ title, color, onpress }) {
  return (
    <View style={[styles.itemcontainer, { backgroundColor: color }]}>
      <Pressable
        style={({ pressed }) => {
          return [styles.button];
        }}
        android_ripple={{ color: "grey" }}
        onPress={onpress}
      >
        <View style={[styles.innercontainer]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemcontainer: {
    // padding: 10,

    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",

    margin: 10,
    borderRadius: 20,

    height: 150,
    overflow: "hidden",
    // backgroundColor: "red",
    //elevation: 10,
  },
  button: {
    flex: 1,
    borderRadius: 22,
    // overflow: "hidden",
  },
  innercontainer: {
    flex: 1,
    // backgroundColor: "yellow",
    alignItems: "center",
    // overflow: "hidden",
    justifyContent: "center",
    borderRadius: 22,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
