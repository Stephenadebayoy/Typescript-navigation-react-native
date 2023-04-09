import { ColorValue, TextProps, TextStyle } from "react-native";

export type TextStyleType = TextStyle | TextStyle[];

type Variants =
  | "title"
  | "body"
  | "bold"
  | "extraBold"
  | "light"
  | "medium"
  | "semiBold";

export interface Props extends TextProps {
  children: React.ReactNode;
  style?: TextStyleType;
  variant?: Variants;
  color?: ColorValue;
  size?: number;
  lineHeight?: number;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  textAlign?: "left" | "right" | "center" | "justify";
}

export interface TextStyleProps {
  fontSize?: number;
  numberOfLines?: number;
  fontFamily?:
    | "OpenSans_400Regular"
    | "OpenSans_300Light"
    | "OpenSans_400Regular"
    | "OpenSans_500Medium"
    | "OpenSans_600SemiBold"
    | "OpenSans_700Bold"
    | "OpenSans_800ExtraBold";
}
