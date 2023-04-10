import { createStackNavigator } from "@react-navigation/stack";
import { AccountSet, AllAccount, Booked, ProfileEntry } from "../../../screen";
import { AccountRoutes, ProfileInfoRoutes } from "navigation/types";

const { Navigator, Screen } = createStackNavigator<AccountRoutes>();
const ProfileStack = createStackNavigator<ProfileInfoRoutes>();
export default function AccountNavigator() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Dashboard"
    >
      <Screen name="Dashboard" component={AllAccount} />
      <Screen name="ProfileNavigator" component={ProfileNavigator} />
    </Navigator>
  );
}

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileEntry" component={ProfileEntry} />
      <ProfileStack.Screen name="AccountSet" component={AccountSet} />
      <ProfileStack.Screen name="Booked" component={Booked} />
    </ProfileStack.Navigator>
  );
};
