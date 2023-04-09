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
};

export type BankRoutes = {
  Dashboard: undefined;
  Access: undefined;
};
