import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { AppRoute } from "../types";

import { BankNavigator, TabNavigator } from "./Navigators";

const { Navigator, Screen } = createStackNavigator<AppRoute>();

export default function AppNavigator(): JSX.Element {
  return (
    <Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="TabNavigator" component={TabNavigator} />
      <Screen
        name="BankNavigator"
        component={BankNavigator}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Navigator>
  );
}
