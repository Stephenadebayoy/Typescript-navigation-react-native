import { NavigatorScreenParams } from "@react-navigation/native";

// TabNavigator //////////////////////////////////////////////////
export type TabRoutes = {
  Home: undefined;
  Settings: undefined;
};

// AppRoute /////////////////////////////////////////////////////
export type AppRoute = {
  TabNavigator: NavigatorScreenParams<TabRoutes>;
  BankNavigator: NavigatorScreenParams<BankRoutes>;
  AccountNavigator: NavigatorScreenParams<AccountRoutes>;
};

export type BankRoutes = {
  Dashboard: { item: IAllWordProps };
  Access: { title: string; location: string };
};

export type AccountRoutes = {
  Dashboard: undefined;
  ProfileNavigator: NavigatorScreenParams<ProfileInfoRoutes>;
};
export type ProfileInfoRoutes = {
  ProfileEntry: undefined;
  AccountSet: undefined;
  Booked: undefined;
};

export type OnboardRoutes = {
  Onboard: undefined;
};
