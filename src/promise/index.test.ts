import { sample } from "./index";

it("foo", async () => {
  // Promiseの例外をキャッチするため、rejectsを使用
  await expect(async () => {
    await sample();
  }).rejects.toThrow("bar");
});
