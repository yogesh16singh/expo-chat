import 'dotenv/config';

export default {
  expo: {
    name: "expo-chat",
    slug: "expo-chat",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      googleApiKey: process.env.GOOGLE_API_KEY,  // Read from .env file
      eas: {
        projectId: "581945d5-b9e6-4e0a-8406-a3c408644803",
      },
    },
    updates: {
        url: "https://u.expo.dev/581945d5-b9e6-4e0a-8406-a3c408644803"
      },
      runtimeVersion: {
        policy: "appVersion"
      }
  },
};
