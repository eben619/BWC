import { useState } from "react";
import {
  createPublicClient,
  createWalletClient,
  custom,
  parseEther,
  http,
  TransactionReceipt,
} from "viem";
import { celoAlfajores } from "viem/chains";
import SavingsABI from "@/abi/Savings.json"; // Make sure this path is correct

const publicClient = createPublicClient({
  chain: celoAlfajores,
  transport: http(),
});

const savingsContractAddress = "0x94E4a792aAa67a01b6a6B3FaA2bA6278c9D7bCD3";

export const useWeb3 = () => {
  const [address, setAddress] = useState<`0x${string}` | null>(null); // Use template literal type for address

  // Fetch user address
  const getUserAddress = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      let walletClient = createWalletClient({
        transport: custom(window.ethereum),
        chain: celoAlfajores,
      });

      let [userAddress] = await walletClient.getAddresses();
      if (userAddress) {
        setAddress(userAddress as `0x${string}`);
      }
    }
  };

  // Fetch balance
  const getBalance = async () => {
    if (address) {
      const balance = await publicClient.getBalance({ address });
      const formattedBalance = (Number(balance) / 1e18).toFixed(4); // Convert from Wei and format to 4 decimals
      return formattedBalance;
    }
    return "0.0000";
  };

  // Deposit function
  const deposit = async (amount: string): Promise<TransactionReceipt> => {
    let walletClient = createWalletClient({
      transport: custom(window.ethereum),
      chain: celoAlfajores,
    });

    let [userAddress] = await walletClient.getAddresses();
    const amountInWei = parseEther(amount);

    const tx = await walletClient.writeContract({
      address: savingsContractAddress,
      abi: SavingsABI.abi,
      functionName: "deposit",
      account: userAddress as `0x${string}`, // Ensure it's the correct type
      value: amountInWei,
    });

    const receipt = await publicClient.waitForTransactionReceipt({ hash: tx });
    return receipt;
  };

  // Withdraw function
  const withdraw = async (amount: string): Promise<TransactionReceipt> => {
    let walletClient = createWalletClient({
      transport: custom(window.ethereum),
      chain: celoAlfajores,
    });

    let [userAddress] = await walletClient.getAddresses();
    const amountInWei = parseEther(amount);

    const tx = await walletClient.writeContract({
      address: savingsContractAddress,
      abi: SavingsABI.abi,
      functionName: "withdraw",
      account: userAddress as `0x${string}`, // Ensure it's the correct type
      args: [amountInWei],
    });

    const receipt = await publicClient.waitForTransactionReceipt({ hash: tx });
    return receipt;
  };

  return {
    address,
    getUserAddress,
    getBalance,
    deposit,
    withdraw,
  };
};
