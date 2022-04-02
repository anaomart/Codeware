function noOdds(values) {
    return values.filter(function(ele) { // ele => ele % 2 == 0
        return ele % 2 == 0;
    })
}