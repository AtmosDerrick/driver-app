import React, { useContext, useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import image from "../images/delivery.png";
import { withExpoSnack } from "nativewind";
import { UserContext } from "../context/UserContext";
import { Icon } from "@rneui/themed";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./HomePage";
import Packages from "./Packages";
import Deliveries from "./Deliveries";
import Map from "./Map";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const HomeScreen = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Confirm") {
            return <FontAwesomeIcon name="check" size={20} color="gray" />;
          } else if (route.name === "Deliveries") {
            return <FontAwesomeIcon name="truck" size={20} color="gray" />;
          } else if (route.name === "Map") {
            return <Icon name="place" color="gray" />;
          }

          // You can return any component that you like here!
          return <Entypo name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Confirm" component={Packages} />
      <Tab.Screen name="Deliveries" component={Deliveries} />
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
