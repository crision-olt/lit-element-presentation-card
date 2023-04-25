export const isUniqueLetter = (message: string) => {
    const letters = new Set();

    const isUnique = [...message].every((letter) => {
        if(letter === ' ')
            return true;

        if(letters.has(letter)){
            return false;
        }

        letters.add(letter);
        return true;
    })

    return isUnique;
}