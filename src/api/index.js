import providerAndSigner from "../ethereum/injectedWeb3";
import MyContract from "../ethereum/contract/MyContract";

const { signer, provider } = providerAndSigner;

/* General Web3 functions */
export const getAccount = async () => {
  if (typeof window.ethereum?.enable !== "function") {
    throw new Error("Metamask is not injected.");
  }

  await window.ethereum.enable();

  const { signer } = providerAndSigner;
  const account = await signer.getAddress();
  
  return account;
}

/* Transactions */
export const changeOwner = async (newOwner) => {
  const instance = await MyContract.deployed();
  const instanceWithSigner = instance.connect(signer);
  await instanceWithSigner.changeOwner(newOwner);
}

export const incrementNumber = async () => {
  const instance = await MyContract.deployed();
  const instanceWithSigner = instance.connect(signer);
  await instanceWithSigner.increment();
}

export const resetNumber = async () => {
  const instance = await MyContract.deployed();
  const instanceWithSigner = instance.connect(signer);
  await instanceWithSigner.reset();
}

/* View Functions */
export const getOwner = async () => {
  const instance = await MyContract.deployed();
  const instanceOwner = await instance.getOwner()
  
  return instanceOwner;
}

export const getNumber = async () => {
  const instance = await MyContract.deployed();
  const instanceNumber = await instance.getNumber()
  
  return instanceNumber.toNumber();
}
