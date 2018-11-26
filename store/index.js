import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      stockists: [
        {
          area: 'tokyo',
          items: [
            {
              name:     'carol',
              postcode: '〒150-0001',
              address:  '東京都渋谷区神宮前5丁目23-3 長谷部ビル',
              tel:      '03-5778-9596',
              link:     'http://storecarol.com'
            },
            {
              name:     'JOHN',
              postcode: '〒150-0062',
              address:  '東京都渋谷区元代々木町18-8',
              tel:      '03-6407-0177',
              link:     'https://aiamjohn.com'
            },
            {
              name:     'margin',
              postcode: '〒166-0003',
              address:  '東京都杉並区高円寺南4丁目23-2',
              tel:      '03-3313-9190',
              link:     'http://margin.ocnk.net'
            },
          ]
        },
        {
          area: 'miyagi',
          items: [
            {
              name:     'Attic',
              postcode: '〒980-0811',
              address:  '宮城県仙台市青葉区一番町3丁目8',
              tel:      '022-797-7375',
              link:     'http://www.attic-sendai.com'
            },
          ]
        },
        {
          area: 'hiroshima',
          items: [
            {
              name:     'INPUT',
              postcode: '〒730-0029',
              address:  '広島県広島市中区三川町5-4',
              tel:      '082-246-7991',
              link:     'https://www.fastlane2007.com'
            },
          ]
        },
        {
          area: 'kagoshima',
          items: [
            {
              name:     'VOIL',
              postcode: '〒892-0841',
              address:  '鹿児島県鹿児島市照国町14-15',
              tel:      '',
              link:     'https://voil.stores.jp'
            },
          ]
        },
      ]
    })
  })
}

export default createStore