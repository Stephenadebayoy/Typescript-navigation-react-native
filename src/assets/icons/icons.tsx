import { GColors } from "../../constants";
import * as React from "react";
import { TouchableOpacity } from "react-native";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
  size?: number;
  name: IconName;
  color?: string;
  viewBox?: string;
  showWrap?: boolean;
  onPress?: () => void;
}

type Icon = {
  [key in IconName]: JSX.Element;
};

function Icons({
  color: Color,
  name,
  onPress,
  size = 24,
  showWrap,
  viewBox = "0 0 24 24",
  ...props
}: Props): JSX.Element {
  const color = Color || GColors.blue;

  const IconMap: Icon = {
    add: (
      <>
        <Path
          d="M12.25 0.25C9.87663 0.25 7.55655 0.953788 5.58316 2.27236C3.60977 3.59094 2.0717 5.46508 1.16345 7.6578C0.255199 9.85051 0.0175594 12.2633 0.480582 14.5911C0.943605 16.9189 2.08649 19.057 3.76472 20.7353C5.44295 22.4135 7.58115 23.5564 9.90892 24.0194C12.2367 24.4824 14.6495 24.2448 16.8422 23.3365C19.0349 22.4283 20.9091 20.8902 22.2276 18.9168C23.5462 16.9434 24.25 14.6234 24.25 12.25C24.2466 9.06843 22.9813 6.01814 20.7316 3.76843C18.4819 1.51872 15.4316 0.25336 12.25 0.25ZM12.25 22.4038C10.2418 22.4038 8.27862 21.8083 6.60883 20.6926C4.93904 19.5769 3.63759 17.9911 2.86907 16.1357C2.10055 14.2803 1.89947 12.2387 2.29126 10.2691C2.68305 8.29943 3.65011 6.49019 5.07015 5.07015C6.49019 3.65011 8.29943 2.68305 10.2691 2.29126C12.2387 1.89947 14.2803 2.10055 16.1357 2.86907C17.9911 3.63759 19.5769 4.93903 20.6926 6.60882C21.8083 8.27861 22.4038 10.2418 22.4038 12.25C22.4008 14.942 21.33 17.5229 19.4265 19.4265C17.5229 21.33 14.942 22.4008 12.25 22.4038ZM17.7885 12.25C17.7885 12.4948 17.6912 12.7296 17.5181 12.9027C17.345 13.0758 17.1102 13.1731 16.8654 13.1731H13.1731V16.8654C13.1731 17.1102 13.0758 17.345 12.9027 17.5181C12.7296 17.6912 12.4948 17.7885 12.25 17.7885C12.0052 17.7885 11.7704 17.6912 11.5973 17.5181C11.4242 17.345 11.3269 17.1102 11.3269 16.8654V13.1731H7.63462C7.3898 13.1731 7.15502 13.0758 6.98191 12.9027C6.8088 12.7296 6.71154 12.4948 6.71154 12.25C6.71154 12.0052 6.8088 11.7704 6.98191 11.5973C7.15502 11.4242 7.3898 11.3269 7.63462 11.3269H11.3269V7.63461C11.3269 7.3898 11.4242 7.15501 11.5973 6.9819C11.7704 6.80879 12.0052 6.71154 12.25 6.71154C12.4948 6.71154 12.7296 6.80879 12.9027 6.9819C13.0758 7.15501 13.1731 7.3898 13.1731 7.63461V11.3269H16.8654C17.1102 11.3269 17.345 11.4242 17.5181 11.5973C17.6912 11.7704 17.7885 12.0052 17.7885 12.25Z"
          fill={color}
        />
      </>
    ),

    apple: (
      <Path
        d="M6.83225 23.5515C6.35907 23.2367 5.93969 22.8477 5.59025 22.3995C5.20586 21.9369 4.84972 21.4515 4.52375 20.946C3.75881 19.8254 3.15893 18.6006 2.7425 17.3092C2.24225 15.8092 2 14.3715 2 12.9652C2 11.3947 2.33975 10.0238 3.00425 8.87175C3.49683 7.97133 4.22106 7.21888 5.102 6.69225C5.95573 6.16198 6.93668 5.87179 7.9415 5.85225C8.29325 5.85225 8.672 5.90325 9.074 6.00075C9.36275 6.0825 9.7145 6.2115 10.1442 6.372C10.691 6.58275 10.9917 6.71175 11.0937 6.74325C11.414 6.86025 11.6832 6.91125 11.8947 6.91125C12.0552 6.91125 12.2817 6.86025 12.539 6.78225C12.6837 6.73125 12.9567 6.64125 13.3475 6.474C13.7345 6.333 14.039 6.21225 14.2812 6.12225C14.6525 6.01275 15.0117 5.9115 15.332 5.8605C15.7117 5.80065 16.097 5.78479 16.4802 5.81325C17.1445 5.85666 17.7987 5.99742 18.422 6.231C19.4412 6.64125 20.2655 7.28175 20.879 8.19225C20.6197 8.35207 20.3763 8.53642 20.1522 8.74275C19.6645 9.17518 19.249 9.68284 18.9215 10.2465C18.4935 11.0168 18.2716 11.8845 18.2772 12.7657C18.293 13.848 18.5705 14.8012 19.1173 15.6255C19.5192 16.2364 20.0416 16.7588 20.6525 17.1607C20.9652 17.3715 21.2345 17.5162 21.4925 17.6137C21.3717 17.9887 21.2427 18.3517 21.0905 18.7117C20.7452 19.519 20.3267 20.293 19.8402 21.024C19.4067 21.6532 19.067 22.122 18.809 22.434C18.407 22.9102 18.02 23.274 17.6292 23.5275C17.1995 23.8125 16.6917 23.9647 16.1757 23.9647C15.8263 23.9782 15.4769 23.9359 15.1407 23.8395C14.852 23.742 14.5662 23.6363 14.285 23.5155C13.9926 23.3812 13.6911 23.2677 13.3827 23.1757C12.6205 22.98 11.8214 22.9787 11.0585 23.172C10.7457 23.262 10.445 23.367 10.148 23.496C9.73025 23.6715 9.45275 23.7892 9.29225 23.8395C8.972 23.9332 8.63975 23.9917 8.30375 24.0112C7.784 24.0112 7.2995 23.8628 6.8195 23.562L6.83225 23.5515ZM13.6872 5.09025C13.0077 5.43 12.359 5.57475 11.7147 5.5275C11.6135 4.87875 11.7147 4.215 11.984 3.48825C12.2132 2.87255 12.5519 2.30339 12.9837 1.80825C13.4398 1.28702 13.9931 0.859782 14.6128 0.5505C15.2727 0.21075 15.902 0.027 16.5035 0C16.5815 0.6795 16.5035 1.34775 16.2537 2.07C16.0226 2.70846 15.6845 3.30295 15.254 3.828C14.8145 4.34995 14.2752 4.77884 13.6677 5.0895L13.6872 5.09025Z"
        fill={color}
      />
    ),
    settings: (
      <>
        <Path
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
          fill={color}
        />
        <Path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" fill={color} />
      </>
    ),
  };

  return showWrap ? (
    <TouchableOpacity
      {...{ onPress }}
      style={{
        width: size + 10,
        height: size + 10,
        borderRadius: (size + 10) / 4,
        padding: (size + 10) / 3.7,
        backgroundColor: `${color || GColors.accent}33`,
      }}
    >
      <Svg
        width={(size + 10) / 2}
        height={(size + 10) / 2}
        viewBox={viewBox}
        fill="none"
        {...props}
      >
        {IconMap[name]}
      </Svg>
    </TouchableOpacity>
  ) : (
    <Svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      {...props}
      {...{ onPress }}
    >
      {IconMap[name]}
    </Svg>
  );
}

export default React.memo(Icons);
