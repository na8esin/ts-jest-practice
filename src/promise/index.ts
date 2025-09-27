let user: { name: string } | null = null;

// ただのsleep関数
const sleep = (time: number | undefined) =>
  new Promise((resolve) => setTimeout(resolve, time));

// APIからユーザーデータを取得するイメージ
const fetchUser = async () => {
  const p = Promise.reject();
  await sleep(250); // ここの待ち時間が短いとUnhandledPromiseRejectionは発生しない

  //レスポンスが帰ってきたら、state的なところに格納
  p.then(() => {user = { name: "foo" }});
};

// reactのComponentのイメージ
export async function sampleComponent() {
  // 実際は、useEffectとかに囲まれている
  fetchUser().then(() => {});

  return `<div>${user?.name}</div>`;
}
