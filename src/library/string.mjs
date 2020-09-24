export const getLines = text => {
    return text.split("\n");
};

export const getCharacterCount = (character, text) => {
    const LENGTH = text.length;

    let count = 0;

    for (let index = 0; index < LENGTH; index++) {
        if (text[index] === character) {
            count++;
        }
    }

    return count;
};
