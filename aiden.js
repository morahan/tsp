// The Taveling Sales Person Problem
// let cities = [chicago, denver, jacksonville, houston, LA, Memphis, NYC, Seattle, StPaul];
// // let abv = [C, D, J, H, L, M, N, S, P];

// define milage from and to cities.
let cities = {
    c: {
        d: 900,
        j: 1100,
        h: 1100,
        l: 2000,
        m: 500,
        n: 800,
        s: 2100,
        p: 350
    },
    
    d: {
        c: 900,
        j: 1700,
        h: 1000,
        l: 1000,
        m: 1050,
        n: 1800,
        s: 1300,
        p: 900
    },
    
    j: {
        c: 1100,
        d: 1700,
        h: 900,
        l: 2400,
        m: 750,
        n: 950,
        s: 3000,
        p: 1400
    },
    
    h: {
        c: 1100,
        d: 1000,
        j: 900,
        l: 1550,
        m: 500,
        n: 1600,
        s: 2300,
        p: 1200
    },
    
    l: {
        c: 2000,
        d: 1000,
        j: 2400,
        h: 1550,
        m: 1800,
        n: 2800,
        s: 2100,
        p: 1900
    },
    
    m: {
        c: 500,
        d: 1050,
        j: 750,
        h: 500,
        l: 1800,
        n: 1100,
        s: 2300,
        p: 1050
    },
    
    n: {
        c: 800,
        d: 1800,
        j: 950,
        h: 1600,
        m: 2800,
        l: 2800,
        s: 2900,
        p: 1000
    },
    
    s: {
        c: 2100,
        d: 1300,
        j: 3000,
        h: 2300,
        m: 2300,
        n: 2900,
        l: 2100,
        p: 1700
    },
    
    p: {
        c: 350,
        d: 900,
        j: 1400,
        h: 1200,
        m: 1050,
        n: 1000,
        l: 1900,
        s: 1700
    }
}

// get all possible routes (8!)
function getAllPermutations(string) {
    let results = [];
    if (string.length === 1) {
        results.push(string);
        return results;
    }

    for (let i = 0; i < string.length; i++) {
        let firstChar = string[i];
        let charsLeft = string.substring(0, i) + string.substring(i + 1);
        let innerPermutations = getAllPermutations(charsLeft);
        for (let j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
        }
    }
    return results;
}

let combos = getAllPermutations("djhlmnsp");
let start = [];
let comboArr = [];

// add chicago as starting location
for (let i = 0; i < combos.length; i++){
    let temp = 'c'+ combos[i];
    start.push(temp);
};

// break up combos to arrays of single character strings
for (let i = 0; i < start.length; i++) {
    let temp = []
    for (let x = 0; x < start[i].length; x++){
        temp.push(start[i][x]);
    }
    comboArr.push(temp);
};

let answer = [];
let smallest = 10000000;

//Iterate all combos and find shortest milage
for (let i = 0; i < comboArr.length; i++) {
    let tempMiles = 0;
    let tempOrder = [];
    for (let x = 0; x < 8; x++){
        tempMiles += cities[comboArr[i][x]][comboArr[i][x + 1]];
        tempOrder = comboArr[i];
    }
    if (tempMiles < smallest) {
        smallest = tempMiles;
        console.log(tempMiles)
        answer = tempOrder;
    }
}
console.log("combos ==== ", combos, "start ==== ", start, "comboArr ==== ", comboArr)
console.log(answer, smallest)









// let chicago = {
//     d: 900,
//     j: 1100,
//     h: 1100,
//     l: 2000,
//     m: 500,
//     n: 800,
//     s: 2100,
//     sp: 350
// }

// let denver = {
//     c: 900,
//     j: 1700,
//     h: 1000,
//     l: 1000,
//     m: 1050,
//     n: 1800,
//     s: 1300,
//     sp: 900
// }

// let jacksonville = {
//     c: 1100,
//     d: 1700,
//     h: 900,
//     l: 2400,
//     m: 750,
//     n: 950,
//     s: 3000,
//     sp: 1400
// }

// let houston = {
//     c: 1100,
//     d: 1000,
//     j: 900,
//     l: 1550,
//     m: 500,
//     n: 1600,
//     s: 2300,
//     sp: 1200
// }

// let LA = {
//     c: 2000,
//     d: 1000,
//     j: 2400,
//     h: 1550,
//     m: 1800,
//     n: 2800,
//     s: 2100,
//     sp: 1900
// }

// let Memphis = {
//     c: 500,
//     d: 1050,
//     j: 750,
//     h: 500,
//     l: 1800,
//     n: 1100,
//     s: 2300,
//     sp: 1050
// }

// let NYC = {
//     c: 800,
//     d: 1800,
//     j: 950,
//     h: 1600,
//     m: 2800,
//     l: 2800,
//     s: 2900,
//     sp: 1000
// }

// let Seattle = {
//     c: 2100,
//     d: 1300,
//     j: 3000,
//     h: 2300,
//     m: 2300,
//     n: 2900,
//     l: 2100,
//     sp: 1700
// }

// let StPaul = {
//     c: 350,
//     d: 900,
//     j: 1400,
//     h: 1200,
//     m: 1050,
//     n: 1000,
//     l: 1900,
//     s: 1700
// }
