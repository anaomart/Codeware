function DNAStrand(dna) {
    return dna
        .split("")
        .map((e) => {
            return e == "A" ?
                (e = "T") :
                e == "T" ?
                (e = "A") :
                e == "C" ?
                (e = "G") :
                e == "G" ?
                (e = "C") :
                "";
        })
        .join("");
}