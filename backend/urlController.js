const Urls = require('./urlModel')
const { nanoid }  = require('nanoid')
const asyncHandler = require('express-async-handler')

const generateURL = asyncHandler(async(req, res) =>  {
  const urlExists = await Urls.findOne({originalUrl: req.body.url})

  if (urlExists){
    res.status(400)
    return res.json({
      message: 'Already Exists',
    })
  }
  
  const urlDetails = await Urls.create({
    originalUrl: req.body.url,
    shortenID: nanoid(7),
  })

  res.status(200).json({
    ogUrl: req.body.url,
    shortUrl: `${req.protocol}://${req.get('host')}${req.originalUrl}}${urlDetails.shortenID}`
  });
})

const redirect = asyncHandler(async(req, res) => {
  const code = req.params.id;

  const sidExists = await Urls.findOne({shortenID: code})
  console.log(sidExists);
  if (!sidExists){
    res.status(400)
    return res.json({
      message: "Url not shortened."
    })
  }

  res.redirect(sidExists.originalUrl)
})

module.exports = {
  generateURL,
  redirect
}