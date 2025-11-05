const express = require("express");
const router = express.Router();
const User = require("../model/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");

//signup form, signedup logic
router
  .route("/signup")
  .get(userController.renderSignupForm)
  .post(wrapAsync(userController.signupUser));

//login form, loggedIn logic
router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.loginUser
  );

// loggedOut logic
router.get("/logout", userController.logoutUser);

module.exports = router;
