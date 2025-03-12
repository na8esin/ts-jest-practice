export function sample() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });

  myPromise.then((value) => {
    throw new Error("bar");
  });
}