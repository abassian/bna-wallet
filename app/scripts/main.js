"use strict";
require("./localStoragePolyfill");
require("babel-polyfill");
let IS_CX = false;
if (typeof chrome != "undefined")
    IS_CX = chrome.windows === undefined ? false : true;
var angular = require("angular");
var angularTranslate = require("angular-translate");
var angularTranslateErrorLog = require("angular-translate-handler-log");
var angularSanitize = require("angular-sanitize");
var angularAnimate = require("angular-animate");
var bip39 = require("bip39");
var HDKey = require("hdkey");
window.hd = { bip39: bip39, HDKey: HDKey };
var BigNumber = require("bignumber.js");
window.BigNumber = BigNumber;
var marked = require("./staticJS/customMarked");
window.marked = marked;
var ethUtil = require("ethereumjs-util");
ethUtil.crypto = require("crypto");
ethUtil.Tx = require("ethereumjs-tx");
ethUtil.scrypt = require("scryptsy");
ethUtil.uuid = require("uuid");
ethUtil.solidityCoder = require("./solidity/coder");
ethUtil.solidityUtils = require("./solidity/utils");
ethUtil.WAValidator = require("wallet-address-validator");
window.ethUtil = ethUtil;
var format = require("string-format");
window.format = format;
var browser = require("detect-browser");
window.browser = browser;
const trezorDeviceListener = require("./trezor.deviceListener");

// fixme: window variables should be accessed as services for dependency injection

// we can keep winow vars for useage in conosole, but pain to keep handling order right

var nodes = require("./nodes");
window.nodes = nodes;

// Wallet loads coinPriceService from window, or would make angular service
const coinPriceService = require("./services/coinPrice.service");

window.coinPriceService = new coinPriceService();

var Wallet = require("./Wallet");
window.Wallet = Wallet;
var Web3Wallet = require("./web3Wallet");
window.Web3Wallet = Web3Wallet;
var Token = require("./tokenlib");
window.Token = Token;
var globalFuncs = require("./globalFuncs");
window.globalFuncs = globalFuncs;
var uiFuncs = require("./uiFuncs");
window.uiFuncs = uiFuncs;
var etherUnits = require("./etherUnits");
window.etherUnits = etherUnits;
var ajaxReq = require("./ajaxReq");
window.ajaxReq = ajaxReq;

var ethFuncs = require("./ethFuncs");
window.ethFuncs = ethFuncs;
var Validator = require("./validator");
window.Validator = Validator;

var ens = require("./ens");
window.ens = ens;
var translate = require("./translations/translate.js");

if (IS_CX) {
    var cxFuncs = require("./cxFuncs");
    window.cxFuncs = cxFuncs;
} else {
    const trezorConnect = require("trezor-connect").default;
    var digitalBitboxUsb = require("./staticJS/digitalBitboxUsb");
    var digitalBitboxEth = require("./staticJS/digitalBitboxEth");
    trezorConnect.manifest({
        email: "yograterol@callisto.network",
        appUrl: "https://wallet.callisto.network/"
    });
    window.TrezorConnect = trezorConnect;
    window.DigitalBitboxUsb = digitalBitboxUsb;
    window.DigitalBitboxEth = digitalBitboxEth;
}

const { updateAppVersion } = require("./updateAppVersion");

// CONTROLLERS

var tabsCtrl = require("./controllers/tabsCtrl");
var viewCtrl = require("./controllers/viewCtrl");
var coldStakingCtrl = require("./controllers/coldStakingCtrl");
var walletGenCtrl = require("./controllers/walletGenCtrl");
var bulkGenCtrl = require("./controllers/bulkGenCtrl");
var decryptWalletCtrl = require("./controllers/decryptWalletCtrl");
var viewWalletCtrl = require("./controllers/viewWalletCtrl");
const TxStatusController = require("./controllers/TxStatus.controller");
var sendTxCtrl = require("./controllers/sendTxCtrl");
var swapCtrl = require("./controllers/swapCtrl");
var signMsgCtrl = require("./controllers/signMsgCtrl");
var contractsCtrl = require("./controllers/contractsCtrl");
var broadcastTxCtrl = require("./controllers/broadcastTxCtrl");
var ensCtrl = require("./controllers/ensCtrl");
var DexnsController = require("./controllers/DexnsController");
var offlineTxCtrl = require("./controllers/offlineTxCtrl");
var walletBalanceCtrl = require("./controllers/walletBalanceCtrl");
var backgroundNodeCtrl = require("./controllers/backgroundNodeCtrl");
var encryptCtrl = require("./controllers/encryptCtrl");
var helpersCtrl = require("./controllers/helpersCtrl");
var messagesControl = require("./controllers/messagesCtrl");
var switchNetworkCtrl = require("./controllers/switchNetworkCtrl");

// SERVICES
const changeNowService = require("./services/changeNow.service");
const lookupService = require("./services/lookup.service");
const globalService = require("./services/global.service");
const coldStakingService = require("./services/coldStaking.service");
const modalService = require("./services/modal.service");
const walletService = require("./services/wallet.service");
const messageService = require("./services/message.service");
const dexnsService = require("./services/dexns.service");
const backgroundNodeService = require("./services/backgroundNode.service");

// DIRECTIVES
const contractInteractModal = require("./directives/contract-interact-modal");
const equivalentValues = require("./directives/equivalentValues");
const walletBalancesTable = require("./directives/walletBalancesTable");
const nodeSelectorList = require("./directives/nodeSelectorList");
const networkSelector = require("./directives/networkSelector");
const eosKeypair = require("./directives/eos-keypair");
const sendTxModal = require("./directives/sendTxModal");
const validTxHash = require("./directives/validTxHash");
const swapOpenOrderForm = require("./directives/swapOpenOrderForm");
const swapInitForm = require("./directives/swapInitForm");
const generateWalletForm = require("./directives/generateWalletForm");
const customNodeForm = require("./directives/customNodeForm");
const officialityChecker = require("./directives/officiality-checker");
const lookup = require("./directives/crosschain-lookup");
// const dexnsNameDisplay = require("./directives/dexns-name-display");
const blockiesDrtv = require("./directives/blockiesDrtv");
const addressFieldDrtv = require("./directives/addressFieldDrtv");
const QRCodeDrtv = require("./directives/QRCodeDrtv");
const walletDecryptDrtv = require("./directives/walletDecryptDrtv");
const cssThemeDrtv = require("./directives/cssThemeDrtv");
const cxWalletDecryptDrtv = require("./directives/cxWalletDecryptDrtv");
const fileReaderDrtv = require("./directives/fileReaderDrtv");
const transactionCost = require("./directives/transactionCost");
const arrayInputDrtv = require("./directives/arrayInputDrtv");
const newMessagesDrtv = require("./directives/newMessagesDrtv");
const accountBalanceTable = require("./directives/accountBalanceTable");
const tokenBalances = require("./directives/tokenBalances");
const sidebarAds = require("./directives/sidebar-ads");
const sidebar = require("./directives/sidebar");
const accountInfo = require("./directives/accountInfo");
const messagesOverview = require("./directives/messagesOverview");
const sendTransactionForm = require("./directives/sendTransactionForm");
const dexnsTokenRegistrationForm = require("./directives/dexns-token-registration");
const networkInfo = require("./directives/networkInfo");
const txStatus = require("./directives/txStatus");

const coinIcon = require("./directives/coinIcon");
if (IS_CX) {
    var addWalletCtrl = require("./controllers/CX/addWalletCtrl");
    var cxDecryptWalletCtrl = require("./controllers/CX/cxDecryptWalletCtrl");
    var myWalletsCtrl = require("./controllers/CX/myWalletsCtrl");
    var mainPopCtrl = require("./controllers/CX/mainPopCtrl");
    var quickSendCtrl = require("./controllers/CX/quickSendCtrl");
}

const toArray = require("./filters/toArray.filter");

var app = angular.module("mewApp", [
    "pascalprecht.translate",
    "ngSanitize",
    "ngAnimate"
]);
app.config([
    "$compileProvider",
    function($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(
            /^\s*(|blob|https|mailto):/
        );
    }
]);
app.config([
    "$translateProvider",
    function($translateProvider) {
        $translateProvider.useMissingTranslationHandlerLog();
        new translate($translateProvider);
    }
]);
app.config([
    "$animateProvider",
    function($animateProvider) {
        $animateProvider.classNameFilter(/^no-animate$/);
    }
]);
app.factory("globalService", [
    "$http",
    "$httpParamSerializerJQLike",
    globalService
]);
app.factory("walletService", walletService);
app.factory("backgroundNodeService", backgroundNodeService);

app.factory("changeNowService", changeNowService);
app.factory("modalService", modalService);

app.factory("messageService", messageService);

app.factory("dexnsService", dexnsService);

app.factory("lookupService", ["dexnsService", lookupService]);

app.factory("messageService", messageService);
app.factory("coldStakingService", ["walletService", coldStakingService]);

app.directive("equivalentValues", equivalentValues);
app.directive("walletBalancesTable", ["walletService", walletBalancesTable]);
app.directive("coinIcon", coinIcon);
app.directive("networkSelector", networkSelector);
app.directive("nodeSelectorList", nodeSelectorList);
app.directive("validTxHash", validTxHash);
app.directive("swapInitForm", swapInitForm);
app.directive("generateWalletForm", generateWalletForm);
app.directive("accountBalanceTable", [
    "coldStakingService",
    "$interval",
    accountBalanceTable
]);
app.directive("sidebarAds", ["$interval", sidebarAds]);
app.directive("sidebar", ["$timeout", sidebar]);
app.directive("accountInfo", accountInfo);
app.directive("tokenBalances", tokenBalances);
app.directive("sendTransactionForm", [
    "walletService",
    "globalService",
    sendTransactionForm
]);
app.directive("officialityChecker", [officialityChecker]);
// app.directive("dexnsTokenRegistrationForm", dexnsTokenRegistrationForm);
// app.directive("dexnsNameDisplay", [
//     "dexnsService",
//     "walletService",
//     "globalService",
//     dexnsNameDisplay
// ]);
app.directive("sendTxModal", sendTxModal);
app.directive("networkInfo", networkInfo);
app.directive("txStatus", txStatus);
app.directive("eosKeypair", eosKeypair);
app.directive("swapOpenOrderForm", swapOpenOrderForm);
app.directive("lookup", ["$rootScope", "lookupService", lookup]);
app.directive("blockieAddress", blockiesDrtv);
app.directive("cssThemeDrtv", cssThemeDrtv);
app.directive("addressField", ["lookupService", addressFieldDrtv]);
app.directive("qrCode", QRCodeDrtv);
app.directive("onReadFile", fileReaderDrtv);
app.directive("walletDecryptDrtv", walletDecryptDrtv);
app.directive("cxWalletDecryptDrtv", cxWalletDecryptDrtv);
app.directive("messagesOverview", [
    "globalService",
    "walletService",
    "messageService",
    messagesOverview
]);
app.directive("arrayInputDrtv", arrayInputDrtv);
app.directive("newMessagesDrtv", ["globalService", newMessagesDrtv]);
app.directive("transactionCost", [transactionCost]);
app.directive("contractInteractModal", [contractInteractModal]);

app.directive("customNodeForm", customNodeForm);

app.filter("toArray", toArray);

app.controller("tabsCtrl", [
    "$http",
    "$scope",
    "globalService",
    "walletService",
    "$translate",
    "$sce",
    "$interval",
    "$rootScope",
    tabsCtrl
]);
app.controller("switchNetworkCtrl", [
    "$scope",
    "$rootScope",
    "globalService",
    switchNetworkCtrl
]);
app.controller("viewCtrl", ["$scope", "globalService", "$sce", viewCtrl]);
app.controller("walletGenCtrl", ["$rootScope", "$scope", walletGenCtrl]);
app.controller("bulkGenCtrl", ["$scope", bulkGenCtrl]);
app.controller("decryptWalletCtrl", [
    "$rootScope",
    "$scope",
    "$sce",
    "walletService",
    "globalService",
    decryptWalletCtrl
]);
app.controller("viewWalletCtrl", [
    "$scope",
    "$rootScope",
    "walletService",
    "coldStakingService",
    viewWalletCtrl
]);
app.controller("TxStatusController", [
    "$scope",
    "$rootScope",
    TxStatusController
]);
app.controller("sendTxCtrl", [
    "$scope",
    "$sce",
    "$rootScope",
    "walletService",
    "coldStakingService",
    sendTxCtrl
]);

app.controller("swapCtrl", [
    "$scope",
    "$rootScope",
    "$interval",
    "changeNowService",
    "walletService",
    swapCtrl
]);
app.controller("signMsgCtrl", ["$scope", "$sce", "walletService", signMsgCtrl]);
app.controller("contractsCtrl", [
    "$scope",
    "$sce",
    "$rootScope",
    "walletService",
    contractsCtrl
]);
app.controller("ensCtrl", [
    "$scope",
    "$sce",
    "$rootScope",
    "walletService",
    ensCtrl
]);
app.controller("DexnsController", [
    "$scope",
    "$sce",
    "$rootScope",
    "walletService",
    "backgroundNodeService",
    "dexnsService",
    DexnsController
]);
app.controller("offlineTxCtrl", [
    "$scope",
    "$sce",
    "$rootScope",
    "walletService",
    offlineTxCtrl
]);
app.controller("walletBalanceCtrl", [
    "$rootScope",
    "$scope",
    "$sce",
    "walletService",
    "backgroundNodeService",
    "modalService",
    "coldStakingService",
    "messageService",
    "$interval",
    "$timeout",
    walletBalanceCtrl
]);
app.controller("helpersCtrl", ["$scope", helpersCtrl]);
app.controller("messagesCtrl", [
    "$scope",
    "$rootScope",
    "$interval",
    "globalService",
    "messageService",
    "walletService",
    "backgroundNodeService",
    messagesControl
]);
app.controller("encryptCtrl", ["$scope", "walletService", encryptCtrl]);
app.controller("backgroundNodeCtrl", [
    "$scope",
    "$interval",
    "backgroundNodeService",
    backgroundNodeCtrl
]);

app.controller("broadcastTxCtrl", ["$scope", broadcastTxCtrl]);

app.controller("coldStakingCtrl", [
    "$scope",
    "$rootScope",
    "walletService",
    "modalService",
    "coldStakingService",
    coldStakingCtrl
]);
if (IS_CX) {
    app.controller("addWalletCtrl", ["$scope", "$sce", addWalletCtrl]);
    app.controller("myWalletsCtrl", [
        "$scope",
        "$sce",
        "walletService",
        myWalletsCtrl
    ]);
    app.controller("mainPopCtrl", ["$scope", "$sce", mainPopCtrl]);
    app.controller("quickSendCtrl", ["$scope", "$sce", quickSendCtrl]);
    app.controller("cxDecryptWalletCtrl", [
        "$scope",
        "$sce",
        "walletService",
        cxDecryptWalletCtrl
    ]);
}

updateAppVersion();
trezorDeviceListener();
