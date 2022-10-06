const module1 = require("../module1");

describe("All tests" , ()=>{
  it('return a', ()=>{
      expect(module1.sum(1, 2)).toBe(3 + 1)
  })
} )