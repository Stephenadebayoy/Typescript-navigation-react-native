import { Button, StyleSheet, View } from "react-native";
import React, { useState } from "react";

// import { useDotDispatch, setIsUserOnboarded } from '@store'
import { GColors } from "../../constants";
import { Text } from "../../components";
import { OnboardRoutes, StackNavigationProps } from "@navigation";

export default function Onboarding({
  navigation,
}: StackNavigationProps<OnboardRoutes, "Onboard">) {
  const [page, setPage] = useState(0);
  //   const dispatch = useDotDispatch()
  const Pagination = () => {
    return (
      <View style={styles.flexWrap}>
        <View style={page === 0 ? styles.line : styles.check} />
        <View style={page === 1 ? styles.line : styles.check} />
        <View style={page === 2 ? styles.line : styles.check} />
      </View>
    );
  };

  const { title, description } = (() => {
    switch (page) {
      case 1:
        return {
          title: "Make it",
          description: "bank it out",
        };
      case 2:
        return {
          title: "Join now",
          description: "We are here to join",
        };

      default:
        return {
          title: "Try it out",
          description: "The globe is waiting",
        };
    }
  })();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Pagination />

      <Text variant="title" textAlign="center">
        {title}
      </Text>

      <Text textAlign="center" style={{ width: "75%", alignSelf: "center" }}>
        {description}
      </Text>

      <Button title="Move" onPress={() => navigation.navigate("Onboard")} />

      <Button
        title="Next"
        onPress={() =>
          page < 2
            ? setPage((prev) => prev + 1)
            : navigation.navigate("Onboard")
        }
      />
      <Button
        title="Skip"

        // onPress={() => dispatch(setIsUserOnboarded())}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  imgWrap: {
    height: 250,
    alignItems: "center",
    alignSelf: "center",
    width: 250,
    marginTop: 30,
    marginBottom: 20,
  },
  check: {
    backgroundColor: GColors.altBG,
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  line: {
    backgroundColor: GColors.activeTintTabColor,
    height: 10,
    width: 50,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  flexWrap: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
