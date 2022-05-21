require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture street cruise noble social hunt fork bottom track'; 
let testAccounts = [
"0xa1fec58532c31eeb41da74b92871d6bf7b7dab35b4f6c4aea9706352a5f56af8",
"0x21774adde42bb04cdedf75ef76ba974f36d24a26210770ed9664b50b81d3f4a3",
"0x097bf927df02c4cac02b4222866c74836a88bf8084350db51f76f73b9bc8165a",
"0x39fbfcc868bd3cee6f2c9a0092ac55ad674cf3679546d3ecc21f2daa5071e0dc",
"0x98ec214a3be231958b4dd414085f2f94c460a891933017cad25227fc81c2b0ec",
"0x81577ce43d6b5ed8408bf05056c3c41c3694c34319c6c7ccdf9323bc18438899",
"0xc85cce01f0b85aa565b491ab9ce4f0a34febd6e4ac6df0ea31358b5a3796f77a",
"0x4a0f2523944c11482168386a7be3a27f94c2c96a53139ebd6bb874c260cb2d0b",
"0x22ecc0110b7243195668179341c1958bd016f30772e6ee229eb73f3438dd9b4d",
"0x686c431db74294032ee5247601b69029a273c351d0ecbf1a5c41178af028846c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

