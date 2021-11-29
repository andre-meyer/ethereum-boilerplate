import { Contract } from "ethers";

import MyContractABI from "assets/contracts/MyContract.json";
const address = "0xACD028EB0148a82264c0a4b54ecf8889874F6Ff7";

import providerAndSigner from "../injectedWeb3";

const MyContract = new Contract(address, MyContractABI, providerAndSigner.provider);

export default MyContract;