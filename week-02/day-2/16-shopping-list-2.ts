'use strict';

let prices = {
  Milk: 1.07,
  Rice: 1.59,
  Eggs: 3.14,
  Cheese: 12.60,
  ChickenBreasts: 9.40,
  Apples: 2.31,
  Tomato: 2.58,
  Potato: 1.75,
  Onion: 1.10
}

let bobsList = {
  Milk: 3,
  Rice: 2,
  Eggs: 2,
  Cheese: 1,
  ChickenBreasts: 4,
  Apples: 1,
  Tomato: 2,
  Potato: 1,
}

let aliceList = {
  Rice: 1,
  Eggs: 5,
  ChickenBreasts: 2,
  Apples: 1,
  Tomato: 10
}

// Create an application which solves the following problems.

// How much does Bob pay?
// How much does Alice pay?
// Who buys more Rice?
// Who buys more Potato?
// Who buys more different products?
// Who buys more products? (piece)

let totalPaid = (name:string, shopList: {}, prices: {}) => {
  let totalCost = 0;
  for (const [shopKey, shopAmount] of Object.entries(shopList)) {
    for (const [priceKey, priceValue] of Object.entries(prices)) {
      if(shopKey === priceKey){
        totalCost += Number(priceValue) * Number(shopAmount);
      }
    }
  }
  return totalCost;
}

console.log(`Bob pays ${totalPaid('Bob', bobsList, prices)}`);
console.log(`Alice pays ${totalPaid('Alice', aliceList, prices)}`)

let moreRice = (bobsList, aliceList) => {
  return bobsList.Rice > aliceList.Rice ? 'Bob bought more rice' : 'Alice bought more rice';
}

console.log(moreRice(bobsList, aliceList));

let morePotato = (bobsList, aliceList) => {
  if (!bobsList.Potato){
    bobsList.Potato = 0;
  }
  if(!aliceList.Potato){
    aliceList.Potato = 0;
  }
  return bobsList.Potato >= aliceList.Potato ? 'Bob bought more potatoes' : 'Alice bought more potatoes';
}

console.log(morePotato(bobsList, aliceList));

let moreDifferent = (bobsList, aliceList) => {
  return Object.entries(bobsList).length > Object.entries(aliceList).length ? 'Bob bought more stuff' : 'Alice bought more stuff';
}

console.log(moreDifferent(bobsList, aliceList));

let productCount = (input: {}) => {
  return Object.values(input).reduce((acc, curr) => Number(acc) + Number(curr))
}

let moreTotalProducts = (bobsList, aliceList) => {
  return productCount(bobsList) < productCount(aliceList) ? 'Bob bought more items' : 'Alice bought more items';
}

console.log(moreTotalProducts(bobsList, aliceList));