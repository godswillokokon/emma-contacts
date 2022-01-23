# Emma

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)
- [React Native](https://reactnative.dev/docs/getting-started)

## Base dependencies

- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.

## Folder structure

- `__tests__`: This folder contains all test files.
- `src`: This folder is the main container of all the code inside the application.
    - `assets`: Asset folder contains all media files.
        - `images`: Image contains all images.
    - `components`: This Folder contains any common component that is use through-out the app.
    - `constants`: This Folder contains any kind of constant that is use such as WIDTH, HEIGHT, etc.
- `index.d.ts`: This contains all interface and type used in this project.
- `data.js`: This is mock data.
- `App.js`: Main component that starts the whole app.
- `index.js`: Entry point of the application as per React-Native standards.

## How to start app

- Go to the project's root directory on your terminal and run `npm install` or `yarn` to install all dependencies of the project.
- If you are using Xcode 12.5 or higher got to /ios and execute `pod install`
- On the root directory run `npm run ios` or `npm run android` to start the application!

(Using yarn: `yarn ios` or `yarn android`)

- If you do prefer to use `npx` run `npx react-native run-android` or `npx react-native run-ios`

## How to test app

- In the project's root directory on your terminal run `yarn test` or `npm test` to execute all tests.