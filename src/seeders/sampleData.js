/* eslint-disable camelcase */
const fs = require('node:fs')
const path = require('node:path')

const { readFileSync } = fs

const getDataFromJson = () => {
  try {
    const filePath = path.join(__dirname, '../../mock/json/bjcp_styleguide-2021.json')
    const rawData = readFileSync(filePath, { encoding: 'utf8' })
    const jsonData = JSON.parse(rawData) // turn into a js object, it comes as a string, not accesible by JS.
    const { styles } = jsonData.beerjson
    return styles
  } catch (error) {
    console.log({ ErrorMessage: error })
  }
}

const stylesJson = getDataFromJson()
const stylesDB = []

stylesJson.forEach(style => {
  const { name, category, category_id, style_id, category_description, overall_impression, aroma, appearance, flavor, mouthfeel, comments, history, style_comparison, tags, ingredients, examples, style_guide, type } = style
  const styleObject = {
    version: 2.01,
    name,
    category,
    category_id,
    style_id,
    category_description,
    overall_impression,
    aroma,
    appearance,
    flavor,
    mouthfeel,
    comments,
    history: history ?? null,
    style_comparison: style_comparison ?? null,
    tags,
    original_gravity_min: style.original_gravity?.minimum.value ?? null,
    original_gravity_max: style.original_gravity?.maximum.value ?? null,
    ibu_min: style.international_bitterness_units?.minimum.value ?? null,
    ibu_max: style.international_bitterness_units?.maximum.value ?? null,
    final_gravity_min: style.final_gravity?.minimum.value ?? null,
    final_gravity_max: style.final_gravity?.maximum.value ?? null,
    abv_min: style.alcohol_by_volume?.minimum.value ?? null,
    abv_max: style.alcohol_by_volume?.maximum.value ?? null,
    color_min: style.color?.minimum.value ?? null,
    color_max: style.color?.maximum.value ?? null,
    ingredients: ingredients ?? null,
    examples,
    style_guide,
    type
  }
  stylesDB.push(styleObject)
})

// console.log(stylesDB)

const sampleMaltas = [
  {
    name: 'Pale Malt, Ale',
    potential: 1.03795,
    color: 3
  },
  {
    name: 'Candi Sugar, Clear',
    potential: 1.036018,
    color: 0.5
  },
  {
    name: 'Munich, Light',
    potential: 1.038042,
    color: 9
  },
  {
    name: 'Biscuit Malt',
    potential: 1.03496,
    color: 30.4568528
  },
  {
    name: 'Melanoidin',
    potential: 1.0368322,
    color: 30
  },
  {
    name: 'Pale Malt, Maris Otter',
    potential: 1.03795,
    color: 3
  },
  {
    name: 'Barley, Flaked',
    potential: 1.035006,
    color: 2
  },
  {
    name: 'Roasted Barley',
    potential: 1.03404,
    color: 609
  },
  {
    name: 'Pale Ale Malt 2-Row',
    potential: 1.0368,
    color: 3.5
  },
  {
    name: 'Carapils',
    potential: 1.03358,
    color: 1.5
  },
  {
    name: 'Chocolate',
    potential: 1.035,
    color: 350
  },
  {
    name: 'Golden Promise Pale Ale Malt - UK',
    potential: 1.037,
    color: 2.538071
  },
  {
    name: 'Caramel/Crystal 90 - US',
    potential: 1.035,
    color: 90
  }
]

const sampleLupulos = [
  {
    name: 'Chinook',
    alpha: 13
  },
  {
    name: 'Ahtanum',
    alpha: 6
  },
  {
    name: 'Nelson Sauvin',
    alpha: 12
  },
  {
    name: 'Simcoe',
    alpha: 13
  },
  {
    name: 'Cascade',
    alpha: 5.5
  },
  {
    name: 'Amarillo',
    alpha: 9.2
  },
  {
    name: 'East Kent Goldings (EKG)',
    alpha: 4.7
  },
  {
    name: 'Saaz',
    alpha: 3.75
  },
  {
    name: 'Mosaic',
    alpha: 12.25
  }
]

const sampleLevaduras = [
  {
    name: 'Safale American US 05',
    type: 'Ale'
  },
  {
    name: 'SafAle English Ale',
    type: 'Ale'
  },
  {
    name: 'Irish Ale',
    type: 'Ale'
  },
  {
    name: 'Belgian Tripel',
    type: 'Ale'
  },
  {
    name: 'Original Pilsner',
    type: 'Lager'
  },
  {
    name: 'German Lager',
    type: 'Lager'
  }
]

module.exports = {
  sampleMaltas,
  sampleLevaduras,
  sampleLupulos,
  stylesDB
}
