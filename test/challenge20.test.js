const howManyReindeers = require('../src/challenge20.js')
describe("", () => {
    test("2 reindeers", () => {
        const reindeerTypes = [
            {type: 'Gasoline', weightCapacity: 5},
            {type: 'Diesel', weightCapacity: 1}
        ]

        const gifts = [
            {country: 'Spain', weight: 6}
        ]
        const result = [
            {
                country: 'Spain',
                reindeers: [
                    {type: 'Gasoline', num: 1},
                    {type: 'Diesel', num: 1}
                ]
            }]
        expect(howManyReindeers(reindeerTypes, gifts)).toEqual(result)
    })


    test("without the last", () => {
        const reindeerTypes = [
            {type: 'Electric', weightCapacity: 10},
            {type: 'Gasoline', weightCapacity: 5},
            {type: 'Diesel', weightCapacity: 1}
        ]

        const gifts = [
            {country: 'Spain', weight: 16}
        ]

        const result = [
            {
                country: 'Spain',
                reindeers: [
                    {type: 'Electric', num: 1},
                    {type: 'Gasoline', num: 1},
                    {type: 'Diesel', num: 1}
                ]
            }
        ]

        expect(howManyReindeers(reindeerTypes, gifts)).toEqual(result)
    })

    test("custom 1", () => {
        const reindeerTypes = [
            {type: 'Nuclear', weightCapacity: 50},
            {type: 'Electric', weightCapacity: 10},
            {type: 'Gasoline', weightCapacity: 5},
            {type: 'Diesel', weightCapacity: 1}
        ]

        const gifts = [
            {country: 'Spain', weight: 30},
            {country: 'Spain', weight: 7}
            ,
            {country: 'France', weight: 17},
            {country: 'Italy', weight: 50}
        ]

        const result = [
            {
                country: 'Spain',
                reindeers: [
                    {type: 'Electric', num: 2},
                    {type: 'Gasoline', num: 2},
                    {type: 'Diesel', num: 7}
                ]
            }
            ,
            {
                country: 'France',
                reindeers: [
                    {type: 'Electric', num: 1},
                    {type: 'Gasoline', num: 1},
                    {type: 'Diesel', num: 2}
                ]
            }
            ,
            {
                country: 'Italy',
                reindeers: [
                    {type: 'Electric', num: 3},
                    {type: 'Gasoline', num: 3},
                    {type: 'Diesel', num: 5}
                ]
            }
        ]

        expect(howManyReindeers(reindeerTypes, gifts)).toEqual(result)
    })

    test("example 5", () => {
        const reindeerTypes = [
            {type: 'Diesel', weightCapacity: 1},
            {type: 'Gasoline', weightCapacity: 5}
        ]

        const gifts = [
            {country: 'Spain', weight: 30},
            {country: 'Germany', weight: 7}
        ]

        const result = [
            {
                "country": "Spain",
                "reindeers": [
                    {
                        "type": "Gasoline",
                        "num": 5
                    },
                    {
                        "type": "Diesel",
                        "num": 5
                    }
                ]
            },
            {
                "country": "Germany",
                "reindeers": [
                    {
                        "type": "Gasoline",
                        "num": 1
                    },
                    {
                        "type": "Diesel",
                        "num": 2
                    }
                ]
            }
        ]

        expect(howManyReindeers(reindeerTypes, gifts)).toEqual(result)
    })

})
