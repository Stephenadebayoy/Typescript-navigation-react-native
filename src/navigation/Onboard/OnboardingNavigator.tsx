import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Onboarded } from "../../screen/Onboard";

import { OnboardRoutes } from "navigation/types";

// type OnboardRoutes = {
//   Onboard: undefined;
//   Homey: undefined;
// };

const { Navigator, Screen } = createStackNavigator<OnboardRoutes>();

export default function OnboardNavigator(): JSX.Element {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Onboard" component={Onboarded} />
    </Navigator>
  );
}
