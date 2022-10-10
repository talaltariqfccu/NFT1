async function main() {
  const MyNFT = await ethers.getContractFactory("Mynft");

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy();
  console.log("Contract deployed to address:", myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//0x271D2BeB5db7266Cd34D512C8F8c06AD247fab4a
// 0x79e1805a9B0e7920f75f248D16A8589483035753