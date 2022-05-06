function validatePIN(pin) {
    if (
        pin.includes("-") ||
        pin == null ||
        pin.includes("null") ||
        pin == null ||
        pin == ""
    ) {
        return false;
    }
    let pinNumber = pin.match(/\d+/g);
    let result = pinNumber[0].length == pin.length;
    return (result && pinNumber[0].length == 4) ||
        (result && pinNumber[0].length == 6) ?
        true :
        false;
}
let pin = "null";
console.log(validatePIN(pin));