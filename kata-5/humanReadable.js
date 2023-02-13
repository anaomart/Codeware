function humanReadable(seconds) {
    let hours = seconds / 3600 || "00"
    let minutes = ('.' + `${hours}`.split('.')[`1`]) * 3600 / 60 || "00";
    let second = ('.' + `${minutes}`.split('.')[`1`]) * 3600 / 60 || "00";

    return `${addFrontZero(Math.floor(hours)) || "00"}:${addFrontZero(Math.floor(minutes)) || "00"}:${addFrontZero(Math.round(second)  )|| '00'}`


    function addFrontZero(number) {
        if (String(number).length == 1)
            return `0${number}`
        else return number
    }
}


console.log(humanReadable(60))
