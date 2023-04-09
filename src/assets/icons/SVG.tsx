import * as React from "react";
import { ColorValue } from "react-native";
import Svg, {
  Defs,
  LinearGradient,
  Path,
  Stop,
  SvgProps,
} from "react-native-svg";

interface Props extends SvgProps {
  size?: number;
  viewBox?: string;
  name: SVGName;
  color?: ColorValue;
  onPress?: () => void;
}

type Icon = {
  [key in SVGName]: JSX.Element;
};

export default function SvgComponent({
  name,
  color,
  size = 24,
  viewBox,
  ...props
}: Props): JSX.Element {
  const SVGMap: Icon = {
    steve: (
      <>
        <Path
          d="M510.6 17.59C465.77 5.94 416.5 0 363.13 0H99.52C36.91 0 0 38.22 0 103.46V846.84C0 912.74 36.91 950.96 99.52 950.96H363.13C648.48 950.96 816.53 773.69 816.53 471.85C816.53 226.47 705.47 68.21 510.6 17.58V17.59ZM551.74 492.04C552.77 560.54 563.73 588.63 541.58 621.81C539.92 624.3 527.82 642.07 508.08 653.19C504.59 655.15 500.9 656.87 497.04 658.38C479.84 668.46 460.74 672.65 440.16 671.82C429.3 671.39 418.51 670.12 407.81 668.09C393.69 665.41 380.12 661.12 367.28 654.64C349.82 645.83 335.06 633.52 321.52 619.61C318.22 616.21 315 612.74 311.84 609.23C304.02 601.66 297.02 593.45 291.11 584.64C288.09 580.88 285.09 577.1 282.11 573.3C278.43 568.63 274.76 563.96 271.11 559.28C241.76 521.68 239.73 520.86 233.48 511.31C220.38 491.26 212.59 479.33 213.04 463.64C213.25 456.47 215.24 446.57 237.6 418.34C253.67 398.04 262.56 391.53 305.8 348.18C318.66 335.29 331.95 322.88 346.37 311.7C374.91 289.54 407.27 278.91 443.3 279.13C446.1 279.14 448.9 279.13 451.69 279.06C452.51 279.05 453.33 279.06 454.15 279.1L462.9 279.56C463.87 279.61 464.83 279.74 465.78 279.9C465.93 279.93 466.1 279.95 466.25 279.97C482.11 281.61 496.95 286.42 510.33 295.11C527.23 306.08 537.11 319.36 541.02 325.46C541.02 325.46 553.66 345.24 556.22 372.61C561.61 399.83 550.65 421.22 551.71 492.05L551.74 492.04Z"
          fill="url(#paint0_linear_3349_9373)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_3349_9373"
            x1="408.27"
            y1="1179.61"
            x2="408.27"
            y2="228.64"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#EE2464" />
            <Stop offset="0.0001" stopColor="#EE2464" />
            <Stop offset="0.24" stopColor="#E4236A" />
            <Stop offset="0.63" stopColor="#C9227A" />
            <Stop offset="1" stopColor="#AA218E" />
          </LinearGradient>
        </Defs>
      </>
    ),
  };

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 817 951"
      fill="none"
      {...props}
    >
      {SVGMap[name]}
    </Svg>
  );
}
