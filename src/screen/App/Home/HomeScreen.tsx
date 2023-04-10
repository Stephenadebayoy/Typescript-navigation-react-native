import { Button, FlatList, TouchableOpacity, View } from "react-native";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { AppRoute, TabRoutes, useRootNavigationProp } from "navigation/types";
import { Icon } from "../../../assets";
import { GColors } from "../../../constants";
import { BottomSheet, BSHandle, Handles } from "../../../components";
import { width } from "../../../constants/Layout";
import { allWordData } from "../../../data";

type Allprops = {
  name: string;
  place: string;
  onPress: () => void;
};
// RenderItem =({name,place}:{name:string;place:string})
const RenderItem = ({ name, place, onPress }: Allprops) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          elevation: 20,
          shadowOpacity: 0.2,
          backgroundColor: GColors.background,
          flexDirection: "row",
          width: width / 1.2,
          height: 50,
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Text>{name}</Text>
        <Text>{place}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function HomeScreen() {
  const ref = useRef<Handles>(null);
  const navigation =
    useNavigation<useRootNavigationProp<AppRoute, TabRoutes, "Home">>();
  const handleAccountSettings = () => {
    navigation.navigate("AccountNavigator", { screen: "Dashboard" });
  };
  return (
    <View
      style={{ marginTop: 100, justifyContent: "center", alignItems: "center" }}
    >
      <Text>HomeScreen</Text>
      <Icon
        name="settings"
        color={GColors.black}
        onPress={handleAccountSettings}
      />

      <Button
        title="Settings"
        onPress={() =>
          navigation.navigate("TabNavigator", { screen: "Settings" })
        }
      />
      <View style={{ marginVertical: 20 }}>
        {/* <Button
          title="Bank"
          onPress={() =>
            navigation.navigate("BankNavigator", { screen: "Dashboard" })
          }
        /> */}
        <Button title="Open" onPress={() => ref.current?.handleOpen()} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={allWordData}
          keyExtractor={(_, i) => String(i)}
          style={{ paddingVertical: 10 }}
          renderItem={({ item }) => (
            <RenderItem
              name={item.title}
              place={item.location}
              onPress={() =>
                navigation.navigate("BankNavigator", {
                  screen: "Dashboard",
                  params: { item },
                })
              }
            />
          )}
        />
        <BottomSheet ref={ref}>
          <BSHandle />
          <View style={{ marginVertical: 50 }}>
            <Text>hey</Text>
          </View>
        </BottomSheet>
      </View>
    </View>
  );
}
