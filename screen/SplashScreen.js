import React, { useContext } from "react";
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Pressable,
} from "react-native";
import image from "../images/delivery.png";
import { withExpoSnack } from "nativewind";
import { UserContext } from "../context/UserContext";

const SplashScreenView = () => {
  const { userInfo, token, user } = useContext(UserContext);

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

        {
          // <View className="mt-36">
          // <Pressable
          //   onPress={() => alert("You pressed a button.")}
          //   className="bg-blue-500 w-1/2 mx-auto py-4 px-4">
          //   <Text className="text-center font-semibold text-white ">
          //     SIgnin
          //   </Text>
          // </Pressable>
          // </View>
        }
      </SafeAreaView>
    </View>
  );
};

export default SplashScreenView;
