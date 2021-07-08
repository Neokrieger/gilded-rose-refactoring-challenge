var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });
    it("Check if it has a sellin", function () {
        const gildedRose = new Shop([new Item("foo", 5, 0)]);
        const items = gildedRose.items;
        expect(items[0].sellIn).toEqual(5);
    });

    it("Check if it has a quality", function () {
        const gildedRose = new Shop([new Item("foo", 0, 5)]);
        const items = gildedRose.items;
        expect(items[0].quality).toEqual(5);
    });
});

describe("Check if sellIn decreases", function () {
    it("Check if sellIn decreases", function () {
        const gildedRose = new Shop([new Item("foo", 5, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(4);
    })
})

describe("Check if quality decreases", function () {
    it("Check if quality decreases by 1 when sellIn not 0", function () {
        const gildedRose = new Shop([new Item("foo", 5, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(4);
    })
    it("Check if quality decreases by 2 when sellIn at 0", function () {
        const gildedRose = new Shop([new Item("foo", 0, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(3);
    })
})


