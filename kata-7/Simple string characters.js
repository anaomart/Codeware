function Solve(s) {
    let uppercase = s.replace(/[^A-Z]/g, "").length;
    let lowercase = s.replace(/[^a-z]/g, "").length;
    let num = s.replace(/[^0-9]/g, "").length;
    let specialChar = s.length - num - uppercase - lowercase;

    return [uppercase, lowercase, num, specialChar];
}

console.log(Solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34Lnbft"));