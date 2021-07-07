const AgedBrie = require("./agedBrie.js")
const BackstagePass = require("./backstagePass.js")

class Shop {
  constructor(items=[]){
    this.items = items.map(item => {
      if (item.name === "Aged Brie") {
        return new AgedBrie(item)
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert'){
        return new BackstagePass(item)
      } else {
        return item
      }
    });
  }

  updateConjured(item) {
    item.sellIn--
    item.quality--
    item.quality--
    if (item.sellIn < 0) {
      item.quality--
      item.quality--
    }
    if (item.quality < 0) { item.quality = 0 }
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name === 'Conjured Mana Cake') { this.updateConjured(this.items[i]) }
      if (this.items[i].name === 'Aged Brie') { this.items[i].update() }
      if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') { this.items[i].update() }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros' && this.items[i].name !== 'Aged Brie' && this.items[i].name !== 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name !== 'Conjured Mana Cake') {
        if (this.items[i].quality > 0) { this.items[i].quality--; }
        this.items[i].sellIn--;
        if (this.items[i].sellIn < 0 && this.items[i].quality > 0) { this.items[i].quality--; }
      }
    }

    return this.items;
  }
}

module.exports = Shop
