# React Native Quick Start

A basic React Native boilerplate bundled with a few packages and utilities to improve developer experience.

## Usage:

This boilerplate has been built using:

- GraphQL with a provider template configured to handle errors and subscriptions
- Styled Components (for native)
- React Navigation (with a custom helper utility)
- App state event listeners
- Linking event listeners and utility functions
- React Native Config for env vars, with multi environment support (see scripts in package.json)
- React Native Bootsplash has been used to generate splash screens, see docs bootsplash docs on how to set your own
- Scaling utility functions for ensuring content scales correctly across different device sizes

SafeArea and StatusBar have already been set to avoid common issues with content overlapping device notches, or status bar content being insvisible/overlapped.

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
