const Book = require("../models/book")

async function index(req, res) {
  try {
    const category = req.params.category
    console.log(category)
    let Books = await Book.find({ category: category })
    res.render("users/index", { Books, title: "Users Page" })
    console.log(JSON.stringify(Books))
  } catch (e) {
    console.error(e)
    res.redirect("/users")
  }
}

module.exports = {
  index,
}
