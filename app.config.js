import 'dotenv/config';

export default {
  expo: {
    extra: {
      googleApiKey: process.env.GOOGLE_API_KEY,
    },
  },
};
