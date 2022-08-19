be careful microfornt ends takes precedence over modules

# assets https://stackoverflow.com/questions/71364478/how-to-host-assets-with-module-federation-on-angular-and-nx-monorepo

# isolated routing https://stackoverflow.com/questions/71800882/angular-module-federation-how-to-configure-isolated-routing-for-each-remote-mod

# maybes

https://valor-software.com/articles/nx-next-js-and-module-federation
https://gabrielemilan.dev/micro-frontends-in-angular-using-nx-and-module-federation-a30c5a2c1354

https://www.angulararchitects.io/en/aktuelles/using-module-federation-with-monorepos-and-angular/
topologies of hosts and remotes

# steyer github https://github.com/manfredsteyer/nx-and-module-federation

# nrwl

https://github.com/nrwl/ng-module-federation

# federated modules

https://nx.dev/module-federation/dynamic-module-federation-with-angular
login
data-access using service
see about ngrx

# https://nx.dev/module-federation/micro-frontend-architecture

## Shared libraries

Since deployments with MFEs are not atomic, there is a chance that shared libraries -- both external (npm) and workspace -- between the host and remotes are mismatched. The default the Nx setup configures all libraries as singletons, which requires that all affected applications be deployed for any given changeset, and makes à la carte deployments riskier.

There are mitigation strategies that can minimize mismatch errors. One such strategy is to share as little as possible between applications.

For example, you can create a base configuration file that only shares core libraries that have to be shared.

# https://blog.nrwl.io/setup-module-federation-in-angular-with-nx-2f3c5c074d5f

npx nx g @nrwl/angular:host shell --remotes=featureA,featureB,featureC

nx serve shell

# https://www.youtube.com/watch?v=7k0AqqJeWNo

# https://www.youtube.com/watch?v=7k0AqqJeWNo&t=90

# https://www.youtube.com/watch?v=7k0AqqJeWNo&t=158

# https://www.youtube.com/watch?v=7k0AqqJeWNo&t=315

# https://www.youtube.com/watch?v=e8-hBYw5bx0

# https://github.com/nrwl/ng-module-federation

# https://www.angulararchitects.io/en/aktuelles/using-module-federation-with-monorepos-and-angular/

# https://stackoverflow.com/questions/71364478/how-to-host-assets-with-module-federation-on-angular-and-nx-monorepo

# https://gabrielemilan.dev/micro-frontends-in-angular-using-nx-and-module-federation-a30c5a2c1354

# https://stackoverflow.com/questions/71800882/angular-module-federation-how-to-configure-isolated-routing-for-each-remote-mod

# https://stackoverflow.com/questions/73235679/nx-invalid-dynamic-remote-configured-in-module-federation-manifest-json

# https://stackoverflow.com/questions/71019282/issue-sharing-custom-libraries-with-module-federation-plugin

# build time speedup https://www.youtube.com/watch?v=JkcaGzhRjkc

# WEBPACK ??? https://github.com/module-federation/module-federation-examples

webpack?
yes
https://github.com/module-federation/module-federation-examples

shared remotes? https://adarshsomani64.medium.com/motivation-21e4f102677a

# MISTAKES VIDEO https://www.youtube.com/watch?v=0WIFW3s2fDM

versioning https://www.youtube.com/watch?v=ZFNxTy3fOO0
shared app shell state routing https://www.youtube.com/watch?v=-LNcpralkjM

# why https://stackoverflow.com/questions/72934770/why-load-shared-library-from-remote-in-module-federation

# shared singleton https://www.google.com/search?q=Module+Federation+shared+singleton&sa=X&ved=2ahUKEwjJ7Ynt8dH5AhX8j4kEHaiPBrIQ1QJ6BAghEAE

# microfrontend https://www.google.com/search?q=Module+Federation+micro+frontend&sa=X&ved=2ahUKEwjJ7Ynt8dH5AhX8j4kEHaiPBrIQ1QJ6BAgeEAE

# ISSUES shared

https://github.com/nrwl/nx/issues/6923

# ANGULAR SPECIFIC

@angular-architects/module-federation
https://github.com/angular-architects/module-federation-plugin
https://github.com/angular-architects/module-federation-plugin#readme
https://github.com/manfredsteyer/module-federation-plugin-example
Nx Integration
If the plugin detects that you are using Nx (it basically looks for a nx.json), it uses the builders provided by Nx.

#####################Creating our applications
We need to generate two applications that support Module Federation.

We'll start with the Admin Dashboard application which will act as a host application for the Micro-Frontends (MFEs):

Copy

# Npm

npx nx g @nrwl/angular:host dashboard

Copy

# Yarn

yarn nx g @nrwl/angular:host dashboard
The application generator will create and modify the files needed to set up the Angular application.

Now, let's generate the Login application as a remote application.

Copy

# Npm

npx nx g @nrwl/angular:remote login --host=dashboard

Copy

# Yarn

yarn nx g @nrwl/angular:remote login --host=dashboard
--host
We provided --host=dashboard as an option. This tells the generator that this remote application will be consumed by the Dashboard application. The generator will automatically link these two applications together in the module-federation.config.js that gets used in the webpack.config.js.\_

More details
The RemoteEntryModule generated will be imported in app.module.ts file, however, it is not used in the AppModule itself. This is to allow TS to find the Module during compilation, allowing it to be included in the built bundle. This is required for the Module Federation Plugin to expose the Module correctly. You can choose to import the RemoteEntryModule in the AppModule if you wish, however, it is not necessary.\_

# NX https://nx.dev/module-federation/dynamic-module-federation-with-angular

# Npm

npx create-nx-workspace ng-mf --preset=empty

# Yarn

yarn create nx-workspace ng-mf --packageManager=yarn
You'll be prompted for a preset. We recommend selecting empty as it will allow you finer control over your workspace configuration.

You'll also be prompted if you would like to setup Nx Cloud. For this tutorial select No, however, I highly recommend that you read more about it here.

Add the Angular Plugin
To add Angular-related features to our newly created monorepo we need to install the Angular Plugin. Again, this is pretty easy to do:

Be at the root
Check that you are now at the root of your monorepo in your terminal. If not, run cd ng-mf.

Copy

# Npm

npm install --save-dev @nrwl/angular

Copy

# Yarn

yarn add -D @nrwl/angular

# Test

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/react-tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@test/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
