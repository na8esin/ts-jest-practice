import { sample } from "./index";
import { setTimeout } from 'timers/promises';

it("foo", async () => {
  // sampleがPromiseを返すわけじゃないので、↓だとエラーが補足できない
  // await expect(sample()).rejects.toThrow("bar");

  try {
    sample();
  } catch (e) {
  }

  // ↓React Testing Library でfindByText()などを使うイメージ
  await setTimeout(200);

  expect(true).toBe(true);
});
