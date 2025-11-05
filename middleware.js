const Blog = require("./model/blogs");
const { blogSchema } = require("./schema.js");
const ExpressError = require("./utils/ExpressError");

//Schema validation using Joi
module.exports.validateBlog = (req, res, next) => {
  let { error } = blogSchema.validate(req.body);
  if (error) {
    const errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Middleware to check if user is logged in
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "you must be logged in to post a blog!");
    return res.redirect("/login");
  }
  next();
};


// Middleware to save redirect URL
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  } else {
    res.locals.redirectUrl = "/blogs";
  }
  next();
};


// Authorization middleware to check blog ownership
module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  const blog = await Blog.findById(id);
  if (!blog.owner._id.equals(res.locals.currentUser._id)) {
    req.flash("error", "You do not have permission to do that!");
    return res.redirect(`/blogs/${id}`);
  }
  next();
};
