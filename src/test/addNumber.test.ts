import { addNumber } from './addNumber';

test('addNumber는 두 수를 더하는 함수입니다.', () => {
  // 조건
  const numberA = 2;
  const numberB = 3;
  const result = 5;

  //실행
  const actResult = addNumber(numberA, numberB);

  //평가
  expect(actResult).toBe(result);
});
