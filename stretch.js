// solve these problems using any method you like!

/* 

Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

*/

/*
Output: 
{
    apple: 3,
    banana: 1,
    'dog food': 5,
    milk: 2,
    cheese: 4
}
*/

export function organizePricesByKey(arr) {
    // const priceObj = {};
    // // prettier-ignore
    // for(let item of arr) {
    //     priceObj[item.id] = item.price;
    // }
    // return priceObj;
}

/*
Output: 
{
    apple: { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    banana: { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    'dog food': { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    milk: { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
    cheese:    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    }
}
*/

export function makeAHashMap(arr) {
    // const hashMap = {};
    // arr.map((element) => {
    //     hashMap[element.id] = element;
    // });
    // return hashMap;
}

/*
Output: 
{
    fruit: 2,
    other: 1,
    dairy: 2
}
*/

export function countByCategory(arr) {
    // return arr.reduce((acc, currentVal) => {
    //     acc[currentVal.category] = (acc[currentVal.category] || 0) + 1;
    //     return acc;
    // }, {});
}
