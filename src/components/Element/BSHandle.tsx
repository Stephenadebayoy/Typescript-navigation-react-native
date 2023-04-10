import React from "react";
import { StyleSheet, View } from "react-native";

import { GColors } from "../../constants";

export default function BSHandle(): JSX.Element | null {
  return (
    <View style={[styles.handle, { backgroundColor: GColors.darkGrey }]} />
  );
}

const styles = StyleSheet.create({
  handle: {
    alignSelf: "center",
    borderRadius: 5,
    height: 2,
    marginBottom: 15,
    width: 150,
  },
});
