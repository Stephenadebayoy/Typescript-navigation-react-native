import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { Access, BankEntry } from "../../../screen";
import { BankRoutes } from "navigation/types";

const { Navigator, Screen } = createStackNavigator<BankRoutes>();
export default function BankNavigator() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Dashboard"
    >
      <Screen name="Dashboard" component={BankEntry} />
      <Screen
        name="Access"
        component={Access}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Navigator>
  );
}
