import sleep from "../utils/sleep"

export default async (newOwner) => {
  console.log(newOwner)
  await sleep(1000)
  throw new Error("Not implemented!");
}