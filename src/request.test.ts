/**
 * @jest-environment jsdom
 */

it('hello', () => {
  const aRequest = new Request("https://www.mozilla.org/favicon.ico");
  expect(aRequest.url).toBe("https://www.mozilla.org/favicon.ico");
});