const breakText = (fullString) => {

    let objLetter = {}

    for (let letter of fullString) {
        if (objLetter.hasOwnProperty(letter)) {
            objLetter[letter] = objLetter[letter] + 1
        } else {
            objLetter[letter] = 1
        }
    }
    return objLetter
}

console.log(breakText('Input a Sample Text Here'))