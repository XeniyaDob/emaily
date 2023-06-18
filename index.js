const express = require("express")
const mongoose = require ("mongoose")
const cookieSession = require("cookie-session")
const passport = require("passport")
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.MONGO_URI);

const app = express();

//post, put, or patch request, or anything else with a request.body comes into application
// This middleware will parse the body and then assign it
//to the req.body property of the incoming request object
app.use(bodyParser.json());

app.use(cookieSession({
  //name: 'session',
  keys: [keys.COOKIE_KEY],
  // Cookie Options
  maxAge: 30 * 24 * 60 * 60 * 1000 // set for how long cookie can exists in a browser before they expiered - 30 days
}))
app.use(passport.initialize())
app.use(passport.session())

require("./routes/authRoutes")(app)
require("./routes/billingRoutes")(app);

const port = process.env.PORT || 5000;
// Listen on `port` and 0.0.0.0
app.listen(port, "0.0.0.0", function() {
  // ...
});
