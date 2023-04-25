import { isUniqueLetter } from "./uniqueLetters"
import { describe, test } from 'vitest'

describe('isUniqueLetters', () => {
    test('The string “No duplicates” should return true.', ({expect}) => {
        const result = isUniqueLetter('No duplicates');
        expect(result).toBe(true);
    })
    test('The string “abcdefghijklmnopqrstuvwxyz” should return true.', ({expect}) => {
        const result = isUniqueLetter('abcdefghijklmnopqrstuvwxyz');
        expect(result).toBe(true);
    })
    test('The string “AaBbCc” should return true because the challenge is case-sensitive.', ({expect}) => {
        const result = isUniqueLetter('AaBbCc');
        expect(result).toBe(true);
    })
    test('The string “Hello, world” should return false because of the double Ls and double Os.', ({expect}) => {
        const result = isUniqueLetter('Hello, world');
        expect(result).toBe(false);
    })
})