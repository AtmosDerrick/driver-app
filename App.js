import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";
import Welcome from "./screen/Welcome";
import { Login } from "./screen/Login";
import HomePage from "./screen/HomePage";
import { UserContextProvider } from "./context/UserContext";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Icon } from "@rneui/themed";
import Packages from "./screen/Packages";
import DropdownSelect from "react-native-input-select";

import AntIcon from "react-native-vector-icons/AntDesign";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IonIcon from "react-native-vector-icons/Ionicons";
import Deliveries from "./screen/Deliveries";
import Map from "./screen/Map";
import SplashScreenView from "./screen/SplashScreen";
import HomeScreen from "./screen/HomeScreen";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <View onLayout={onLayoutRootView}>
        <SplashScreenView />
      </View>
    );
  }

  if (!signIn) {
    return (
      <UserContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Welcome} />
            <Stack.Screen name="Signin" component={Login} />
            <Stack.Screen name="HomePage" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContextProvider>
    );
  } else {
    return (
      <UserContextProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === "Home") {
                  iconName = "home";
                } else if (route.name === "Confirm") {
                  return (
                    <FontAwesomeIcon name="check" size={20} color="gray" />
                  );
                } else if (route.name === "Deliveries") {
                  return (
                    <FontAwesomeIcon name="truck" size={20} color="gray" />
                  );
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
        </NavigationContainer>
      </UserContextProvider>
    );
  }
}
