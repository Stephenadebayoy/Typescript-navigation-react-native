/* eslint-disable sort-keys */
import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");
const tiny = width < 325;
const small = width >= 325 && width < 350; //325 > width > 350
// const medium = width >= 350 && width < 450;
// const large = width >= 450;

//Should we convert this to a hook?? With useDimension?
export default {
  isSmallDevice: small,
  isTinyDevice: tiny,
  sizes: {
    //fonts
    body: tiny ? 12 : small ? 13 : 14,
    medium: tiny ? 14 : small ? 15 : 16,
    small: tiny ? 10 : small ? 12 : 14,
    tiny: tiny ? 8 : small ? 10 : 12,
    title: tiny ? 16 : small ? 18 : 20,
    large: tiny ? 18 : small ? 20 : 22,
    xLarge: tiny ? 20 : small ? 22 : 24,
    titleLarge: tiny ? 18 : small ? 20 : 24,

    //spacing
    padding: small ? 10 : 15,
    spaceTiny: 5,
    spaceSmall: 10,
    space: 20,
    spaceMedium: 30,
    spaceLarge: 40,
    spaceX: 50,
    spaceXL: 80,
    spaceXXL: 100,
    marginBottom: 30,

    //button
    buttonHeight: small ? 40 : 50,
    buttonRadius: small ? 4 : 6,

    //inputs
    FormMarginBottom: 15,
    inputHeight: small ? 50 : 50,
    inputBorderWidth: 1,

    //cards
    wallet: height * 0.2,
    walletWithButton: height * 0.22,
    cardHeader: small ? height * 0.38 : height * 0.4,
    actionCardHeight: 100,
    sectionCardHeight: 60,
    stockCardWidth: small ? width * 0.3 : width * 0.4,
    stockNewsCardHeight: 100,
    productCardWidth: tiny ? 45 : small ? 50 : 70,

    //misc
    radius: small ? 8 : 10,
    icon: 24,
    tabItemHeight: 65,
    // numpadHeight: tiny ? 50 : small ? 60 : 80,
    numpadHeight: 80,

    //Onboard
    slideItemHeight: height * 0.35,
    slideHeight: height * 0.4,
    productSectionPadding: 12,

    //images
    cardImage: 120,
    cardImageLarge: 150,
  },
};
