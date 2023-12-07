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

const Packages = () => {
  const [selectedIcons, setSelectedIcons] = useState([]);

  const packages = [
    { packageName: "Basic Package", packageCode: "DX12", number: "1" },
    { packageName: "Standard Package", packageCode: "Dx13", number: "2" },
    { packageName: "Premium Package", packageCode: "DX14", number: "3" },
    { packageName: "Basic Package", packageCode: "DX15", number: "4" },
    { packageName: "Standard Package", packageCode: "Dx16", number: "5" },
    { packageName: "Premium Package", packageCode: "DX17", number: "6" },
    { packageName: "Basic Package", packageCode: "DX18", number: "7" },
    { packageName: "Standard Package", packageCode: "Dx19", number: "7" },
    { packageName: "Premium Package", packageCode: "DX20", number: "9" },
    { packageName: "Basic Package", packageCode: "DX21", number: "10" },
    { packageName: "Standard Package", packageCode: "Dx22", number: "11" },
    { packageName: "Premium Package", packageCode: "DX23", number: "12" },
    { packageName: "Premium Package", packageCode: "DX45", number: "9" },
    { packageName: "Basic Package", packageCode: "DX29", number: "10" },
    { packageName: "Standard Package", packageCode: "Dx26", number: "11" },
    { packageName: "Premium Package", packageCode: "DX25", number: "12" },
    // Add more packages as needed
  ];

  const toggleIconColor = (packageCode) => {
    // Check if the packageCode is already in the selectedIcons array
    if (selectedIcons.includes(packageCode)) {
      // If it is, remove it
      setSelectedIcons(selectedIcons.filter((code) => code !== packageCode));
    } else {
      // If it is not, add it
      setSelectedIcons([...selectedIcons, packageCode]);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1, backgroundColor: "white" }}>
      <View className="bg-white  " style={{ height: "90%" }}>
        <View className="px-2 h-32 bg-blue-500 mx-2 mb-4 rounded-xl">
          <View className="py-2 ">
            <Text className="text-white font-normal">
              Enter Drop Point Code
            </Text>
          </View>
          <View className="mt-2  bg-gray-50 flex-row items-center justify-start border-gray-300 border-2 rounded-md">
            <TextInput
              placeholder="Search Parcel Number"
              className="mx-2 w-5/6 py-3 px-2 text-gray-800"
            />
            <View className="border-r-1 border-gray-400 px-1">
              <TouchableOpacity>
                <Icon name="send" color="gray" className="" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="px-2 items-center bg-gray-100 py-2  justify-between flex-row">
          <View>
            <Text className="w-24 text-sm font-bold">Product Name</Text>
          </View>
          <View>
            <Text className="text-sm font-bold">Code</Text>
          </View>
          <View>
            <Text className="text-sm font-bold">Selected</Text>
          </View>
        </View>
        <View className="" style={{ flex: 1, backgroundColor: "white" }}>
          <FlatList
            data={packages}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: 1,
                  borderColor: "gray",
                  paddingTop: 8,
                  paddingBottom: 8,
                }}
                onPress={() => toggleIconColor(item.packageCode)}>
                <Text style={{ flex: 1, paddingLeft: 8 }}>
                  {item.packageName}
                </Text>
                <Text style={{ width: 140, paddingLeft: 8 }}>
                  {item.packageCode}
                </Text>
                <TouchableOpacity
                  onPress={() => toggleIconColor(item.packageCode)}>
                  <View style={{ paddingRight: 24 }}>
                    <Icon
                      name="circle"
                      color={
                        selectedIcons.includes(item.packageCode)
                          ? "red"
                          : "gray"
                      }
                    />
                  </View>
                </TouchableOpacity>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.packageCode}
            contentContainerStyle={{
              flexGrow: 1,
            }}
          />
        </View>
      </View>
      <TouchableOpacity>
        <View className=" bg-blue-500 py-2 mt-4 mx-2 rounded-xl">
          <Text className="text-center text-white font-semibold">Confirm</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Packages;
