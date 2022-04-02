function partialKeys(obj) {
    let handler = {
            get(myObj, property) {
                let key = Object.keys(myObj).sort().find(x => x.startsWith(property));
                return myObj[key];
            }
        }
        //Object.keys(myobj) -> we get the keys like [omar,amr, oa]
        //.sort()            -> then we sort them becuse if there keys have the first same letter we get the the first by alphaptice order 
        //.find()            -> we have it a function (arrow) that check if any of the keys == the property 

    let myProxyObj = new Proxy(obj, handler);
}

console.log(partialKeys({ omar: 1, amr: 2, oa: 3 }))