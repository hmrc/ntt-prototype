module.exports = function (router) {

  router.post('/ntt/trustees/trustee-name--redirect', function (req, res) {

    let leadTrustee = req.session.data['trustees--lead-trustee']

    if (leadTrustee === 'yes') {
      res.redirect('/ntt/trustees/date-of-birth')
    } else if (leadTrustee === 'no') {
      res.redirect('/ntt/trustees/date-of-birth-known')
    }
  })

  router.post('/ntt/trustees/date-of-birth-known--redirect', function (req, res) {

    let dateOfBirthKnown = req.session.data['trustees--date-of-birth-known']

    if (dateOfBirthKnown === 'yes') {
      res.redirect('/ntt/trustees/date-of-birth')
    } else if (dateOfBirthKnown === 'no') {
      res.redirect('/ntt/trustees/country-of-nationality-known')
    }
  })

  router.post('/ntt/trustees/date-of-birth--redirect', function (req, res) {

    let leadTrustee = req.session.data['trustees--lead-trustee']

    if (leadTrustee === 'yes') {
      res.redirect('/ntt/trustees/has-national-insurance-number')
    } else if (leadTrustee === 'no') {
      res.redirect('/ntt/trustees/nationality-known')
    }
  })

  router.post('/ntt/trustees/nationality-known--redirect', function (req, res) {

    let nationalityKnown = req.session.data['trustees--nationality-known']

    if (nationalityKnown === 'yes') {
      res.redirect('/ntt/trustees/country-of-nationality-uk')
    } else if (nationalityKnown === 'no') {
      res.redirect('/ntt/trustees/country-of-residence-known')
    }
  })

  router.post('/ntt/trustees/has-national-insurance-number--redirect', function (req, res) {

    let hasNINO = req.session.data['trustees--has-nino']

    if (hasNINO === 'yes') {
      res.redirect('/ntt/trustees/national-insurance-number')
    } else if (hasNINO === 'no') {
      res.redirect('/ntt/trustees/passport-country')
    }
  })

  router.post('/ntt/trustees/address-in-uk--redirect', function (req, res) {

    let addressInUK = req.session.data['trustees--address-in-uk']

    if (addressInUK === 'yes') {
      res.redirect('/ntt/trustees/address-uk')
    } else if (addressInUK === 'no') {
      res.redirect('/ntt/trustees/address-non-uk')
    }
  })

  router.post('/ntt/trustees/country-of-nationality-uk--redirect', function (req, res) {

    let nationalityUK = req.session.data['trustees--nationality-uk']
    let leadTrustee = req.session.data['trustees--lead-trustee']

    if (nationalityUK === 'yes' && leadTrustee === 'no') {
      res.redirect('/ntt/trustees/country-of-residence-known')
    } else if (nationalityUK === 'yes' && leadTrustee === 'yes') {
      res.redirect('/ntt/trustees/email')
    } else if (nationalityUK === 'no') {
      res.redirect('/ntt/trustees/country-of-nationality')
    }
  })

  router.post('/ntt/trustees/country-of-nationality--redirect', function (req, res) {

    let leadTrustee = req.session.data['trustees--lead-trustee']

    if (leadTrustee === 'yes') {
      res.redirect('/ntt/trustees/email')
    } else if (leadTrustee === 'no') {
      res.redirect('/ntt/trustees/country-of-residence-known')
    }
  })

  router.post('/ntt/trustees/country-of-residence-known--redirect', function (req, res) {

    let residencyKnown = req.session.data['trustees--residence-known']

    if (residencyKnown === 'yes') {
      res.redirect('/ntt/trustees/country-of-residence-uk')
    } else if (residencyKnown === 'no') {
      res.redirect('/ntt/trustees/check-answers')
    }
  })

  router.post('/ntt/trustees/country-of-residence-uk--redirect', function (req, res) {

    let residencyUK = req.session.data['trustees--residence-uk']

    if (residencyUK === 'yes') {
      res.redirect('/ntt/trustees/check-answers')
    } else if (residencyUK === 'no') {
      res.redirect('/ntt/trustees/country-of-residence')
    }
  })

}
