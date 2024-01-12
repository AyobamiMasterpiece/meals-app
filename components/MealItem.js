import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetail from "./MealDetail";

export default function MealItem({
  title,
  imageUrl,
  id,
  affordability,
  complexity,
  duration,
}) {
  const [imgloading, setimgloading] = useState(null);
  const navigation = useNavigation();
  return (
    <View style={styles.mealitem}>
      <Pressable
        android_ripple={{ color: "grey" }}
        // onPressIn={() => console.log("hey")}
        onPress={() => {
          navigation.navigate("mealscreen", {
            id: id,
          });
        }}
        unstable_pressDelay={8000}
        style={{
          overflow: "hidden",
          backgroundColor: "white",
          //   borderTopEndRadius: 20,
          //   borderTopLeftRadius:@0
        }}
      >
        <View>
          {imgloading && (
            <ActivityIndicator
              animating={imgloading}
              color={"red"}
              size={60}
            ></ActivityIndicator>
          )}

          <Image
            source={{ uri: imageUrl }}
            onLoadStart={() => setimgloading(true)}
            onLoad={() => setimgloading(false)}
            style={[
              styles.img,
              {
                display: imgloading ? "none" : "flex",
              },
            ]}
          ></Image>

          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetail
          affordability={affordability}
          complexity={complexity}
          duration={duration}
        ></MealDetail>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  mealitem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    elevation: 18,
  },
  img: {
    width: "100%",
    height: 200,
    borderRadius: 20,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    margin: 8,
  },
});
