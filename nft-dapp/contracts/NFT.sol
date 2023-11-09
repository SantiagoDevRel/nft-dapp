// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT_CS is ERC721, Ownable {

    uint256 private s_totalSupply;
    uint256 private s_cost;

    constructor()
        ERC721("NFT_CS", "CSAFE");
        Ownable(msg.sender);
        s_cost = 0;
    {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://docs.gaming.chainsafe.io/img/logo.png";
    }

    function safeMint() public payable {
        require(msg.value == cost(), "The value doesn't match the cost of the NFT");
        s_totalSupply++;
        uint256 memory _tokenId = s_totalSupply;
        _safeMint(msg.sender, _tokenId);
    }

    function changeCost(uint256 _cost) external onlyOwner {
        require(_cost < 1 ether, "the NFT can't cost more than 1 ether");
        s_cost = _cost;
    }

    function cost() public view returns(uint256){
        return s_cost;
    }

    function totalSupply() public view returns(uint256){
        return s_totalSupply;
    }
}
