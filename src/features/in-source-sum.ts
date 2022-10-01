export function sum(...numbers: number[]) {
  return numbers.reduce((total, number) => total + number, 0)
}

// Vitest allows you to write tests even closer to the source code! (same file)
if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest

  describe('#sum', () => {
    it('returns 0 with no numbers', () => {
      expect(sum()).toBe(0)
    })
    it('returns 3 with 1 and 2', () => {
      expect(sum(1, 2)).toBe(3)
    })
    it('returns the same result regardless of the order of numbers', () => {
      expect(sum(2, 1, 0, 10)).toBe(13)
      expect(sum(10, 0, 1, 2)).toBe(13)
    })
  })
}
