// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CommunityContract {
    struct Community {
        string name;
        string description;
        uint totalMembers;
        uint tokenBalance;
        string tokenName;
        string tokenSymbol;
        uint exchangeRate;
    }

    struct StakingInfo {
        uint stakedAmount;
        uint unlockTime; // When the staked amount can be withdrawn
    }

    Community[] public communities;

    function createCommunity(
        string memory _name,
        string memory _description,
        string memory _tokenName,
        string memory _tokenSymbol,
        uint _exchangeRate
    ) public {
        Community memory newCommunity = Community({
            name: _name,
            description: _description,
            totalMembers: 0,
            tokenName: _tokenName,
            tokenBalance: 0,
            tokenSymbol: _tokenSymbol,
            exchangeRate: _exchangeRate
        });
        communities.push(newCommunity);
    }

    function getCommunities() public view returns (Community[] memory) {
        return communities;
    }
}
