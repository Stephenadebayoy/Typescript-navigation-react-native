// import * as React from "react";
// import { Platform } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { Icon } from "@assets";
// import { GColors } from "@constant";
// import { TabRoutes } from "navigation/types";
// import { HomeScreen } from "@screen";

// type focusedProps = { color: string };

// interface RenderTabIconProps extends focusedProps {
//   name: keyof TabRoutes;
// }
// const RenderTabIcon = ({ color, name }: RenderTabIconProps) => {
//   const iconSize = 22;

//   switch (name) {
//     case "Home":
//       return <Icon name="add" size={iconSize} color={color} />;
//     case "Cards":
//       return <Icon name="apple" size={iconSize} color={color} />;
//   }
// };

// const { Screen, Navigator } = createBottomTabNavigator<TabRoutes>();

// export default function TabNavigator() {
//   return (
//     <Navigator
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarActiveTintColor: GColors.accent,
//         tabBarIcon: ({ color }: focusedProps) => (
//           <RenderTabIcon {...{ color, name: route.name }} />
//         ),
//         keyboardHidesTabBar: true,
//         tabBarStyle: [
//           Platform.OS === "android" && {
//             height: 60,
//             padding: 10,
//           },
//           { paddingVertical: 10 },
//         ],
//       })}
//     >
//       <Screen name="Home" component={HomeScreen} />
//     </Navigator>
//   );
// }

import * as React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Icon } from "../../../assets";
import { GColors } from "../../../constants";
import { TabRoutes } from "navigation/types";
import { HomeScreen, SettingsEntry } from "../../../screen";

type focusedProps = { color: string };

interface RenderTabIconProps extends focusedProps {
  name: keyof TabRoutes;
}
const RenderTabIcon = ({ color, name }: RenderTabIconProps) => {
  const iconSize = 22;

  switch (name) {
    case "Home":
      return <Icon name="add" size={iconSize} color={color} />;
    case "Settings":
      return <Icon name="settings" size={iconSize} color={color} />;
  }
};

const { Screen, Navigator } = createBottomTabNavigator<TabRoutes>();

export default function TabNavigator() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: GColors.blue,
        tabBarIcon: ({ color }: focusedProps) => (
          <RenderTabIcon {...{ color, name: route.name }} />
        ),
        keyboardHidesTabBar: true,
        tabBarStyle: [
          Platform.OS === "android" && {
            height: 60,
            padding: 10,
          },
          { paddingVertical: 10 },
        ],
      })}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Settings" component={SettingsEntry} />
    </Navigator>
  );
}
