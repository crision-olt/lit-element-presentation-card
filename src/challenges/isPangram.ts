const alphabet = [...'abcdefghijklmnopqrstuvwxyz']

export const isPangram = (message: string) => {
    const messageArr = [...message.toLowerCase()];

    const isPangram = alphabet.every((letter) => {
        const findedIndex = messageArr.indexOf(letter);
        return findedIndex >= 0;
    })
    return isPangram;
}