function myFunction(joyas: string, piedras: string): number {
    let num = 0;
    let joyaSet = new Set(joyas.split(''));

    let piedraSet = new Set(piedras.split(''));

    for (let i = 0; i < piedras.length; i++) {
        if (joyaSet.has(piedras[i])) {
            num++;
        }
    }
    //console.log(joyaSet, piedraSet)
    return num
}



console.assert(myFunction("aA", "aAAbbbb") === 3);
console.assert(myFunction("z", "ZZ") === 0);