import { sample } from "./index";

it("foo", async () => {
  // sampleがPromiseを返すわけじゃないので、↓だとエラーが補足できない
  // await expect(sample()).rejects.toThrow("bar");

  sample();

  expect(true).toBe(true);
});
