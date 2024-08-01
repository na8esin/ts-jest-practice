it('mocks a function', () => {
  const myMockFn = jest.fn(cb => cb(null, true));

  myMockFn((err, val) => console.log(val));

  expect(myMockFn).toMatchSnapshot();
});
