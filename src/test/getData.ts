export const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          status: 'success',
          data: '샘플 데이터',
        }),
      1000,
    );
  });
};
