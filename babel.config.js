module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@components': './src/components/index',
          '@screens': './src/screens/index',
          '@translations': './src/translations/index',
          '@types': './src/types/index',
          '@utils': './src/utils/',
        },
      },
    ],
  ],
};
