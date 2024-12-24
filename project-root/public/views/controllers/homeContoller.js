// This function will render the homepage (or send other necessary content)
const getHomePage = (req, res) => {
  res.render("index", {
    title: "Home",
    message: "Welcome to your News Website!",
  });
};

module.exports = { getHomePage };
