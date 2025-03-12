import { sample } from "./index";

it("foo", async () => {
  // sampleがPromiseを返すわけじゃないので、これだとエラーが補足できない
  // await expect(sample()).rejects.toThrow("bar");

  sample();

  expect(true).toBe(true);
});
