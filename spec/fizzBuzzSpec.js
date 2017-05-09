describe("Fizzbuzz", function() {
  it("Returns Fizz when passed 3", function() {
    expect(fizzBuzz(3)).toEqual("Fizz");
  });

  it("Returns Buzz when passed 5", function() {
    expect(fizzBuzz(5)).toEqual("Buzz");
  });

  it("Returns FizzBuzz when passed 15", function() {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });

  it("Returns 4 when passed 4", function() {
    expect(fizzBuzz(4)).toEqual(4);
  });
});
