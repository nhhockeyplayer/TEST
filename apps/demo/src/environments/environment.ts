// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 *
 * We’re using a hybrid approach with a root level .env file containing all of the sensitive key value pairs for all environments and then we have  custom tools/set-environment.ts scripts that run before serve or build steps that use dotenv to read the root .env and yargs to take an argument indicating the runtime environment with fs to dynamically output the appropriate values in project-level env or environment.ts files. There are doubtless better approaches but it works. (edited)
 *
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
