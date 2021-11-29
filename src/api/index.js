import providerAndSigner from "../ethereum/injectedWeb3";
import MyContract from "../ethereum/contract/MyContract";

const { signer, provider } = providerAndSigner;

/* General Web3 functions */
export const getAccount = async () => {
  if (typeof window.ethereum?.enable !== "function") {
    throw new Error("Metamask is not injected.");
  }

  await window.ethereum.enable();

  throw new Error("not implemented");
}

/* Transactions */
export const changeOwner = async (newOwner) => {
  throw new Error("not implemented");
}

export const incrementNumber = async () => {
  throw new Error("not implemented");
}

export const resetNumber = async () => {
  throw new Error("not implemented");
}

/* View Functions */
export const getOwner = async () => {
  throw new Error("not implemented");
}

export const getNumber = async () => {
  throw new Error("not implemented");
}
