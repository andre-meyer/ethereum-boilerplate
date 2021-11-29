import sleep from "../utils/sleep"

export default async () => {
  await sleep(1000)
  throw new Error("Not implemented!");
}