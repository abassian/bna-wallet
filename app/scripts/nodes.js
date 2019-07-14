"use strict";
var nodes = function() {};
nodes.customNode = require("./nodeHelpers/customNode");
nodes.infuraNode = require("./nodeHelpers/infura");
nodes.etherscanNode = require("./nodeHelpers/etherscan");
nodes.nodeTypes = {
    BNA: "BNA",
    BNAT: "Testnet BNA",
    ETH: "ETH",
    ETC: "ETC",
    ETCT: "Testnet ETC",
    Ropsten: "ROPSTEN ETH",
    Kovan: "KOVAN ETH",
    Rinkeby: "RINKEBY ETH",
    RSK: "RSK",
    EXP: "EXP",
    UBQ: "UBQ",
    PIRL: "PIRL",
    POA: "POA",
    TOMO: "TOMO",
    ELLA: "ELLA",
    ETSC: "ETSC",
    MUSIC: "MUSIC",
    ESN: "ESN",
    AKA: "AKA",
    Custom: "CUSTOM ETH"
};
nodes.tldTypes = {
    ETH: ".eth",
    ETC: ".etc",
    Kovan: ".eth",
    Rinkeby: ".eth",
    RSK: ".rsk"
};

nodes.ensNodeTypes = [
    nodes.nodeTypes.ETH,
    nodes.nodeTypes.Ropsten,
    nodes.nodeTypes.ETC
];
nodes.customNodeObj = {
    name: "CUS",
    blockExplorerTX: "",
    blockExplorerAddr: "",
    type: nodes.nodeTypes.Custom,
    eip155: false,
    chainId: "",
    tokenList: [],
    abiList: [],
    service: "Custom",
    lib: {
        SERVERURL: null,
        pendingPosts: null,
        config: null,
        getCurrentBlock: null,
        getBalance: null,
        getTransaction: null,
        getTransactionData: null,
        sendRawTx: null,
        getEstimatedGas: null,
        getEthCall: null,
        queuePost: null,
        post: null
    }
};

nodes.alternativeBalance = {
    BNA: {
        balance: "Loading",
        node: "bna_mainnet",
        symbol: "BNA"
    }
};

nodes.nodeList = {
    bna_mainnet: {
        name: "Abassian - BNA",
        blockExplorerTX: "https://explorer.abassian.com/tx/[[txHash]]",
        blockExplorerAddr: "https://explorer.abassian.com/addr/[[address]]",
        type: nodes.nodeTypes.BNA,
        eip155: true,
        chainId: 91,
        tokenList: [],
        abiList: [],
        service: "Abassian.network",
        abiList: require("./abiDefinitions/bna.json"),
        lib: new nodes.customNode("http://localhost", "8515")
    },
    bna_testnet3: {
        name: "BNA Testnet 3.0",
        blockExplorerTX:
            "https://explorer-testnet.callisto.network/tx/[[txHash]]",
        blockExplorerAddr:
            "https://explorer-testnet.callisto.network/addr/[[address]]",
        type: nodes.nodeTypes.BNAT,
        eip155: true,
        chainId: 20729,
        tokenList: [],
        abiList: [],
        service: "Abassian.network",
        abiList: require("./abiDefinitions/clo.json"),
        lib: new nodes.customNode("https://clo-testnet3.0xinfra.com/", "")
    },
    etc_ethereumcommonwealth_geth: {
        name: "ETC",
        blockExplorerTX: "https://gastracker.io/tx/[[txHash]]",
        blockExplorerAddr: "https://gastracker.io/addr/[[address]]",
        type: nodes.nodeTypes.ETC,
        eip155: true,
        chainId: 61,
        tokenList: require("./tokens/etcTokens.json"),
        abiList: require("./abiDefinitions/etcAbi.json"),
        service: "Ethereum Commonwealth Geth",
        lib: new nodes.customNode("https://etc-geth.0xinfra.com/", "")
    },
    etc_ethereumcommonwealth_parity: {
        name: "ETC",
        blockExplorerTX: "https://gastracker.io/tx/[[txHash]]",
        blockExplorerAddr: "https://gastracker.io/addr/[[address]]",
        type: nodes.nodeTypes.ETC,
        eip155: true,
        chainId: 61,
        tokenList: require("./tokens/etcTokens.json"),
        abiList: require("./abiDefinitions/etcAbi.json"),
        service: "Ethereum Commonwealth Parity",
        lib: new nodes.customNode("https://etc-parity.0xinfra.com/", "")
    },
    etc_gastracker: {
        name: "ETC",
        blockExplorerTX: "https://gastracker.io/tx/[[txHash]]",
        blockExplorerAddr: "https://gastracker.io/addr/[[address]]",
        type: nodes.nodeTypes.ETC,
        eip155: true,
        chainId: 61,
        tokenList: require("./tokens/etcTokens.json"),
        abiList: require("./abiDefinitions/etcAbi.json"),
        service: "gastracker.io",
        lib: new nodes.customNode("https://web3.gastracker.io/", "")
    },
    etc_ethereumclassic_network: {
        name: "ETC",
        blockExplorerTX: "https://gastracker.io/tx/[[txHash]]",
        blockExplorerAddr: "https://gastracker.io/addr/[[address]]",
        type: nodes.nodeTypes.ETC,
        eip155: true,
        chainId: 61,
        tokenList: require("./tokens/etcTokens.json"),
        abiList: require("./abiDefinitions/etcAbi.json"),
        service: "ETC Cooperative",
        lib: new nodes.customNode("https://ethereumclassic.network/", "")
    },
    etc_testnet: {
        name: "ETC Testnet",
        type: nodes.nodeTypes.ETCT,
        blockExplorerTX: "http://mordenexplorer.ethertrack.io/tx/[[txHash]]",
        blockExplorerAddr:
            "http://mordenexplorer.ethertrack.io/addr/[[address]]",
        eip155: true,
        chainId: 62,
        tokenList: [],
        abiList: [],
        service: "ethertrack.io",
        lib: new nodes.customNode("https://morden.eos-classic.io", "")
    },
    eth_mew: {
        name: "ETH",
        blockExplorerTX: "https://etherscan.io/tx/[[txHash]]",
        blockExplorerAddr: "https://etherscan.io/address/[[address]]",
        type: nodes.nodeTypes.ETH,
        eip155: true,
        chainId: 1,
        tokenList: require("./tokens/ethTokens.json"),
        abiList: require("./abiDefinitions/ethAbi.json"),
        service: "myetherwallet.com",
        lib: new nodes.customNode("https://api.myetherwallet.com/eth", "")
    },
    eth_ethscan: {
        name: "ETH",
        blockExplorerTX: "https://etherscan.io/tx/[[txHash]]",
        blockExplorerAddr: "https://etherscan.io/address/[[address]]",
        type: nodes.nodeTypes.ETH,
        eip155: true,
        chainId: 1,
        tokenList: require("./tokens/ethTokens.json"),
        abiList: require("./abiDefinitions/ethAbi.json"),
        service: "Etherscan.io",
        lib: new nodes.etherscanNode("api")
    },
    eth_infura: {
        name: "ETH",
        blockExplorerTX: "https://etherscan.io/tx/[[txHash]]",
        blockExplorerAddr: "https://etherscan.io/address/[[address]]",
        type: nodes.nodeTypes.ETH,
        eip155: true,
        chainId: 1,
        tokenList: require("./tokens/ethTokens.json"),
        abiList: require("./abiDefinitions/ethAbi.json"),
        service: "infura.io",
        lib: new nodes.infuraNode("https://mainnet.infura.io/mew")
    },
    rsk: {
        name: "RSK",
        blockExplorerTX: "https://explorer.rsk.co/tx/[[txHash]]",
        blockExplorerAddr: "https://explorer.rsk.co/addr/[[address]]",
        type: nodes.nodeTypes.RSK,
        eip155: true,
        chainId: 31,
        tokenList: require("./tokens/rskTokens.json"),
        abiList: require("./abiDefinitions/rskAbi.json"),
        estimateGas: true,
        service: "GK2.sk",
        lib: new nodes.customNode("https://rsk-test.gk2.sk/", "")
    },
    pirl: {
        name: "PIRL",
        blockExplorerTX:
            "https://poseidon.pirl.io/explorer/transaction/[[txHash]]",
        blockExplorerAddr:
            "https://poseidon.pirl.io/explorer/address/[[address]]",
        type: nodes.nodeTypes.PIRL,
        eip155: true,
        chainId: 3125659152,
        tokenList: require("./tokens/pirlTokens.json"),
        abiList: require("./abiDefinitions/pirlAbi.json"),
        estimateGas: true,
        service: "pirl.io",
        lib: new nodes.customNode("https://wallrpc.pirl.io", "")
    },
    poa: {
        name: "POA",
        blockExplorerTX: "https://poaexplorer.com/tx/[[txHash]]",
        blockExplorerAddr: "https://poaexplorer.com/account/[[address]]",
        type: nodes.nodeTypes.POA,
        eip155: true,
        chainId: 99,
        tokenList: [],
        abiList: [],
        estimateGas: true,
        service: "poa.infura.io",
        lib: new nodes.infuraNode("https://poa.infura.io", "")
    }
};
module.exports = nodes;
