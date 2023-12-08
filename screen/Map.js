import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  SafeAreaView,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { Icon } from "@rneui/themed";
import * as Location from "expo-location";

import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Map = () => {
  const [location, setLocation] = useState([]);
  const [origin, setOrigin] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapDetails, setMapDetails] = useState();

  const [weatherData, setWeatherData] = useState();
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

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();

    if (location) {
      setState({
        pickupCords: {
          latitude: location?.coords?.latitude,
          longitude: location?.coords?.longitude,
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
    }
  }, [location]);

  // let text = "Waiting..";
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }

  const mapRef = useRef();

  const { pickupCords, droplocationCords } = state;
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback
      onPress={dismissKeyboard}
      style={{ flex: 1, backgroundColor: "white", height: "100%" }}>
      <KeyboardAvoidingView>
        <View className="px-2 h-24 bg-indigo-500 mx-2 mb-4 rounded-xl">
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
        <View>
          <View>
            {location && (
              <Text>
                Latitude: {location?.coords?.latitude}, Longitude:{" "}
                {location?.coords?.longitude}
              </Text>
            )}
          </View>
        </View>
        <KeyboardAvoidingView>
          {location != [] ? (
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
          ) : (
            <Text>Loading</Text>
          )}
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Map;
