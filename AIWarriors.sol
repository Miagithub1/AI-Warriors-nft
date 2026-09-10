// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract AIWarriors is ERC721URIStorage, Ownable {
 uint256 public constant MAX_SUPPLY=10000;
 uint256 public mintPrice=0.01 ether;
 uint256 public totalMinted;
 mapping(address=>uint256) public minted;
 constructor() ERC721("AI Warriors","AIW") Ownable(msg.sender){}
 function mint(uint256 n) external payable {require(n>0&&n<=5,"Invalid amount");require(totalMinted+n<=MAX_SUPPLY,"Sold out");require(minted[msg.sender]+n<=5,"Wallet limit");require(msg.value>=mintPrice*n,"Insufficient ETH");for(uint256 i=0;i<n;i++){_safeMint(msg.sender,++totalMinted);}minted[msg.sender]+=n;}
 function setMintPrice(uint256 p) external onlyOwner{mintPrice=p;}
 function setTokenURI(uint256 id,string calldata u) external onlyOwner{_setTokenURI(id,u);}
 function withdraw() external onlyOwner{payable(owner()).transfer(address(this).balance);}
}