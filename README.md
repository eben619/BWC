<div align="center">
  <img src="https://github.com/eben619/Celo_Africa_Dao-Ghana_University_Tour/blob/main/celo_isotype.svg" alt="Celo Logo" width="150px">
<h1 >CELO AFRICA DAO</h1>
</div>

### Link To Access Feedback form

https://docs.google.com/forms/d/e/1FAIpQLSfXogc7lHEgz9ajFhPEVyY7y33_esNzHgR3E8bH4LVz4Yconw/viewform


## INTRODUCTION

### Celo Foundation’s Role in the Web3 Ecosystem
Celo Foundation is at the forefront of the Web3 revolution, driving the adoption of decentralized finance and promoting financial inclusion worldwide. By leveraging blockchain technology, the foundation is working to create a more equitable and accessible financial system, paving the way for a future where everyone can participate in the global economy.
Celo's mobile-first approach aims to make decentralized finance (DeFi) accessible to smartphone users worldwide, especially in regions with limited access to traditional banking.

### 💱 Wallets & Transactions

<b>* What is a wallet</b><br>
  Wallets are tools that create accounts, manage keys, and help users transact on the Celo network.
  It's important to be careful when choosing a wallet because they manage your secret account keys. You should only use reputable wallets that are    well maintained by organizations/people that you trust.

  <b>* Finding wallet applications</b><br>
  There are currently some compatible wallets for Celo and other EVM compatible networks.<br>
  Metamask <a href="https://metamask.io/download/" target='_blank'>Click Here To Download Metamask</a><br>
  
  <b>* Connecting to Celo Alfajores testnet</b><br>
* <a href="http://alfajores.celoscan.io" rel="noreferrer">Celo's Alfajores Testnet Explorer</a>
* <a href="http://faucet.celo.org/alfajores" rel="noreferrer">Funding Your Wallet With Testnet Tokens</a>
  




A DApp is composed of at least:
* Smart contracts on a blockchain
* A web frontend user interface

<details>
  <summary>🌐 Common Terms Used In Web3.</summary><br>

* Blockchain (A database maintained by a distributed set of computers that do not share a trust relationship or common ownership. This arrangement     is referred to as decentralized. The content of a blockchain's database, or ledger, is authenticated using cryptographic techniques, preventing     its contents being edited or removed except according to a protocol's consensus mechanism)
  
* Smart Contract (Smart contracts are intructions embeded within code which are executed automatically by a computer program or a transaction          protocol. They make actions such as transferring cryptocurrencies or other tokens possible.)
  
* Transactions (Ethereum transactions are network messages that include (among other things) a sender, recipient, value, and data payload.)
  
* Data Structures (Ethereum’s state is stored locally on each node as a database, which contains the transactions and system state in a serialized     hashed data structure called a Merkle Patricia Tree.)
  
* Gas (A step of execution of a smart contract. Different operations consume different amounts of gas. To prevent denial-of-service attacks,           transactions specify a maximum gas which bounds the steps of execution before a transaction is reverted.)
  
* Blocks (The unit of update to the blockchain. A block consists of a header identifying its position in the chain and other metadata, and a body      that contains a list of transactions, and data structures that describe the new state after executing those transactions.)
  
* Consensus and finality (Ethereum’s consensus rules are defined in the reference specification, the Yellow Paper <a       href="https://ethereum.github.io/yellowpaper/paper.pdf" rel="noreferrer">(see Further Reading)</a>

* Private Key (A private key is a long, randomly generated number that serves as a cryptographic key in blockchain networks. It is used to sign         transactions and prove ownership of blockchain addresses and the assets within them.)
  
* Public Key (A public key is a cryptographic code used to facilitate secure transactions and interactions on a blockchain network. It is derived       from a private key and can be openly shared without compromising the security of the associated assets.)
  
* Node (A node is a computer that runs the Ethereum client software and is connected to other nodes on the network. These nodes work together to       verify transactions )
  
* JSON-RPC (JSON-RPC is used to communicate with the node through a Web3 provider, a software component that exposes a JSON-RPC API to the client     application)
  
* Web3 Provider (Providers take JSON-RPC requests and return the response.)

* Contract ABI ( "ABI" stands for Application Binary Interface in the context of Ethereum smart contracts. It specifies how to interact with a smart contract deployed on the blockchain.)

</details><br>


<details>
  <summary>Introduction To Solidity</summary><br>

Solidity is an EVM compatible language which supports a variety of data types that can be categorized mainly into value types and reference types. Other types such as function types and Tuples also exist.

<b>*Value Types</b>-
Boolean, Integers, Fixed Point Numbers, Address, Bytes, String, Enums.

<b>*Reference Types</b>-
Arrays, Structs, Mappings.

<b>*Other Types</b>-
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

</details><br>


<details>
  <summary>Writing A Simple Savings Smart Contract</summary><br>

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

# mapping(address => uint256) public balances;:
This creates a storage structure that links each user’s address to their balance in the contract.

# function deposit() public payable:
Allows users to send Ether to the contract. The msg.value represents the amount of Ether sent, and this is added to the user's balance.

# function withdraw(uint256 _amount):
Lets users withdraw a specified amount of Ether from their balance. It checks if they have enough funds, deducts the amount, and transfers the Ether to them.

# function getBalance():
Returns the balance of the caller’s account.

This contract allows basic saving functionality, where users can deposit, withdraw, and check their balance.

</details>

<details>
  <summary>🌐 Common Terms Used In Web3.</summary><br>



</details>
<details>
  <summary>🌐 Common Terms Used In Web3.</summary><br>



</details>


 
    ### 🌐 What Is Minipay?
MiniPay is a lightweight stablecoin wallet integrated within the Opera Mini browser, designed specifically for users in emerging markets.MiniPay is focused on financial inclusion, particularly for the unbanked or underbanked populations. Transactions are inexpensive, with minimal fees (less than 0.01 cUSD), and the wallet is optimized for regions with poor connectivity, offering a user-friendly solution for secure, accessible financial services.
MiniPay we has over 2.5 million wallets and over 250,000 daily active users.

### ⌨️ Writing A Simple Smart Contract

```

// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Ebenezer is ERC20 {
    constructor() ERC20("Ebenezer", "$EBN") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }
}


```
<detail>
<summary>Without the imports from openzeppelin a normal ERC20 contract would look like this.</summary>


```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract EbenezerToken {
    string public name = "Ebenezer";
    string public symbol = "EBN";
    uint8 public decimals = 18;
    uint256 public totalSupply;

    mapping(address => uint256) private balances;
    mapping(address => mapping(address => uint256)) private allowances;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    constructor() {
        totalSupply = 10000 * 10 ** uint256(decimals);
        balances[msg.sender] = totalSupply;
        emit Transfer(address(0), msg.sender, totalSupply);
    }

    function balanceOf(address account) public view returns (uint256) {
        return balances[account];
    }

    function transfer(address recipient, uint256 amount) public returns (bool) {
        require(recipient != address(0), "Transfer to the zero address");
        require(balances[msg.sender] >= amount, "Transfer amount exceeds balance");

        balances[msg.sender] -= amount;
        balances[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
        return true;
    }

    function approve(address spender, uint256 amount) public returns (bool) {
        require(spender != address(0), "Approve to the zero address");

        allowances[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function allowance(address owner, address spender) public view returns (uint256) {
        return allowances[owner][spender];
    }

    function transferFrom(address sender, address recipient, uint256 amount) public returns (bool) {
        require(sender != address(0), "Transfer from the zero address");
        require(recipient != address(0), "Transfer to the zero address");
        require(balances[sender] >= amount, "Transfer amount exceeds balance");
        require(allowances[sender][msg.sender] >= amount, "Transfer amount exceeds allowance");

        balances[sender] -= amount;
        balances[recipient] += amount;
        allowances[sender][msg.sender] -= amount;
        emit Transfer(sender, recipient, amount);
        return true;
    }

    function mint(address account, uint256 amount) public returns (bool) {
        require(account != address(0), "Mint to the zero address");

        totalSupply += amount;
        balances[account] += amount;
        emit Transfer(address(0), account, amount);
        return true;
    }

    function burn(uint256 amount) public returns (bool) {
        require(balances[msg.sender] >= amount, "Burn amount exceeds balance");

        totalSupply -= amount;
        balances[msg.sender] -= amount;
        emit Transfer(msg.sender, address(0), amount);
        return true;
    }
}


```
</detail>

### 📚 Syntax Explanation

<b>
Inheritance in Solidity allows a contract to use the functions, events, and state variables of another contract. This enables code reuse and modularity. 
</b>

When Ebenezer inherits from ERC20, it means that Ebenezer will have all the functionalities of the ERC20 contract, such as token transfer, balance checking, and allowance handling.

<b>contract Ebenezer:</b>
This declares a new contract named Ebenezer.

<b>is ERC20:</b>
The keyword is indicates that the Ebenezer contract inherits from another contract, in this case, the ERC20 contract.
The imported ERC20 contract is provided by OpenZeppelin that implements the standard ERC20 token functionality.
The syntax constructor() ERC20("Ebenezer", "EBN") is actually shorthand for calling the constructor of the inherited ERC20 contract. Here’s a detailed explanation:

<b>*constructor():</B>
Declares the constructor function of the EbenezerToken contract.

<b>*ERC20("Ebenezer", "EBN"):</b>
Calls the constructor of the parent ERC20 contract, passing in the name and symbol for the token.

In essence, this constructor setup ensures that when the EbenezerToken is deployed, it is properly initialized as an ERC20 token with the specified name and symbol, and it also creates the initial token supply.

The line <b>_mint(msg.sender, 100000 * 10 ** decimals())</b> in an ERC20 contract mints new tokens and assigns them to the deployer's address. Here's a breakdown of what each part does:

<b>_mint:</b> 
This function is an internal function provided by OpenZeppelin's ERC20 contract. It creates new tokens and assigns them to a specified address, increasing the total supply of tokens.

<b>msg.sender:</b>
This is a global variable in Solidity that refers to the address that is currently calling the function. In the context of a constructor, msg.sender is the address that deployed the contract.

<b>10000 * 10 ** decimals():</b> This calculates the number of tokens to be minted, taking into account the token's decimal places. Here's how this calculation works:

<b>decimals()</b> is a function in the ERC20 contract that returns the number of decimal places the token uses, typically 18 for most ERC20 tokens.

<b>10 ** decimals()</b> calculates 10 to the power of the number of decimals, which in the case of 18 decimals would be 10^18.

<b>10000 * 10 ** decimals()</b> then multiplies 10,000 by 10^18 to get the total number of smallest units (often called "wei" in the context of ERC20 tokens) for 10,000 tokens.

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
