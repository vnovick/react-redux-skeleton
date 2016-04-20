export default (req, res, next) => {
  res.render('app', req.page)
}