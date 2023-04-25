import { describe, test } from 'vitest'
import { isPangram } from './isPangram'

describe('isPangram', () => {
    test('The string “The quick brown fox jumps over the lazy dog” should return true.', ({expect}) => {
        const result = isPangram('The quick brown fox jumps over the lazy dog')
        expect(result).toBe(true)
    })
    test('The string “The quick brown fox jumped over the lazy dog” should return false.', ({expect}) => {
        const result = isPangram('The quick brown fox jumped over the lazy dog')
        expect(result).toBe(false)
    })
})