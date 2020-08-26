// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB4a9vkyVya6OArUDaQTNRSFAoNliPn680",
  authDomain: "angular-template-two.firebaseapp.com",
  databaseURL: "https://angular-template-two.firebaseio.com",
  projectId: "angular-template-two",
  storageBucket: "angular-template-two.appspot.com",
  messagingSenderId: "167131781486",
  appId: "1:167131781486:web:5cab264e6e90aa462e497f",
  measurementId: "G-N25J12CVT9"
  }
};


// export const snapshotToArray = snapshot => {
//   const returnArray = [];
//   snapshot.forEach(element => {
//     const item = element.val();
//     item.key = element.key;
//     returnArray.push(item);
//   });

//   return returnArray;
// }

// export const snapshotToObject = snapshot => {
//   const returnObject = {};
//   snapshot.forEach(element => {
//     // let item = element.val();
//     // item.key = element.key;
//     returnObject[element.key] = element.val();
//   });

//   return returnObject;
// }
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

