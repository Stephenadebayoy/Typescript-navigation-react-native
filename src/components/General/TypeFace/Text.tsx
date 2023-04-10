import { ColorValue, Text as RNText } from "react-native";
import React from "react";

import { Props, TextStyleProps, TextStyleType } from "./types";

import { GColors, Layout } from "../../../constants";

const { body, large, title, medium } = Layout.sizes;

export default function Text({
  children,
  style,
  color,
  variant,
  size,
  lineHeight,
  textTransform,
  numberOfLines,
  textAlign,
  ...props
}: Props): JSX.Element {
  let textStyle: TextStyleProps = {};
  let paddingVertical = 3.5;

  const defaultStyle: TextStyleType = {
    color: (color as unknown as ColorValue) || GColors.blue,
    lineHeight: lineHeight ? lineHeight : undefined,
  };

  switch (variant) {
    case "body":
      textStyle = {
        ...defaultStyle,
        fontFamily: "OpenSans_400Regular",
        fontSize: size ? size : body,
      };
      break;
    case "bold":
      textStyle = {
        ...defaultStyle,
        fontFamily: "OpenSans_700Bold",
        fontSize: size ? size : body,
      };
      break;
    case "extraBold":
      textStyle = {
        ...defaultStyle,
        fontFamily: "OpenSans_800ExtraBold",
        fontSize: size ? size : large,
      };
      break;
    case "light":
      textStyle = {
        ...defaultStyle,
        fontFamily: "OpenSans_300Light",
        fontSize: size ? size : body,
      };
      break;
    case "medium":
      textStyle = {
        ...defaultStyle,
        fontFamily: "OpenSans_500Medium",
        fontSize: size ? size : medium,
      };
      break;
    case "semiBold":
      textStyle = {
        ...defaultStyle,
        fontFamily: "OpenSans_600SemiBold",
        fontSize: size ? size : body,
      };
      break;
    case "title":
      textStyle = {
        ...defaultStyle,
        fontFamily: "OpenSans_700Bold",
        fontSize: size ? size : title,
      };
      break;
    default:
      textStyle = {
        ...defaultStyle,
        fontFamily: "OpenSans_400Regular",
        fontSize: size ? size : body,
      };
  }

  return (
    <RNText
      numberOfLines={numberOfLines}
      style={[textStyle, { textAlign, textTransform, paddingVertical }, style]}
      {...props}
    >
      {children}
    </RNText>
  );
}
