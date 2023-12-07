import React, { useContext, useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import image from "../images/delivery.png";
import { withExpoSnack } from "nativewind";
import { UserContext } from "../context/UserContext";
import DropdownSelect from "react-native-input-select";

import { Icon } from "@rneui/themed";

import map from "../images/map.png";
import loc from "../images/loc.png";
import recieve from "../images/recieve.jpg";

const HomePage = () => {
  const [currency, setCurrency] = useState("");
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <View className="bg-white">
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View className="mt-4 h-full">
          <View className="bg-white py-1 px-4 flex-row gap-8 items-center">
            <View className="w-16 h-16 rounded-xl ">
              <Image
                source={require("../images/driver.jpg")}
                className="w-16 h-16 rounded-2xl"
              />
            </View>
            <View className="">
              <Text className="text-base text-gray-700 font-semibold">
                Accra Rd - Kumasi Rd
              </Text>
            </View>
            <Pressable className="h-12 w-12 bg-blue-500 flex-row justify-center items-center rounded-lg">
              <View>
                <Icon name="cached" color="white" />
              </View>
            </Pressable>
          </View>

          <View className="mt-4 mx-2 bg-gray-50 flex-row items-center justify-start   rounded-md ">
            <DropdownSelect
              label="Select Route"
              placeholder="Select Route"
              options={[
                { name: "", code: "" },
                { name: "Northen - Accra Rd", code: "northen-accra" },
                { name: "Accra - Kumasi Rd", code: "accra-kumasi" },
                { name: "Tamale - Kumasi Rd", code: "tamale-kumasi" },
                { name: "Takwa - Accra Rd", code: "takwa-accra" },
                { name: "Ho - Kumasi Rd", code: "ho-kumasi" },
                { name: "Dambai - Accra Rd", code: "dambai-accra" },
              ]}
              optionLabel={"name"}
              optionValue={"code"}
              selectedValue={currency}
              onValueChange={(itemValue) => setCurrency(itemValue)}
              primaryColor={"deepskyblue"}
            />
          </View>

          <View className="" style={{ marginTop: -5 }}>
            <ImageBackground
              source={map}
              className="h-52 mt-8 w-full flex-row items-center justify-center ">
              <View className="w-3/4 h-20 flex-row  items-center justify-between px-4 rounded-full shadow-lg bg-white">
                <View className="">
                  <Image
                    source={require("../images/loc.png")}
                    className="w-10 h-10"
                  />
                </View>
                <View className="">
                  <View>
                    <Text className="text-sm font-medium">Drop Off Point</Text>
                    <Text className="text-xs font-medium text-gray-400">
                      Greater Accra - Spintex
                    </Text>
                    <Text className="text-xs font-normal text-gray-400">
                      Code - X4521
                    </Text>
                  </View>
                </View>

                <View>
                  <Icon name="map" color="blue" />
                </View>
              </View>
            </ImageBackground>
          </View>
          <View className="mx-4 mt-4">
            <View className="flex-row justify-between">
              <View>
                <Text className="text-base font-semibold text-gray-600 ">
                  Drop Point Details
                </Text>
              </View>
              <View>
                <Text className="text-sm text-blue-600 font-medium italic">
                  View all
                </Text>
              </View>
            </View>

            <View className="">
              <View className="bg-white py-1  flex-row gap-8 items-center">
                <View className="w-16 h-16 rounded-xl ">
                  <Image
                    source={require("../images/recieve.jpg")}
                    className="w-16 h-16 rounded-2xl"
                  />
                </View>
                <View className="">
                  <Text className="text-base text-gray-700 font-semibold">
                    Osei Kwame
                  </Text>
                  <Text className="text-xs text-gray-700 font-normal">
                    054 413 2077 / 024 173 2067
                  </Text>
                  <Text className="text-xs text-gray-700 font-normal">
                    ID: W123124
                  </Text>
                </View>
                <Pressable className="h-12 w-12 bg-blue-500 flex-row justify-center items-center rounded-lg">
                  <View>
                    <Icon name="call" color="white" />
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default HomePage;
