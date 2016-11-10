# Angular 2 - Webpack - Boilerplate

Boilerplate code to speed up Angular 2 project setup.

This project provides a basic setup for simple up to relatively complex projects. 
It uses Webpack as a module loader to compile Typescript source code to ES5 Javascript syntax.

The key features are:
- Full typescript support
- Dynamic code splitting
- Completely separatable code parts that can be lazy loaded

## Lazy loading

The more an application grows, the larger the compiled javascript code gets. Most of the time the users should not be forced 
to download the complete single-page application data at once.

This project makes use of webpack's code splitting feature. It contains a ngModule called "lazy" (located in the `src/+lazy` 
folder) demonstrates how modules can be completely decoupled. 

The bootstrapped main module, located at `src/app.module.ts`, defines its routes in `src/app.routes.ts`. As the "lazy" module
should be decoupled from the rest of the application, no explicit ES2015 imports should be made. Instead `require.ensure` is 
being used to give webpack the information where we want the code to be splitted. 
In this project webpack then creates a chunk for the "lazy" module, such that the content will only be loaded if needed.

By following the same pattern other modules and even modules within modules can be separated completely.

## Static assets

Static assets should be placed in `resources`. This folder will be copied to the `public` directory once the build process 
is triggered.
