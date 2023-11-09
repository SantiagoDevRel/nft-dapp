// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT_CS is ERC721, Ownable {

    uint256 private s_totalSupply;

    constructor()
        ERC721("NFT_CS", "CSAFE");
        Ownable(msg.sender);
    {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://docs.gaming.chainsafe.io/img/logo.png";
    }

}
