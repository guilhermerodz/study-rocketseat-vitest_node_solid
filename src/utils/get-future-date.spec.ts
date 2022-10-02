import { expect, test } from 'vitest'
import { getFutureDate } from './get-future-date'

test('increases date by one year', () => {
  expect(getFutureDate('2022-08-10').getFullYear()).toBe(2023)
})
