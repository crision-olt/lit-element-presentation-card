import { describe, test } from 'vitest'


Array.prototype.challenge8 = function () {
    return this.sort((a:string, b:string) => {
       return a.length - b.length;
    }).reverse();
};

describe('challenge8', () => {
    test('The code ["a", "abc", "ab"].challenge8() should return ["abc", "ab", "a"].', ({expect}) => {
        const result = ["a", "abc", "ab"].challenge8();
        expect(result).toStrictEqual(["abc", "ab", "a"]);
    })
    test('The code ["paul", "taylor", "adele"].challenge8() should return ["taylor", "adele", "paul"].', ({expect}) => {
        const result = ["paul", "taylor", "adele"].challenge8();
        expect(result).toStrictEqual(["taylor", "adele", "paul"]);
    })
    test('The code [].challenge8() should return [].', ({expect}) => {
        const result = [].challenge8();
        expect(result).toStrictEqual([])
    })
})  