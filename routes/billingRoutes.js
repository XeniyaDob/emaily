const keys = require("../config/keys");
const stripe = require("stripe")(keys.STRIPE_SECRET_KEY);
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      source: req.body.id,
      description:
        "$5 for 5 credits. My First Test Charge (created for API docs at https://www.stripe.com/docs/api)",
    });
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
