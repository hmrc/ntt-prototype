module.exports = function (router) {

  router.post('/ntt/trust-details/trustees-uk-answer', function (req, res) {

    let trustInUK = req.session.data['trust-details--trustees-all-uk']

    if (trustInUK === 'yes') {
      res.redirect('/ntt/trust-details/residency-confirmation')
    } else if (trustInUK === 'no') {
      res.redirect('/ntt/trust-details/all-trustees-outside-uk')
    }
  })

  router.post('/ntt/trust-details/trustees-non-uk-answer', function (req, res) {

    let trustOutsideUK = req.session.data['trust-details--trustees-all-non-uk']

    if (trustOutsideUK === 'yes') {
      res.redirect('/ntt/trust-details/residency-confirmation')
    } else if (trustOutsideUK === 'no') {
      res.redirect('/ntt/trust-details/settlors-in-uk')
    }
  })
}
