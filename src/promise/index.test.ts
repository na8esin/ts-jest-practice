import { sampleComponent } from "./index";
import { setTimeout } from 'timers/promises';

it("test1", async () => {
  // ↓エラーは補足できない
  try {
    sampleComponent();
  } catch (e) {
    console.log("catch", e);
  }

  // ↓React Testing Library でfindByText()などを使うイメージ
  await setTimeout(200);

  expect(true).toBe(true);
});

it("test2", async () => {
  // sampleがPromiseを返すわけじゃないので、↓でも補足できない
  await expect(sampleComponent()).rejects.toThrow("bar");
});
