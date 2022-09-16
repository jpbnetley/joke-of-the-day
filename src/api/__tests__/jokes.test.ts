import { skipFirst2Jokes } from 'api/joke'

describe(skipFirst2Jokes.name, () => {
  test('index 0 and 1 should be false, > 1 should be true', () => {
    expect(0).toBe(false)
    expect(1).toBe(false)
    expect(2).toBe(true)
  })
})
