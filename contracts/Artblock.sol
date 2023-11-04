// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ArtBlock is ERC20("ArtBlock", "ABX") {
    function mint(uint amount) public {
        _mint(msg.sender, amount * 10 ** 18);
    }
}
