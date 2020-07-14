module.exports = function (router) {
  //see app\routes.js line 15

  //trust details SECTION

  router.post('/alpha/registration/trust-details/trustees-uk-answer', function (req, res) {

    let trustInUK = req.session.data['trustees-uk']

    if (trustInUK === 'yes') {
      res.redirect('/alpha/registration/trust-details/residency-confirmation')
    } else if (trustInUK === 'no') {
      res.redirect('/alpha/registration/trust-details/all-trustees-outside-uk')
    }
  })

  router.post('/alpha/registration/trust-details/trustees-non-uk-answer', function (req, res) {

    let trustOutsideUK = req.session.data['trustees-non-uk']

    if (trustOutsideUK === 'yes') {
      res.redirect('/alpha/registration/trust-details/residency-confirmation')
    } else if (trustOutsideUK === 'no') {
      res.redirect('/alpha/registration/trust-details/settlors-in-uk')
    }
  })

}
