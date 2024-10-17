import React, { useState } from "react";
import { useWeb3 } from "@/contexts/useWeb3";  // Use the updated Web3 hook

interface DepositProps {
  savingsContractAddress: string;
  abi: any;
}

const Deposit: React.FC<DepositProps> = ({ savingsContractAddress, abi }) => {
  const { deposit } = useWeb3();  // Get the deposit function from useWeb3
  const [depositAmount, setDepositAmount] = useState<string>("");

  const handleDeposit = async () => {
    try {
      const tx = await deposit(depositAmount);  // Call deposit function
      if (tx) {
        console.log("Deposit successful", tx);
      }
    } catch (error) {
      console.error("Deposit failed", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-bold mb-4">Deposit</h3>
      <input
        type="text"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
        placeholder="Amount to deposit"
        className="w-full border-2 border-yellow-500 rounded-lg p-2 mb-4"
      />
      <button
        onClick={handleDeposit}
        className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg"
      >
        Deposit
      </button>
    </div>
  );
};

export default Deposit;
