import { checkIndexIsEven } from './someFunctions'

test('adds 1 + 2 to equal 3', () => {
  expect(checkIndexIsEven(1)).toBe(false)
})

test('adds 1 + 2 to equal 3', () => {
  expect(checkIndexIsEven(2)).toBe(true)
})

test('adds 1 + 2 to equal 3', () => {
  expect(checkIndexIsEven(3)).toBe(false)
})
