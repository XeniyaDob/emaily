const express = require("express")
const mongoose = require ("mongoose")
const cookieSession = require("cookie-session")
const passport = require("passport")
const keys = require("./config/keys")
require("./models/User")
require("./services/passport")

mongoose.connect(keys.MONGO_URI)

const app = express()

app.use(cookieSession({
  //name: 'session',
  keys: [keys.COOKIE_KEY],
  // Cookie Options
  maxAge: 30 * 24 * 60 * 60 * 1000 // set for how long cookie can exists in a browser before they expiered - 30 days
}))
app.use(passport.initialize())
app.use(passport.session())

require("./routes/authRoutes")(app)

const port = process.env.PORT || 5000;
// Listen on `port` and 0.0.0.0
app.listen(port, "0.0.0.0", function() {
  // ...
});
