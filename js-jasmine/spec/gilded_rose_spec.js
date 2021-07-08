var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("Check if item has name", function() {
    const gildedRose = new Shop([ new Item("foo", 5, 5) ]);
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
/*
describe("Check if sellIn decreases", function () {
    it("Check if sellIn decreases", function () {
        const gildedRose = new Shop([new Item("foo", 5, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(4);
    })

    it("Check if sellIn decreases below 0", function () {
        const gildedRose = new Shop([new Item("foo", 0, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(-1);
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

describe("Aged Briee", function() {
    it("Does Sell-in decrease", function() {
        const gildedRose = new Shop([new Item("foo", 5, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(4);
    })

    it("Check if quality increases", function() {
        const gildedRose = new Shop([new Item("Aged Brie", 5, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(6);
    })

    it("Check if quality stops increasing at 50", function() {
        const gildedRose = new Shop([new Item("Aged Brie", 5, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
    })
})


describe("Sulfura", function() {
    it("No Sell-in decrease", function() {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 5, 0)]);
        const items = gildedRose.items;
        expect(items[0].sellIn).toEqual(5);
    })

    it("No quality decreases", function() {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 5, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(5);
    })
})

describe("Back-Stage Pass", function() {
    it("Does Sell-in decrease", function() {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(4);
    })

    it("Check if quality increases by 1 up to day 10", function() {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(6);
    })

    it("Check if quality increase by 2 less then 10 days", function() {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(22);
    })

    it("Check if quality increase by 3 less then 5 days", function() {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(23);
    })

    it("Check if quality is 0 at day 0", function() {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(0);
    })

    it("Check if quality will not exceed 50", function() {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(50);
    })
})
*/

// describe("Conjured Items", function() {
//     it("Does Sell-in decrease", function() {
//         const gildedRose = new Shop([new Item("Conjured Wond", 5, 0, true)]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].sellIn).toEqual(4);
//     })

//     it("Check if quality increases", function() {
//         const gildedRose = new Shop([new Item("Conjured Wond", 5, 5, true)]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].quality).toEqual(3);
//     })

//     it("Check if quality stops increasing at 50", function() {
//         const gildedRose = new Shop([new Item("Aged Brie", 5, 50)]);
//         const items = gildedRose.updateQuality();
//         expect(items[0].quality).toEqual(50);
//     })
// })