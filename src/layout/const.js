const diaper = {
  img: require('@/assets/img/lillydoo-little-blowballs-design-preview-tp.jpg'),
  title: '10 LILLYDOO WINDELN',
  details: [
    '0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz',
    'Extra weich und super bequem'
  ]
}

const humidTowel = {
  img: require('@/assets/img/water-wipes-15-small.jpg'),
  title: '15 FEUCHTTÜCHER MIT 99 % WASSER',
  details: [
    '0 % Parfüme & PEGs, 100 % biologisch abbaubar',
    'Natürlich rein, extra mild, Alternative zu "Wasser & Watte"'
  ]
}

const sensitiveTowel = {
  img: require('@/assets/img/sensitive-wipes-15-small.jpg'),
  title: '15 SENSITIVE FEUCHTTÜCHER',
  details: [
    '0 % Parfüme & PEGs, 100 % biologisch abbaubar',
    'Extra dickes und kompostierbares Tuch'
  ]
}

export const trialKits = [
  {
    index: 1,
    description: '(2-3KG)',
    img: {
      src: require('@/assets/img/lillydoo-trial-kit-10.jpg'),
      alt: 'Lillydoo Testpaket mit Windeln in Größe 1 und 15 Feuchttüchern'
    },
    active: true,
    content: {
      diaper: diaper,
      towel: humidTowel
    }
  },
  {
    index: 2,
    description: '(3-4KG)',
    img: {
      src: require('@/assets/img/lillydoo-trial-kit-20.jpg'),
      alt: 'Lillydoo Testpaket mit Windeln in Größe 2 und 15 Feuchttüchern'
    },
    active: false,
    content: {
      diaper: diaper,
      towel: humidTowel
    }
  },
  {
    index: 3,
    description: '(4-7KG)',
    img: {
      src: require('@/assets/img/lillydoo-trial-kit-30.jpg'),
      alt: 'Lillydoo Testpaket mit Windeln in Größe 3 und 15 Feuchttüchern'
    },
    active: false,
    content: {
      diaper: diaper,
      towel: humidTowel
    }
  },
  {
    index: 4,
    description: '(7-10KG)',
    img: {
      src: require('@/assets/img/lillydoo-trial-kit-40.jpg'),
      alt: 'Lillydoo Testpaket mit Windeln in Größe 4 und 15 Feuchttüchern'
    },
    active: false,
    content: {
      diaper: diaper,
      towel: sensitiveTowel
    }
  },
  {
    index: 5,
    description: '(10-12KG)',
    img: {
      src: require('@/assets/img/lillydoo-trial-kit-50.jpg'),
      alt: 'Lillydoo Testpaket mit Windeln in Größe 5 und 15 Feuchttüchern'
    },
    active: false,
    content: {
      diaper: diaper,
      towel: sensitiveTowel
    }
  }
]
