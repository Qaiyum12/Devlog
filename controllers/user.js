const User = require("../model/user.js");

module.exports.renderSignupForm = (req, res) => {
  res.render("./user/signup.ejs");
};

module.exports.signupUser = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to devLog!");
      res.redirect("/blogs");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

module.exports.renderLoginForm = (req, res) => {
  res.render("./user/login.ejs");
};

module.exports.loginUser = async (req, res) => {
  // res.send("logged in!");
  req.flash("success", "Welcome back to DevLog!");
  res.redirect(res.locals.redirectUrl);
};


module.exports.logoutUser = (req, res, next) => {
  req.logout((err) => {
    if(err) {
      return next(err);
    }
    req.flash("success", "you logged out successfully!");
    res.redirect("/blogs");
  })
};