//prod.js- production keys are here
//DO commit, we need it for production
module.exports = {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  MONGO_URI: process.env.MONGO_URI,
  COOKIE_KEY: process.env.COOKIE_KEY,
  REACT_APP_STRIPE_PUBLISHABLE_KEY:
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
};
