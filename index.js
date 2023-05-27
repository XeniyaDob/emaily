const express = require("express")
const mongoose = require ("mongoose")
const keys = require("./config/keys")
require("./models/User")
require("./services/passport")

mongoose.connect(keys.MONGO_URI)

const app = express()

require("./routes/authRoutes")(app)

const port = process.env.PORT || 5000;
// Listen on `port` and 0.0.0.0
app.listen(port, "0.0.0.0", function() {
  // ...
});
