(async function () {
  const waitPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("10 seconds passed");
      }, 10000);
    });
  };
  await waitPromise();
})();
