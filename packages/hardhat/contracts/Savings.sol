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