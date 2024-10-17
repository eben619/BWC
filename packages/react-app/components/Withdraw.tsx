import React, { useState } from "react";

interface WithdrawProps {
  savingsContractAddress: string;
  abi: any;
  withdraw: (amount: string) => Promise<any>; // Expect withdraw function from useWeb3
  fetchBalance: () => void; // Callback to refresh the balance after withdrawal
}

const Withdraw: React.FC<WithdrawProps> = ({ savingsContractAddress, abi, withdraw, fetchBalance }) => {
  const [withdrawAmount, setWithdrawAmount] = useState<string>("");

  const handleWithdraw = async () => {
    try {
      const tx = await withdraw(withdrawAmount); // Call the withdraw function
      await tx.wait(); // Wait for the transaction to be mined
      fetchBalance(); // Refresh balance after withdrawal
      console.log("Withdrawal successful", tx);
    } catch (error) {
      console.error("Withdrawal failed", error);
    }
  };

  return (
    <div>
      <h3>Withdraw</h3>
      <input
        type="text"
        value={withdrawAmount}
        onChange={(e) => setWithdrawAmount(e.target.value)}
        placeholder="Amount to withdraw"
      />
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default Withdraw;
