import { ActivityIndicator, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import FlashMessage from "react-native-flash-message";

import { navigationRef } from "../navigation/navigationRef";
import AppNavigator from "../navigation/AppNav/AppNavigator";
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";

import * as SplashScreen from "expo-splash-screen";

import { OnboardNavigator } from "../navigation/Onboard";
import { useState } from "react";
import { AuthNavigator } from "../navigation/AuthNav";

export default function LoadApp() {
  const [user, setUser] = useState(false);
  const [loaded, error] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
  });

  if (error) {
    return <View>{JSON.stringify(error, null, 2)}</View>;
  }

  if (!loaded) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={async () => (loaded ? await SplashScreen.hideAsync() : {})}
    >
      {user ? <AppNavigator /> : <AuthNavigator />}

      <StatusBar barStyle={"dark-content"} backgroundColor="transparent" />
      <FlashMessage
        position={"top"}
        duration={2000}
        style={{ paddingTop: 25, zIndex: 9999 }}
        animated
      />
    </NavigationContainer>
  );
}
