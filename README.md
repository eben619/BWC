<div align="center">
  <img src="https://github.com/eben619/Celo_Africa_Dao-Ghana_University_Tour/blob/main/celo_isotype.svg" alt="Celo Logo" width="150px">
<h1 >CELO AFRICA DAO</h1>
</div>

<details>
  <summary>USEFUL LINKS</summary>
  <br>
* <a href="http://alfajores.celoscan.io" rel="noreferrer">Celo's Alfajores Testnet Explorer</a><br>
* <a href="http://faucet.celo.org/alfajores" rel="noreferrer">Funding Your Wallet With Testnet Tokens</a><br>
* <a href="https://metamask.io/download/" target='_blank'>Click Here To Download Metamask</a><br>


</details>

<details>
  <summary>INTRODUCTION</summary>
<br>
Celo Foundation’s Role in the Web3 Ecosystem
Celo Foundation is at the forefront of the Web3 revolution, driving the adoption of decentralized finance and promoting financial inclusion worldwide. By leveraging blockchain technology, the foundation is working to create a more equitable and accessible financial system, paving the way for a future where everyone can participate in the global economy.
Celo's mobile-first approach aims to make decentralized finance (DeFi) accessible to smartphone users worldwide, especially in regions with limited access to traditional banking.<br>

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

We are going to create a simple frontend to interact with our contract. We are going to create a deposit component, a withdraw component, and a component to display our saving balance.

</details>
<details>
  <summary>Common Terms Used In Web3.</summary>



</details>


 
### 🌐 What Is Minipay?
MiniPay is a lightweight stablecoin wallet integrated within the Opera Mini browser, designed specifically for users in emerging markets.MiniPay is focused on financial inclusion, particularly for the unbanked or underbanked populations. Transactions are inexpensive, with minimal fees (less than 0.01 cUSD), and the wallet is optimized for regions with poor connectivity, offering a user-friendly solution for secure, accessible financial services.
MiniPay we has over 2.5 million wallets and over 250,000 daily active users.


### 🔧 Compile the Contract
With the contract above as the active tab in the Editor, compile the contract.
A quick way to compile is to hit ctrl + s. You can also compile by going to the Solidity compiler and clicking the compile button, or by right clicking a file in the File Explorer, or by clicking the play button at the top of the Editor.

### 🚀 Deploying the contract
Go to the Deploy & Run Transactions plugin at the sidebar section.
At the top of this plugin is the Environment select box. Here you choose Injected Provider which is used to connect Remix with a Browser Wallet (e.g. Metamask) which is generally for deploying to a public network.
Make sure you have switched your wallet network to Celo's Alfajores Testnet. Deploy your contract and approve the contract creation transaction from the MetaMask pop-up then wait for the confirmation pop-up.
With the deployment done, we can go ahead and verify the smart contract too.

  
### References for Solidity

<https://docs.soliditylang.org/en/latest/>


### Introduction To Celo Composer

<a href="https://github.com/celo-org/celo-composer/blob/main/README.md">CELO COMPOSER</a>

Celo Composer allows you to quickly build, deploy, and iterate on decentralized applications using Celo. It provides a number of frameworks, examples, and Celo specific functionality to help you get started with your next dApp.

* Prerequisites
   * <a href='https://nodejs.org/en/download/package-manager'>Node.js (v20 or higher)</a>
   * <a href="https://git-scm.com/downloads">Git (v2.38 or higher)</a>

## 🤝 Support

Join the Celo Ghana Developers Community

<img width="350px" src="https://github.com/eben619/Celo_Africa_Dao-Ghana_University_Tour/blob/main/CeloGhanaCommunity.jpg" align="center" alt="Celo Ghana WhatsApp"/>



<p align="right">(<a href="#top">back to top</a>)</p>
