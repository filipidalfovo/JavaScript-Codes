const breakText = (fullString) => {

    let objLetter = {}

    for (let letter of fullString) {
        if (objLetter.hasOwnProperty(letter)) {
            //objLetter[letter] = objLetter[letter] + 1
            //objLetter[letter] =+ 1
            objLetter[letter]++
        } else {
            objLetter[letter] = 1
        }
    }
    return objLetter
}

console.log(breakText('Insira o seu texto aqui'))
