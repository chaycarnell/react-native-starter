# React Native Quick Start

A basic React Native boilerplate bundled with a few packages and utilities to improve developer experience.

## Setup:

Current version of this template should be used with:

- NPM v6.9.0
- Node v12.6

This does make a difference!

## Usage:

This boilerplate has been built using:

- GraphQL with a provider template configured to handle errors and subscriptions
- Styled Components (for native)
- React Navigation 5 (with a custom helper utility)
- App state event listeners
- Linking event listeners and utility functions
- React Native Config for environment variables, see the [docs here](https://github.com/luggit/react-native-config)
- React Native Bootsplash, see the [docs here](https://github.com/zoontek/react-native-bootsplash)
- Scaling utility functions for ensuring content scales correctly across different device sizes

SafeArea and StatusBar have already been set to avoid common issues with content overlapping device notches, or status bar content being insvisible/overlapped.

### Sentry:

[Sentry](https://sentry.io/welcome/) is highly advised as a way of monitoring the stability of the application, inspecting bug reports and getting useful performance based data.

A util has been added that allows easy implementation of Sentry if desired.

### Aliases:

Some aliases have been configured, for example @screens, @components, addtional aliases can be added, and will require configuration in the following files:

- tsconfig.json
- babel.config.js
- eslintrc.js

### Scripts:

**To run the app in debug mode:**

```bash
npm run ios | android
```

**To run the app in release mode:**

```bash
npm run ios:release | android:release
```

**To rename:**

```bash
npm run rename <new_app_name> -b <new_bundle_id>
```

**To install pods:**

```bash
npm run ios:pods
```

**To clear your development environment and start from fresh (if things go wrong!):**

```bash
npm run nuke
```

## Useful resources:

React Native developer documentation: https://reactnative.dev/docs/getting-started

There's a few tools online that make creating app icons easy, for example: https://appicon.co/
