import React, { useState, useRef } from "react";
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
  KeyboardAvoidingView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Map = () => {
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const Stack = createNativeStackNavigator();

  const [state, setState] = useState({
    pickupCords: {
      latitude: 5.56677,
      longitude: -0.18104,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    droplocationCords: {
      latitude: 5.53405,
      longitude: -0.42376,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  const mapRef = useRef();

  const { pickupCords, droplocationCords } = state;

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1, backgroundColor: "white", height: "100%" }}>
      <View>
        <View className=" mb-4  bg-blue-600 mx-2 rounded-xl px-2 py-4 shadow-xl">
          <Text className="text-sm font-medium mb-2 text-white ">
            Drop Off Point
          </Text>
          <View>
            <TextInput
              placeholder="Location"
              className="w-full py-2 px-2 text-gray-800 bg-gray-100 rounded-lg"
            />
          </View>
        </View>
        <KeyboardAvoidingView>
          <MapView
            className="h-full  "
            ref={mapRef}
            initialRegion={pickupCords}>
            <Marker
              coordinate={pickupCords}
              onPress={() => {
                Keyboard.dismiss();
              }}
            />
            <Marker coordinate={droplocationCords} />

            <MapViewDirections
              origin={pickupCords}
              destination={droplocationCords}
              apikey={"AIzaSyDW8boQLgrf5XsnxUhcxwDp8DHqU-_TdwA"}
              strokeWidth={3}
              strokeColor="red"
              optimizeWaypoints={true}
              onReady={(result) => {
                mapRef.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: 30,
                    bottom: 300,
                    left: 30,
                    top: 100,
                  },
                });
              }}
            />
          </MapView>
        </KeyboardAvoidingView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Map;
