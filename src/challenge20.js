module.exports = function howManyReindeers(reindeerTypes, gifts) {
    const sortWeight = (a, b) => b.weightCapacity - a.weightCapacity
    const reindeerTypesSort = reindeerTypes.sort(sortWeight)

    let countriesWeights = {}
    gifts.forEach(gift => {
        countriesWeights[gift.country] =
            (countriesWeights[gift.country] || 0) + gift.weight
    })

    const resolve = (country, compReindeers, numTypeReindeers, schedule) => {
        schedule.push({
            'country': country,
            'reindeers': compReindeers.map((reindeer, index) => {
                return {'type': reindeer.type, 'num': numTypeReindeers[index]}
            })
        })
    }

    let schedule = []
    for (const country in countriesWeights) {
        const weight = countriesWeights[country]
        let compReindeers = reindeerTypesSort
            .filter(reindeer => reindeer.weightCapacity < weight)
        let sum = compReindeers
            .reduce((sum, reindeer) => sum + reindeer.weightCapacity, 0)

        while (sum > weight) {
            let deleted = compReindeers
                .splice(0, 1)
            sum -= deleted.pop().weightCapacity
        }

        let numCompReindeers = compReindeers.length
        let numTypeReindeers = Array(numCompReindeers)
            .fill(1)

        if (sum === weight) {
            resolve(country, compReindeers, numTypeReindeers, schedule)
            continue
        }

        for (let i = 0; i < numCompReindeers && sum < weight; i++) {
            let sumAddOne = compReindeers
                .slice(i)
                .reduce((sum, reindeer) =>
                    sum + reindeer.weightCapacity, 0)

            while(sum + sumAddOne <= weight) {
                sum += sumAddOne
                let tempTypeReindeers = numTypeReindeers
                    .slice(i)
                    .map(num => num + 1)
                numTypeReindeers = numTypeReindeers
                    .slice(0, i)
                    .concat(tempTypeReindeers)
            }

            if (sum > weight) {
                sum -= sumAddOne
                let tempTypeReindeers = numTypeReindeers
                    .slice(i)
                    .map(num => num - 1)
                numTypeReindeers = numTypeReindeers
                    .slice(0, i)
                    .concat(tempTypeReindeers)
            }
        }

        if (sum < weight)
            numTypeReindeers[numCompReindeers-1]+= (weight-sum)

        resolve(country, compReindeers, numTypeReindeers, schedule)
    }

    return schedule
}