const cats = ['Milo', 'Otis', 'Garfield'];

function  destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function  destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
    return cats;
}

function  destructivelyRemoveFirstCat(name) {
    cats.shift(name);
    return cats;
}

function appendCat(name) {
    const newArray = [...cats];
    newArray.push(name);
    return newArray;
}

function prependCat(name) {
    const newArray1 = [...cats];
    newArray1.unshift(name);
    return newArray1;
}

function removeLastCat(name) {
    const newArray2 = [...cats];
    newArray2.pop(name);
    return newArray2;
}

function  removeFirstCat(name) {
    const newArray3 = [...cats];
    newArray3.shift(name);
    return newArray3;
}