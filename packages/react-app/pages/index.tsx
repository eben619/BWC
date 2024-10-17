/* eslint-disable react-hooks/exhaustive-deps */
import PrimaryButton from "@/components/Button";
import { useWeb3 } from "@/contexts/useWeb3";
import { useState, useEffect } from "react";

export default function Home() {
  const {
    address,
    getUserAddress,
    getBalance,  // Fetch balance functionality
    deposit,     // Deposit functionality
    withdraw,    // Withdraw functionality
  } = useWeb3();

  const [balance, setBalance] = useState<string>("0");
  const [depositAmount, setDepositAmount] = useState<string>("");
  const [withdrawAmount, setWithdrawAmount] = useState<string>("");

  useEffect(() => {
    getUserAddress();
  }, []);

  useEffect(() => {
    if (address) {
      fetchBalance();
    }
  }, [address]);

  async function fetchBalance() {
    if (address) {
      try {
        const fetchedBalance = await getBalance();
        setBalance(fetchedBalance.toString());  // Convert balance from bigint to string
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    }
  }

  async function handleDeposit() {
    if (address && depositAmount) {
      try {
        await deposit(depositAmount);  // Call deposit from useWeb3
        fetchBalance();
      } catch (error) {
        console.error("Deposit failed:", error);
      }
    }
  }

  async function handleWithdraw() {
    if (address && withdrawAmount) {
      try {
        await withdraw(withdrawAmount);  // Call withdraw from useWeb3
        fetchBalance();
      } catch (error) {
        console.error("Withdrawal failed:", error);
      }
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {!address && (
        <div className="h1">Please install Metamask and connect.</div>
      )}
      {address && (
        <div className="h1">Welcome! Let's manage your savings.</div>
      )}

      {address && (
        <>
          <div className="h2 text-center">
            Your address:{" "}
            <span className="font-bold text-sm">{address}</span>
          </div>

          {/* Deposit functionality */}
          <div className="w-full px-3 mt-7">
            <input
              type="text"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder="Deposit amount in CELO"
            />
            <PrimaryButton
              onClick={handleDeposit}
              title="Deposit CELO"
              widthFull
            />
          </div>

          {/* Withdraw functionality */}
          <div className="w-full px-3 mt-7">
            <input
              type="text"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              placeholder="Withdraw amount in CELO"
            />
            <PrimaryButton
              onClick={handleWithdraw}
              title="Withdraw CELO"
              widthFull
            />
          </div>

          {/* Display Balance */}
          <div className="w-full px-3 mt-7">
            <p className="font-bold">Balance: {balance} CELO</p>
            <PrimaryButton
              onClick={fetchBalance}
              title="Refresh Balance"
              widthFull
            />
          </div>
        </>
      )}
    </div>
  );
}
