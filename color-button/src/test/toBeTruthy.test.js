test("toBeTruthy?", () => {
  expect(0).toBeFalsy(); // 숫자 0은 false를 의미하기도 함. true
  expect("0").toBeTruthy(); // 문자열은 true를 의미하기도 함. true
});
