// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  amplify: {
    Auth: {
      identityPoolId: 'us-west-2:855a1f0d-479e-4cb6-bfe9-bc648ca09f83',
      region: 'us-west-2',
      userPoolId: 'us-west-2_dgo4eFYnc',
      userPoolWebClientId: '18j08hsapglcrrniv5fn1madb4'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
