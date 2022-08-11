import { addNumber } from './addNumber';

test('addNumber는 두 수를 더하는 함수입니다.', () => {
  // 조건
  const numberA: number = 2;
  const numberB: number = 3;
  const result: number = 5;

  // 실행
  const actResult = addNumber(numberA, numberB);

  // 평가
  expect(actResult).toBe(result);
});
