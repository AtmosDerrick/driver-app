import React, { useContext, useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  FlatList,
} from "react-native";
import image from "../images/delivery.png";
import { withExpoSnack } from "nativewind";
import { UserContext } from "../context/UserContext";
import { Icon } from "@rneui/themed";

import map from "../images/map.png";
import loc from "../images/loc.png";
import recieve from "../images/recieve.jpg";

import AntIcon from "react-native-vector-icons/AntDesign";
const Welcome = ({ navigation }) => {
  const { userInfo, token, user } = useContext(UserContext);

  const handleAuth = () => {
    navigation.navigate("Signin");
  };

  return (
    <View className=" ">
      <SafeAreaView className="items-center">
        <ImageBackground
          source={image}
          className="h-80 mt-8 w-full "></ImageBackground>
        <View className="w-5/6 mx-auto mt-12">
          <Text className="text-5xl font-semibold  italic">
            Hey <Text className="text-blue-500">Milk Man</Text>
          </Text>
          <Text className="text-gray-600 text-lg">
            Its time to deliver a package
          </Text>
        </View>
        <View className="w-5/6 mx-auto">
          <View className="w-12 h-0.5 bg-blue-500"></View>
        </View>

        <View className="w-full mt-36">
          <TouchableOpacity
            onPress={handleAuth}
            className="bg-blue-500  mx-2  py-4 px-4">
            <Text className="text-center font-semibold text-white ">
              SIgnin
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Welcome;
