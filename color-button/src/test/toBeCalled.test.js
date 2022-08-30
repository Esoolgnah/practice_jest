function canNotEatCucumber(callback, vegetable) {
  if (vegetable !== "cucumber") {
    callback(vegetable);
  }
}

describe("canNotEatCucumber", () => {
  test("eat other vegetable", () => {
    const vegetable = jest.fn();
    canNotEatCucumber(vegetable, "tomato");
    expect(vegetable).toHaveBeenCalled(); //함수 호출 O
  });

  test("can not eat cucumber", () => {
    const vegetable = jest.fn();
    canNotEatCucumber(vegetable, "cucumber");
    expect(vegetable).not.toHaveBeenCalled(); // 함수 호출 X
  });
});
