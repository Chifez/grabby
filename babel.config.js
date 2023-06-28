// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ["babel-preset-expo"],
//     plugins: [
//       "@babel/plugin-proposal-export-namespace-from",
//       "react-native-reanimated/plugin",
//       require.resolve("expo-router/babel"),
//     ],
//   };
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
      [
        "module:react-native-dotenv",
        {
          path: ".env",
        },
      ],
    ],
  };
};

// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ["module:metro-react-native-babel-preset", "babel-preset-expo"],
//     plugins: [
//       "@babel/plugin-proposal-export-namespace-from",
//       "react-native-reanimated/plugin",
//       [
//         "react-native-dotenv",
//         {
//           path: "./.env",
//         },
//       ],
//     ],
//   };
// };
