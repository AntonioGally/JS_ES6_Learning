const Math = require("../Math.js");
const expect = require("chai").expect;
describe("Math Class", function () {
  it.skip("Multiply two Numbers on Chai", function () {
    const math = new Math();
    expect(math.multiply(5, 5)).to.equal(25);
    //assert.equal(math.multiply(5, 5), 25);
  });
  it("Validate obj with Chai", function () {
    const math = new Math();
    const obj = {
      name: "Antonio",
    };
    const obj2 = {
      name: "Antonio",
    };
    // expect(obj).to.have.property("name").equal("Antonio");
    // expect(obj).to.deep.equal(obj2)
    expect(obj).to.have.property("name");
  });
});
//! Chai é uma lib para substituir o assert do node js
