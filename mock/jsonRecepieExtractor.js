const fs = require('fs')

function extractJsonRecepie (jsonFile) {
  // Read the JSON file
  const jsonRecepie = fs.readFileSync(jsonFile, 'utf-8')

  // Parse the JSON string into a JavaScript object
  const parsedJson = JSON.parse(jsonRecepie)

  // extract relevant information
  const fermentables = []

  parsedJson.fermentables.forEach(fermentable => {
    const { name, potential, amount, color } = fermentable
    fermentables.push({ name, potential, amount, color })
  })

  const hops = []

  parsedJson.hops.forEach(hop => {
    const { name, amount, use, time, ibu, alpha } = hop
    hops.push({ name, amount, use, time, ibu, alpha })
  })

  const yeasts = []

  parsedJson.yeasts.forEach(yeast => {
    const { name, type, amount } = yeast
    yeasts.push({ name, type, amount })
  })

  const miscs = []

  parsedJson.miscs.forEach(misc => {
    const { name, type, amount, unit } = misc
    if (type === 'Flavor' || type === 'Herb' || type === 'Spice') {
      miscs.push({ name, type, amount, unit })
    }
  })

  const mash = []

  parsedJson.mash.steps.forEach(mashItem => {
    const { name, stepTemp, stepTime } = mashItem
    mash.push({ name, stepTemp, stepTime })
  })

  const fermentation = []

  parsedJson.fermentation.steps.forEach(fermentationItem => {
    const { type, stepTemp, stepTime } = fermentationItem
    fermentation.push({ type, stepTemp, stepTime })
  })
  // get image url
  const imageUrl = parsedJson.img
  const token = '6b76e620-2001-49cc-876b-252e0d6e5da1'

  // Replace "/" with "%2F" in the image path
  const encodedImagePath = imageUrl.replace(/\//g, '%2F')

  // final URL
  const finalUrl = `https://firebasestorage.googleapis.com/v0/b/brewfather-app.appspot.com/o/${encodedImagePath}?alt=media&token=${token}`

  const newRecepie = {
    name: parsedJson.name,
    author: parsedJson.author,
    image: finalUrl,
    type: parsedJson.type, // all grain
    alcoholByVolume: parsedJson.abv, // alcohol by volume
    originalGravity: parsedJson.og, // original gravity
    finalGravity: parsedJson.fg, // final gravity
    ibu: parsedJson.ibu, // international bitterness unit
    colorSRM: parsedJson.color, // EBC (European Brewery Convention) color index
    batchSize: parsedJson.batchSize, // final production volume
    mashWaterAmount: parsedJson.data.mashWaterAmount, // water for mash
    spargeWaterAmount: parsedJson.data.spargeWaterAmount, // water for sparge
    boilTime: parsedJson.boilTime, // boiling time
    style: parsedJson.style, // beer style according to BJCP
    notes: parsedJson.notes,
    fermentables,
    hops,
    yeasts,
    miscs,
    mashTemperature: mash[0].stepTemp,
    mashTime: mash[0].stepTime,
    mashOutTemperature: mash[1]?.stepTemp ?? null,
    mashOutTime: mash[1]?.stepTime ?? null,
    primaryFermentationTemperature: fermentation[0].stepTemp,
    primaryFermentationTime: fermentation[0].stepTime,
    seccondaryFermentationTemperature: fermentation[1]?.stepTemp ?? null,
    seccondaryFermentationTime: fermentation[1]?.stepTime ?? null
  }
  // Convert the newRecepie object to JSON
  const jsonString = JSON.stringify(newRecepie, null, 2)

  // Use the name attribute as the filename
  const fileName = `${newRecepie.name.replace(/ /g, '_')}.json`

  // Write to the file
  fs.writeFileSync(fileName, jsonString, 'utf-8')

  console.log(`File "${fileName}" created successfully.`)
}

const jsonRecepies = [
  // 'Brewfather_RECIPE_BrewdogPunkIPAClone_20231123.json',
  // 'Brewfather_RECIPE_ChocolateCoffeeStout_20231123.json',
  // 'Brewfather_RECIPE_GuinessClone_20231123.json',
  // 'Brewfather_RECIPE_Lefte_20231130.json'
  'Brewfather_RECIPE_BrewDogHazyJaneCloneDIYDog268_20231123.json',
  'Brewfather_RECIPE_JuicyNEIPA_20231123.json',
  'Brewfather_RECIPE_SierraNevadaPaleAle_20231123.json',
  'Brewfather_RECIPE_Pilsner_20231211.json'
]

jsonRecepies.forEach(file => {
  const fileRoute = `./mock/json/${file}`
  console.log(fileRoute)
  extractJsonRecepie(fileRoute)
})
