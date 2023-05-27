const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose")
const keys = require("../config/keys")

const User = mongoose.model("users")
//take user modal and put some identifying piece of info into cookie
passport.serializeUser((user, done) => {
  done(null, user.id)
})
//pull it back out and turn it back into a user at some point in the future
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    })
})
//manage all of authentication by using a cookie
passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({
        googleId: profile.id
      })
      .then((existingUser) => {
        if (existingUser) {
          //we already have a record with given profile ID
          done(null, existingUser)
        } else {
          //we don't have a user record with this ID, make a new record
          new User({
              googleId: profile.id
            })
            .save()
            .then(user => done(null, user))
        }
      })

  }))
