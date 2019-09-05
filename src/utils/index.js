const sleep = async (i = 1) => new Promise(resolve => setTimeout(() => resolve(), 1000 * i))

export {
  sleep
}
