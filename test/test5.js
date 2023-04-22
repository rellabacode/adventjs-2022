const getMaxGifts = require('../src/challenge5.js');

describe("", () => {
    test("example test thirty first tree", () => {
        const giftsCities = [12, 3, 11, 5, 7]
        const maxGifts = 30
        const maxCities = 3
        expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(30);
    });

    test("example test tree one", () => {
        const giftsCities = [12, 3, 11, 5, 7]
        const maxGifts = 20
        const maxCities = 3
        expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(20);
    });

    test("example test tree 2", () => {
        const giftsCities = [12, 3, 11, 5, 7]
        const maxGifts = 16
        const maxCities = 3
        expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(16);
    });    

    test("example test tree 3", () => {
        const giftsCities = [12, 3, 11, 5, 7]
        const maxGifts = 16
        const maxCities = 3
        expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(16);
    });

    test("existent path with exceeds the maximum number of cities", () => {
        const giftsCities = [12, 3, 11, 5, 7]
        const maxGifts = 31 //12 3 11 5
        const maxCities = 3  //12 11 7
        expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(30);
    });

    test("node root greater than max", () => {
        const giftsCities = [20, 3, 11, 5, 7]
        const maxGifts = 15
        const maxCities = 3
        expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(15);
    });

    test("max cities grater than numCities", () => {
        const giftsCities = [20, 3, 11, 5, 7]
        const maxGifts = 15
        const maxCities = 6
        expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(15);
    });

    test("only one city (gifcities is one) PROVIDED with total gifts greater than the max allowed", () => {
        const giftsCities = [20]
        const maxGifts = 15
        const maxCities = 6
        expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(0);
    });

    test("only one gift allowed (maxGifts is one) without any city that complains the requirement", () => {
        const giftsCities = [20, 3, 5, 6]
        const maxGifts = 1
        const maxCities = 6
        expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(0);
    });

    test("only one city ALLOWED (maxCities is one) without any city that complains the maxGifts requirement", () => {
        const giftsCities = [20, 3, 5, 6]
        const maxGifts = 1
        const maxCities = 1
        expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toEqual(0);
    });

    test("example FULL TEST", () => {
        expect(getMaxGifts([50], 15, 1)) // 0
        expect(getMaxGifts([50], 100, 1)) // 50
        expect(getMaxGifts([50, 70], 100, 1)) // 70
        expect(getMaxGifts([50, 70, 30], 100, 2)) // 100
        expect(getMaxGifts([50, 70, 30], 100, 3)) // 100
        expect(getMaxGifts([50, 70, 30], 100, 4)) // 100
    });

});