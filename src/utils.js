export function createPromise () {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}
