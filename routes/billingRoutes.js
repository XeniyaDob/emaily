const c = require("config");
const keys = require("../config/keys");
const stripe = require("stripe")(keys.STRIPE_SECRET_KEY);

module.exports = (app) => {
  app.post("/api/stripe", async (req, res) => {
    // `source` is obtained with Stripe.js;
    // see https://stripe.com/docs/payments/accept-a-payment-charges#web-create-token
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      source: req.body.id,
      description:
        "$5 for 5 credits. My First Test Charge (created for API docs at https://www.stripe.com/docs/api)",
    });
    console.log("Charge", charge);
  });
};
