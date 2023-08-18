module.exports = function fixLetter(letter) {
    const trimmed = letter.trim();
    const multiple = trimmed
        .replace(/\s{2,}/g, ' ')
        .replace(/\?{2,}/g, '?')
        .replace(/¿{2,}/g, '¿')
        .replace(/\,{2,}/g, ',')
        .replace(/\.{2,}/g, '.');

    const addSpaces = multiple
        .replace(/([,])([^ ])/g, "$1 $2")
        .replace(/([.])([^ ])/g, "$1 $2")
        .replace(/([?])([^ ])/g, "$1 $2")
        .replace(/([!])([^ ])/g, "$1 $2");

    const delSpaces = addSpaces
        .replace(/([ ])([.,?!])/g, "$2")
        .replace(/([¿¡])([ ])/g, "$1");

    const toUppperCase = m => m.toUpperCase();
    const capitalize = delSpaces
        .replace(/(^[a-z]|\. [a-z]|\? [a-z]|¿[a-z]|¡[a-z]|! [a-z])/g,
            toUppperCase);
    const santa = capitalize.replaceAll(/santa claus/gi, "Santa Claus");
    const final = santa.replace(/(\w)$/, "$1.");
    return final;
}