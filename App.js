import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./sceens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealDetailScreen from "./sceens/MealDetailScreen";
import MealScreen from "./sceens/MealScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavouriteScreen from "./sceens/FavouriteScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import FavouritesContextProvider from "./store/Context/FavouritesContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function TabHome() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 15,
        },
        // tabBarIconStyle: {
        //   backgroundColor: "pink",
        // },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "grey",
        tabBarLabelPosition: "beside-icon",
      }}
    >
      <Tab.Screen
        name="categories"
        component={CategoriesScreen}
        options={{
          // headerShown: false,
          tabBarLabel: "Categories",
          tabBarIcon: ({ color }) => {
            return (
              <Ionicons name="apps-outline" color={color} size={20}></Ionicons>
            );
          },
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="favourites"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <Ionicons name="star-outline" color={color} size={20}></Ionicons>
            );
          },
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <FavouritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerBackVisible: false,
              headerStyle: {
                backgroundColor: "grey",
              },
              headerTintColor: "white",
              headerTitleAlign: "center",
              animationTypeForReplace: "pop",
              contentStyle: {
                backgroundColor: "white",
              },
            }}
          >
            <Stack.Screen
              name="Home"
              component={TabHome}
              options={{
                headerShown: false,
              }}
            ></Stack.Screen>
            <Stack.Screen
              name="mealdetail"
              component={MealDetailScreen}
              options={{
                title: "food",
              }}
            ></Stack.Screen>
            <Stack.Screen
              name="mealscreen"
              component={MealScreen}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>

      <StatusBar style="hidden" />
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "red",
    padding: 20,
  },
});
