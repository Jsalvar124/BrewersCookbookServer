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
    fermentables.push({ name, potential, color })
  })

  const hops = []

  parsedJson.hops.forEach(hop => {
    const { name, amount, use, time, ibu, alpha } = hop
    hops.push({ name, alpha })
  })

  const yeasts = []

  parsedJson.yeasts.forEach(yeast => {
    const { name, type, amount } = yeast
    yeasts.push({ name, type })
  })

  const miscs = []

  parsedJson.miscs.forEach(misc => {
    const { name, type, amount, unit, notes } = misc
    if (type === 'Flavor' || type === 'Herb' || type === 'Spice') {
      miscs.push({ name, type, amount, unit, notes })
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

  const { beerStyles } = require('../../mock/styles')

  const beerStyleId = beerStyles.indexOf(parsedJson.style.name) + 1

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
    notes: parsedJson.notes,
    mashTemperature: mash[0].stepTemp,
    mashTime: mash[0].stepTime,
    mashOutTemperature: mash[1]?.stepTemp ?? null,
    mashOutTime: mash[1]?.stepTime ?? null,
    primaryFermentationTemperature: fermentation[0].stepTemp,
    primaryFermentationTime: fermentation[0].stepTime,
    seccondaryFermentationTemperature: fermentation[1]?.stepTemp ?? null,
    seccondaryFermentationTime: fermentation[1]?.stepTime ?? null,
    EstiloId: beerStyleId // beer style according to BJCP
  }
  console.log(newRecepie.name, newRecepie.EstiloId)

  return { newRecepie, fermentables, hops, yeasts, miscs }
}

const jsonRecepies = ['Brewfather_RECIPE_BrewdogPunkIPAClone_20231123.json',
  'Brewfather_RECIPE_ChocolateCoffeeStout_20231123.json',
  'Brewfather_RECIPE_GuinessClone_20231123.json',
  'Brewfather_RECIPE_Lefte_20231130.json',
  'Brewfather_RECIPE_BrewDogHazyJaneCloneDIYDog268_20231123.json',
  'Brewfather_RECIPE_JuicyNEIPA_20231123.json',
  'Brewfather_RECIPE_SierraNevadaPaleAle_20231123.json',
  'Brewfather_RECIPE_Pilsner_20231211.json'

]
// Inicializar arrays
const recepiesArray = []
let sampleMaltas = []
let sampleLevaduras = []
let sampleLupulos = []
let sampleMiscs = []

// Remove duplicates function
function removeDuplicates (array) {
  const uniqueNames = []
  const uniqueItems = array.filter(item => {
    if (!uniqueNames.includes(item.name)) {
      uniqueNames.push(item.name)
      return true
    } else return false
  })
  return uniqueItems
}

jsonRecepies.forEach((file, index) => {
  const fileRoute = `./mock/json/${file}`
  const { newRecepie, yeasts, hops, miscs, fermentables } = extractJsonRecepie(fileRoute)
  recepiesArray.push(newRecepie)
  const miscsWithId = miscs.map(misc => ({ ...misc, RecetaId: index + 1 }))
  sampleMaltas = [...sampleMaltas, ...fermentables]
  sampleLevaduras = [...sampleLevaduras, ...yeasts]
  sampleLupulos = [...sampleLupulos, ...hops]
  sampleMiscs = [...sampleMiscs, ...miscsWithId]

  sampleLupulos = removeDuplicates(sampleLupulos)
  sampleLevaduras = removeDuplicates(sampleLevaduras)
  sampleMaltas = removeDuplicates(sampleMaltas)
  sampleMiscs = removeDuplicates(sampleMiscs)
})

// console.log(sampleMaltas)
// console.log(sampleLupulos)
// console.log(sampleLevaduras)
// console.log(sampleMiscs)

module.exports = { recepiesArray, sampleMaltas, sampleLevaduras, sampleLupulos, sampleMiscs }
