function findShort(str) {
    return str.split(" ").reduce((a, b) => (a.length < b.length ? a : b))
        .length; // THis is the cleaner version.

    // OR the complex version

    // let word = null;
    // let splits = str.split(" ");
    // console.log(splits);
    // for (let i = 0; i < splits.length; i++) {
    //     for (let j = 0; j < splits.length; j++) {
    //         if (splits[i].length < splits[j].length) {
    //             word = splits[i];
    //         }
    //     }
    // }
    // return word.length;
}

// Cleaver way to do it from codeWars - Math.min.apply(null, str.spllit(" ").map(el => el.length))

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
