import React, { forwardRef, useImperativeHandle, useState } from "react";
import {
  I18nManager,
  Modal,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

import { GColors } from "../../constants";

export interface Handles {
  handleClose: () => void;
  handleOpen: () => void;
}

interface BottomSheetProps {
  children?: JSX.Element | JSX.Element[];
}

const BottomSheet = forwardRef<Handles, BottomSheetProps>(function (
  { children }: BottomSheetProps,
  ref
): JSX.Element {
  useImperativeHandle(ref, () => ({
    handleClose: () => {
      handleClose();
    },
    handleOpen: () => {
      handleOpen();
    },
  }));

  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <Modal
      supportedOrientations={["portrait", "landscape"]}
      animationType="none"
      transparent={true}
      statusBarTranslucent={true}
      visible={isVisible}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => handleClose()}
        style={{
          backgroundColor: `${GColors.blue}99`,
          bottom: 0,
          flex: 1,
          width: "100%",
        }}
      />
      <View
        style={[
          {
            backgroundColor: GColors.white,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopWidth: 0,
            bottom: 0,
            flex: 1,
            overflow: "hidden",
            position: "absolute",
            width: "100%",
          },
          I18nManager.isRTL ? { right: 0 } : { left: 0 },
        ]}
      >
        <ScrollView style={{ paddingHorizontal: 5 }}>{children}</ScrollView>
      </View>
    </Modal>
  );
});

export default React.memo(BottomSheet);
