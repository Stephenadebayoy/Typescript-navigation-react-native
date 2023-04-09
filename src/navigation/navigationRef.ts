import { createNavigationContainerRef } from "@react-navigation/native";

import { AppRoute } from "./types";

export const navigationRef = createNavigationContainerRef<AppRoute>();

// type Params = typeof navigationRef.navigate;

// export function navigate(
//   name: keyof AppRoute,
//   { params }: Parameters<Params>['0'],
// ) {
//   if (navigationRef.isReady()) {
//     console.log('Navigation is Ready');
//     navigationRef.navigate(name, params);
//   }
// }

// let P: Parameters<typeof navigationRef.navigate[1  ]>;

// P.

// add other navigation functions that you need and export them
