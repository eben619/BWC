<div align="center">
  <img src="https://github.com/eben619/Celo_Africa_Dao-Ghana_University_Tour/blob/main/celo_isotype.svg" alt="Celo Logo" width="150px">
<h1 >CELO AFRICA DAO</h1>
</div>

<b>Process to begin this Code Jam</b>

***Fork this repo, Press the Fork button.***

***Create project branch***

***Start committing to that branch, Make your changes within new branch***

<br>
<details>
  <summary>USEFUL LINKS</summary>
  <br>
* <a href="http://alfajores.celoscan.io" rel="noreferrer">Celo's Alfajores Testnet Explorer</a><br>
* <a href="http://faucet.celo.org/alfajores" rel="noreferrer">Funding Your Wallet With Testnet Tokens</a><br>
* <a href="https://metamask.io/download/" target='_blank'>Click Here To Download Metamask</a><br>
* <a href="https://docs.celo.org/developer/build-on-minipay/overview" target='_blank'>Build On Minipay</a><br>
* <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXogc7lHEgz9ajFhPEVyY7y33_esNzHgR3E8bH4LVz4Yconw/viewform" target='_blank'>Feedback Form</a><br>


</details>

<details>
  <summary>INTRODUCTION</summary>
<br>
  
Celo Foundation’s Role in the Web3 Ecosystem
Celo Foundation is at the forefront of the Web3 revolution, driving the adoption of decentralized finance and promoting financial inclusion worldwide. By leveraging blockchain technology, the foundation is working to create a more equitable and accessible financial system, paving the way for a future where everyone can participate in the global economy.

Celo's mobile-first approach aims to make decentralized finance (DeFi) accessible to smartphone users worldwide, especially in regions with limited access to traditional banking.<br>

<b>Why Build On Celo</b>
<br>
Celo is fully EVM-compatible, offering the same development experience as Ethereum with improved scalability and lower costs.

<b>Built for Everyday Users:</b>
<br>
Celo is designed with features that lower the entry barrier for those new to cryptocurrency.

<b>Fee Abstraction:</b> Users can pay transaction fees with several different tokens, making payments simple and flexible.

<b>Sub-Cent Fees:</b> Celo maintains low gas fees, often below a cent, keeping transactions affordable.

<b>Native Stablecoins:</b> Celo provides native stablecoins like cUSD, cEUR, cREAL, and cKES, offering a stable way to send and receive money. Check out Mento to learn more.

</details>

<details>
  <summary>COMMON TERMS IN WEB3 DEVELOPMENT.</summary>
<br>
<b>Blockchain:</b> (A database maintained by a distributed set of computers that do not share a trust relationship or common ownership. This arrangement     is referred to as decentralized. The content of a blockchain's database, or ledger, is authenticated using cryptographic techniques, preventing     its contents being edited or removed except according to a protocol's consensus mechanism)
  
Wallets are tools that create accounts, manage keys, and help users transact on a blockchain network.
  
<b>Smart Contract:</b> (Smart contracts are intructions embeded within code which are executed automatically by a computer program or a transaction protocol. They make actions such as transferring cryptocurrencies or other tokens possible.)
  
<b>Transactions:</b> (Ethereum transactions are network messages that include (among other things) a sender, recipient, value, and data payload.)
  
<b>Gas:</b> (A step of execution of a smart contract. Different operations consume different amounts of gas. To prevent denial-of-service attacks, transactions specify a maximum gas which bounds the steps of execution before a transaction is reverted.)
  
<b>Blocks:</b> (The unit of update to the blockchain. A block consists of a header identifying its position in the chain and other metadata, and a body that contains a list of transactions, and data structures that describe the new state after executing those transactions.)
  
<b>Consensus and finality:</b> (Ethereum uses Proof of Stake (PoS) for consensus, with finality achieved through the Casper FFG mechanism, which ensures that confirmed blocks are permanent. Celo also uses PoS combined with PBFT (Practical Byzantine Fault Tolerance), providing fast finality, meaning blocks are finalized almost instantly once added.)</a>

<b>Private Key:</b> (A private key is a long, randomly generated number that serves as a cryptographic key in blockchain networks. It is used to sign transactions and prove ownership of blockchain addresses and the assets within them.)
  
<b>Public Key:</b> (A public key is a cryptographic code used to facilitate secure transactions and interactions on a blockchain network. It is derived from a private key and can be openly shared without compromising the security of the associated assets.)
  
<b>Node:</b> (A node is a computer that runs the Ethereum client software and is connected to other nodes on the network. These nodes work together to verify transactions )
  
<b>JSON-RPC:</b> (JSON-RPC is used to communicate with the node through a Web3 provider, a software component that exposes a JSON-RPC API to the client application)
  
<b>Web3 Provider:</b> (Providers take JSON-RPC requests and return the response.)

<b>Contract ABI:</b> ( "ABI" stands for Application Binary Interface in the context of Ethereum smart contracts. It specifies how to interact with a smart contract deployed on the blockchain.)

</details>

<details>
  <summary>INTRODUTION TO SOLIDITY</summary>
<br>
Solidity is an EVM compatible language which supports a variety of data types that can be categorized mainly into value types and reference types. Other types such as function types and Tuples also exist.

<b>Value Types</b>-
Boolean, Integers, Fixed Point Numbers, Address, Bytes, String, Enums.

<b>Reference Types</b>-
Arrays, Structs, Mappings.

<b>Other Types</b>-
Function types- Can be internal or external (e.g., function (uint) external returns (bool))<br>
Tuples- Group multiple values (e.g., (uint, string, address)).<br>

Basic Structure Of A Function In Solidity:

<img src="https://github.com/eben619/Celo_Africa_Dao-Ghana_University_Tour/blob/main/function.avif" width="500px"><br>

🔭 Learning Solidity

📕 Read the docs: <https://docs.soliditylang.org>

- [Primitive Data Types](https://solidity-by-example.org/primitives/)
- [Mappings](https://solidity-by-example.org/mapping/)
- [Structs](https://solidity-by-example.org/structs/)
- [Modifiers](https://solidity-by-example.org/function-modifier/)
- [Events](https://solidity-by-example.org/events/)
- [Inheritance](https://solidity-by-example.org/inheritance/)
- [Payable](https://solidity-by-example.org/payable/)
- [Fallback](https://solidity-by-example.org/fallback/)

📧 Learn the [Solidity globals and units](https://solidity.readthedocs.io/en/v0.8.19/units-and-global-variables.html)

</details>

<details>
  <summary>CELO COMPOSER</summary>
<br>
A DApp is composed of at least:

* Smart Contracts: The backend code that runs on a blockchain (e.g., Solidity contracts on Ethereum or Celo).
* Frontend: The user interface (UI) often built with traditional web technologies (React, HTML, etc.).
* RPC (Remote Procedure Call): An endpoint that enables the DApp to communicate with the blockchain network (e.g., Infura, Alchemy).
* Private Key: A key used to sign transactions, especially in non-custodial wallets.
* Wallet Integration: Interaction with wallets like MetaMask or Valora for user authentication and transaction signing.

<a href="https://github.com/celo-org/celo-composer/blob/main/README.md">CELO COMPOSER</a> allows you to quickly build, deploy, and iterate on decentralized applications using Celo. It provides a number of template frameworks, examples, and Celo specific functionality to help you get started with your next DApp. It has the wallet integration and other key functionalities needed in building a DApp already implemented.

* Prerequisites
   * <a href='https://nodejs.org/en/download/package-manager'>Node.js (v20 or higher)</a>
   * <a href="https://git-scm.com/downloads">Git (v2.38 or higher)</a>

The easiest way to start with Celo Composer is using `@celo/celo-composer`. This CLI tool lets you quickly start building dApps on Celo for multiple frameworks, including React (with either react-celo or rainbowkit-celo), React Native (w/o Expo), Flutter, and Angular. To get started, just run the following command, and follow the steps:

- Step 1

```bash
npx @celo/celo-composer@latest create
```

- Step 2: Provide the Project Name: You will be prompted to enter the name of your project.

```text
What is your project name: 
```

- Step 3: Choose to Use Hardhat: You will be asked if you want to use Hardhat. Select Yes or No.

```text
Do you want to use Hardhat? (Y/n)
```

- Step 4: Choose to Use a Template: You will be asked if you want to use a template. Select `Yes` or `No`.

```text
Do you want to use a template?
```

- Step 5: Select a Template: If you chose to use a template, you will be prompted to select a template from the list provided.

```text
- Minipay
- Valora
- Social Connect
```

- Step 6: Provide the Project Owner's Name: You will be asked to enter the project owner's name.

```text
Project Owner name:
```

- Step 7: Wait for Project Creation: The CLI will now create the project based on your inputs. This may take a few minutes.

- Step 8: Follow the instructions to start the project. The same will be displayed on the console after the project is created.

```text
🚀 Your starter project has been successfully created!

Before you start the project, please follow these steps:

1. Rename the file:
   packages/react-app/.env.template
   to
   packages/react-app/.env

2. Open the newly renamed .env file and add all the required environment variables.

Once you've done that, you're all set to start your project!

Run the following commands from the packages/react-app folder to start the project:

   yarn install
   yarn react-app:dev
```

</details>


<details>
  <summary>WRITING A SIMPLE SAVINGS CONTRACT</summary>
<br>

```

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Savings {
    mapping(address => uint256) public balances;

    // Deposit funds into the savings account
    function deposit() public payable {
        require(msg.value > 0, "Deposit must be greater than 0");
        balances[msg.sender] += msg.value;
    }

    // Withdraw funds from the savings account
    function withdraw(uint256 _amount) public {
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        balances[msg.sender] -= _amount;
        payable(msg.sender).transfer(_amount);
    }

    // Check balance
    function getBalance() public view returns (uint256) {
        return balances[msg.sender];
    }
}


```

<b>mapping(address => uint256) public balances;:</b>
This creates a storage structure that links each user’s address to their balance in the contract.

<b>function deposit() public payable:</b>
Allows users to send funds to the contract. The msg.value represents the amount of funds sent, and this is added to the user's balance.

<b>function withdraw(uint256 _amount):</b>
Lets users withdraw a specified amount of funds from their balance. It checks if they have enough funds, deducts the amount, and transfers the funds to them.

<b>function getBalance():</b>
Returns the balance of the caller’s account.

This contract allows basic saving functionality, where users can deposit, withdraw, and check their balance. You can add more functions to improve the functionality of your DApp.

</details>

<details>
  <summary>COMPILE & DEPLOY THE CONTRACT USING HARDHAT</summary>
  <br>
After writing your savings contract, you can compile by using

```  
npx hardhat compile
```

After sucessful compilation, use the command below to deploy to Alfajores Testnet

```
npx hardhat run scripts/deploy.ts --network alfajores
```

</details>
<details>
  <summary>BUILDING A FRONTEND TO INTERACT WITH YOUR CONTRACT</summary>
<br>
We are going to create a simple frontend to interact with our contract. We are going to create a deposit component, a withdraw component, and a component to display our saving balance.
<br>
<b>Deposit.tsx Component</b>
  
```

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

```
<br>
<b>Withdraw.tsx Component</b>

```
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

```
<br>
<b>DisplayBalance.tsx Component</b>

```
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

```
<br>
<b>New useWeb3.ts file</b>

```
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

```
<br>
<b>New index.tsx Component that imports the Deposit, Withdraw and Display Balance component.</b>

```
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

```
</details>

<details>
  <summary>SOME PROJECT IDEAS THAT CAN BE IMPLEMENTED USING THE MINIPAY TEMPLATE</summary>
  <br>
  
<b>Micro-Payments Platform:</b> A system where users can make small, fast payments for services like articles, songs, or e-books.

<b>Subscription-Based Content:</b> Create a pay-per-use subscription system for premium content, such as online courses or tutorials.

<b>Crowdfunding Platform:</b> A decentralized crowdfunding site where backers use Minipay for quick, low-fee contributions to projects.

<b>Remittance System:</b> A remittance solution for people to send small payments globally with low fees and fast transactions, ideal for cross-border transfers.

<b>Event Ticketing:</b> Build a ticketing platform where users pay for event tickets using Minipay, integrating QR codes for verification.
</details>


## 🤝 Support

Join the Celo Ghana Developers Community

<img width="350px" src="https://github.com/eben619/Celo_Africa_Dao-Ghana_University_Tour/blob/main/CeloGhanaCommunity.jpg" align="center" alt="Celo Ghana WhatsApp"/>

Join the Celo Africa DAO Telegram Community

<img width="350px" src="https://github.com/eben619/BWC/blob/main/Scr.png" align="center" alt="Celo Telegram"/>

<p align="right">(<a href="#top">back to top</a>)</p>
