// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/

/*
Output:
`wheelstypegoes`
or
`goeswheelstype`
or
`wheelsgoestype`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    return `${Object.keys(someObject)}`;
}

/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/
export function makeMoreScreamingKeys(someObject) {
    const screamingKeys = {};
    // prettier-ignore
    for(let [key, value] of Object.entries(someObject)) {
        screamingKeys[key.toUpperCase()] = value;
    }
    return screamingKeys;
}

/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    const tupleArr = [];
    // prettier-ignore
    for(let [key, value] of Object.entries(someObject)) {
        tupleArr.push([key, value]);
    }
    return tupleArr;
}
