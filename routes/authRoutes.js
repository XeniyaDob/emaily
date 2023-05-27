const passport = require("passport")

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  )

  app.get("/auth/google/callback",
    passport.authenticate("google"))
//kill cookies
  app.get("/api/logout", (req, res) => {
    req.logout()
    res.send(req.user)
  })

  app.get("/api/current_user", (req, res) => {
    res.send(req.user)
  })
}
//Test steps:
//1 go to - http://localhost:5000/auth/google - you should see "Cannot GET /auth/google/callback", fix it later
//2 see user ID - http://localhost:5000/api/current_user
//3 logout - http://localhost:5000/api/logout - clean window
