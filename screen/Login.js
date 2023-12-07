import React from "react";
import {
  Text,
  TextInput,
  Button,
  View,
  ImageBackground,
  SafeAreaView,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { withExpoSnack } from "nativewind";
import image from "../images/delivery.png";

export const Login = ({ navigation }) => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleAuth = () => {
    navigation.navigate("HomePage");
  };

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View>
          <ImageBackground
            source={image}
            className="h-80 mt-8 w-full "></ImageBackground>
          <View className=" w-full items-center justify-center ">
            <View className="px-4 w-full max-w-sm">
              <Text className="text-xl font-bold mb-6 text-gray-50">Login</Text>

              <View className="flex flex-col gap-8">
                <TextInput
                  placeholder="Enter email address"
                  className="border-2 py-3 rounded-md border-gray-300 px-2"
                />
                <TextInput
                  placeholder="Enter password"
                  className="border-2 py-3 rounded-md border-gray-300 px-2"
                />
              </View>

              <View className="flex flex-row justify-between items-center my-8">
                <View className="flex-row items-center">
                  <Pressable style="bg-gray-50 h-6 w-6 rounded-sm mr-2 "></Pressable>
                  <Text className="text-blue-500">Remember me</Text>
                </View>
                <Pressable>
                  <Text className="text-gray-900 font-bold">
                    Reset password
                  </Text>
                </Pressable>
              </View>
            </View>

            <View className="w-full mt-12">
              <TouchableOpacity
                onPress={handleAuth}
                className="bg-blue-500  mx-2  py-4 px-4">
                <Text className="text-center font-semibold text-white ">
                  SIgnin
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
