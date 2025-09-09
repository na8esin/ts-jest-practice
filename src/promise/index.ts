export function sample() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 100);
  });

  myPromise.then((value) => {
    throw new Error("bar");
  });
}