module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: './env/.dev', // Path to your environment file
      blocklist: null,
      allowlist: null,
      safe: false,
      allowUndefined: true,
    }]
  ],
};
