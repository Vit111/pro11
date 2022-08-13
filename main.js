
const HAMBURGER = {
    sizes: {
        small: {
            price: 5,
            calories: 10
        },
        big: {
            price: 10,
            calories: 40
        }
    },
    toppings: {
        chees: {
            price: 1,
            calories: 20
        },
        salad: {
            price: 2,
            calories: 5
        },
        potato: {
            price: 1.5,
            calories: 10
        }
    },
    supplements: {
        priprava: {
            price: 1.5,
            calories: 10
        },
        mayonnaise: {
            price: 2,
            calories: 5
        }
    }
}
class Hamburger {
    constructor() {
        this.sizes = [];
        this.toppings = [];
        this.supplements = [];
    }
    addSizes(array) {
        array.forEach(element => {
            this.sizes.push(element)
        });
        return this.sizes
    }
    addToppings(array) {
        array.forEach(element => {
            this.toppings.push(element)
        });
        return this.toppings
    }
    addSupplement(array) {
        array.forEach(element => {
            this.supplements.push(element)
        });
        return this.supplements
    }
    getPrice() {
        let sum = 0
        this.sizes.forEach(element => {
            sum += element.price
        });
        this.toppings.forEach(element => {
            sum += element.price
        });
        this.supplements.forEach(element => {
            sum += element.price
        });
        return sum
    }
    getCalories() {
        let sum = 0
        this.sizes.forEach(element => {
            sum += element.calories
        });
        this.toppings.forEach(element => {
            sum += element.calories
        });
        this.supplements.forEach(element => {
            sum += element.calories
        });
        return sum
    }
}
const burger = new Hamburger();
console.log(burger.addSizes([HAMBURGER.sizes.big]))
console.log(burger.addToppings([HAMBURGER.toppings.chees, HAMBURGER.toppings.potato]));
console.log(burger.addSupplement([HAMBURGER.supplements.mayonnaise]))
console.log(burger.getPrice());
console.log(burger.getCalories());
// class Hamburger {
//     constructor() {
//         this.massive = [];
//     }
//     addSizes(array) {
//         array.forEach(element => {
//             this.massive.push(element)
//         });
//         return this.massive
//     }
//     addToppings(array) {
//         array.forEach(element => {
//             this.massive.push(element)
//         });
//         return this.massive
//     }
//     addSupplement(array) {
//         array.forEach(element => {
//             this.massive.push(element)
//         });
//         return this.massive
//     }
//     getPrice() {
//         let sum = 0
//         this.massive.forEach(element => {
//             sum += element.price
//         });
//         return sum
//     }
//     getCalories() {
//         let sum = 0
//         this.massive.forEach(element => {
//             sum += element.calories
//         });
//         return sum
//     }
// }
// const burger = new Hamburger();
// console.log(burger.addSizes([HAMBURGER.sizes.big]))
// console.log(burger.addToppings([HAMBURGER.toppings.chees, HAMBURGER.toppings.potato]));
// console.log(burger.addSupplement([HAMBURGER.supplements.mayonnaise]))
// console.log(burger.getPrice());
// console.log(burger.getCalories());
// this.massive = [].concat(this.massive, array);

// this.massive = this.massive.concat(array);

//  this.massive = [...this.massive, ...array];

// this.massive.push(...array);