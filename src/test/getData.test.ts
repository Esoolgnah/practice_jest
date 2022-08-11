import { getData } from './getData';

test('1초 후 데이터를 불러옵니다.', async () => {
  // Arrange
  const targetData = { status: 'success', data: '샘플 데이터' };
  // Act
  const data = await getData();
  // Assert
  expect(data).toEqual(targetData);
});
