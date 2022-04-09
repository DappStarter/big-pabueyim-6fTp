require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender this bike deny nominee coffee honey light army giggle'; 
let testAccounts = [
"0x0f0e6fd9ef66267ec5c7f0ac54eae1a707294d78eacc14784e0e7948d386a5bd",
"0x7b15708577ffd6304fa589e90f4da3a449c0df2b9d06c4a3a3ce8f1749c41ccc",
"0x219f21696631d9e0fd687202ceebf13fdf6506a854010b0baae23d361786cbdc",
"0x4088223ac785019949c1c1334b5413f006ce06da8a006fc6f407c576c789dde1",
"0x4280b07a9e2c78fea2ba93164d58f58fc84a6d764a73a1e4a116165c9443e7b0",
"0xf31219f12885c327d07fd3f9ba1a041cea7fbde8047f5f04936b448524232520",
"0x088302e171002799ecb9a6f07ebce5939cdf92d4bb3c21531b0f96554f163625",
"0x0b37e14cd7bd1b4d1a70cb08e84cb29f8aa8c6e937383cfb0e928921a656bbcc",
"0x6279f8cf7ace30659241b64ca26445d1b7f8fbaf58fb7106751ecc803fd82ad3",
"0x7a4f8f3538068b5c1fe365cb24e47eb583234b0012386ddd69ed56bbba60521d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

