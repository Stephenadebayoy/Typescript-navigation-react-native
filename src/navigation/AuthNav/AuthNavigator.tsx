import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import { AuthRoutes } from "../types";
import { Register, Login } from "../../screen";

const { Group, Navigator, Screen } = createStackNavigator<AuthRoutes>();

export default function AuthNavigator(): JSX.Element {
  //   const { isNewUser } = useDotSelector((state) => state.persisted)
  return (
    <>
      <Navigator initialRouteName={"Login"}>
        <Group
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerMode: "screen",
            headerShown: false,
          }}
        >
          <Screen name="Register" component={Register} />
          <Screen name="Login" component={Login} />
        </Group>
      </Navigator>
    </>
  );
}
