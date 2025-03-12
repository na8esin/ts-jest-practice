export async function sample() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });

  await myPromise.then((value) => {
    throw new Error("bar");
  });
}

sample();
