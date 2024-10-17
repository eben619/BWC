import React, { useEffect } from "react";

interface DisplayBalanceProps {
  balance: string | undefined;
  fetchBalance: () => void;
}

const DisplayBalance: React.FC<DisplayBalanceProps> = ({ balance, fetchBalance }) => {
  useEffect(() => {
    fetchBalance(); // Fetch balance on load
  }, [fetchBalance]);

  return (
    <div>
      <p>Balance: {balance ? `${balance} CELO` : "Loading..."}</p>
      <button onClick={fetchBalance}>Refresh Balance</button>
    </div>
  );
};

export default DisplayBalance;
