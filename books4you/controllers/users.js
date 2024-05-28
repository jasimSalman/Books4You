const Book = require('../models/book')

//This function will show all the categories on the main page.
async function index(req, res) {
  try {
    const category = req.params.category
    // console.log(category)
    let Books = await Book.find({ category: category })
    res.render('users/index', {
      Books,
      title: 'Users Page',
      path: req.originalUrl
    })
    console.log(JSON.stringify(Books))
  } catch (e) {
    console.error(e)
    res.redirect('/users')
  }
}

// async function show(req, res) {
//   const book = await Book.findById(req.params.id)
//   res.render("users/show", { title: "Book", book })
// }

module.exports = {
  index
  // show,
}