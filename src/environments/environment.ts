// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {firebaseConfig} from 'firebase-functions';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAemj2GTgZBqcUkJf3fWFHykW301wZqDEY',
    authDomain: 'bio-social-media.firebaseapp.com',
    databaseURL: 'https://bio-social-media.firebaseio.com',
    projectId: 'bio-social-media',
    storageBucket: 'bio-social-media.appspot.com',
    messagingSenderId: '413651950234',
    appId: '1:413651950234:web:8e6a448ea010b930addd23',
    measurementId: 'G-BKYBB1S0TY'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
