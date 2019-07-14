// Korean
"use strict";
var ko = function() {};
ko.code = "ko";
ko.data = {
    DELETE: "삭제",
    /* DexNS tabs */

    NAV_DexNS: "DexNS",
    NAV_Decentralized_Naming_Service: "Decentralized Naming Service",

    /* New Generics */
    x_CancelReplaceTx: "트랜잭션 취소 혹은 교체",
    x_CancelTx: "트랜잭션 취소",
    x_PasswordDesc:
        "비밀번호는 개인 키를 * 암호화 * 할 때 쓰이고 개인 키를 생성할 때 씨드로 쓰이지는 않습니다. **지갑을 풀기 위해서는 이 비밀번호와 키스토어 파일이 모두 필요합니다.**",
    x_ReadMore: "더 보기",
    x_ReplaceTx: "트랜잭션 교체",
    x_TransHash: "트랜잭션 해시",
    x_TXFee: "TX 수수료",
    x_TxHash: "TX 해시",

    /* Check TX Status */
    NAV_CheckTxStatus: "TX 상태 검사",
    NAV_TxStatus: "TX 상태",
    tx_Details: "트랜잭션 내역",
    tx_Summary:
        '거래량이 높은 기간(예를 들어 ICO 기간중)의 트랜잭션은 몇 시간 동안 보류될 수 있습니다. 이 도구는 이러한 TX를 찾아 "취소"하거나 교체할 수 있는 기능을 제공합니다. **이는 일반적으로 수행할 수 있는 작업이 아닙니다. 이 도구를 의존하지 말아야 하며 TX풀이 가득 찼을 때만 작동합니다. [여기서 이 도구에 대해 읽어 보십시오.](https://myetherwallet.github.io/knowledge-base/transactions/check-status-of-ethereum-transaction.html)**',
    tx_notFound: "트랜잭션을 찾을 수 없습니다",
    tx_notFound_1: "연결된 노드의 TX풀에서 이 TX를 찾을 수 없습니다.",
    tx_notFound_2:
        '방금 전송하셨다면 15초간 기다렸다가 "TX상태 확인" 버튼을 다시 누르세요. ',
    tx_notFound_3:
        "여전히 다른 노드의 TX풀에서 채굴되기를 기다리는 상태일 수 있습니다.",
    tx_notFound_4:
        "오른쪽 상단에 있는 드롭 다운 목록에서 다른 ETH노드를 선택한 다음 (예. `ETH (Etherscan.io)` 혹은 `ETH (Infura.io)` 혹은 `ETH (MyEtherWallet)`) 다시 확인합니다.",
    tx_foundInPending: "보류중인 트랜잭션이 발견되었습니다",
    tx_foundInPending_1: "트랜잭션이 연결된 노드의 TX풀에 위치하고 있습니다. ",
    tx_foundInPending_2: "현재 보류 중(채굴되기를 기다리는 중). ",
    tx_foundInPending_3:
        '트랜잭션을 "취소" 하거나 교체할 수 있는 기회가 있습니다. 아래에 있는 지갑을 잠금 해제하세요.',
    tx_FoundOnChain: "트랜잭션이 발견되었습니다",
    tx_FoundOnChain_1:
        "트랜잭션이 성공적으로 채굴되어 블록 체인상에 기록되었습니다.",
    tx_FoundOnChain_2:
        '**만약 빨간색으로 표시된 `( ! )`, 잘못된 인스트럭션 (`BAD INSTRUCTION`) 혹은 가스부족(`OUT OF GAS`) 오류 메시지**가 보인다면, 트랜잭션이 성공적으로 *전송*되지 않은 것입니다. 이 트랜잭션은 취소하거나 교체할 수 없습니다. 그 대신에 새 트랜잭션을 보내야 합니다. "가스부족"오류가 발생한 경우 원래 지정한 가스 한도를 두배로 늘려야 합니다. ',
    tx_FoundOnChain_3:
        "**오류 메시지가 없다면 트랜잭션이 성공적으로 전송된 것입니다.** 이제 전송한 ETH 혹은 토큰은 전송된 곳에 있습니다. ETH 또는 토큰을 다른 지갑/거래소 계정에 입금된 것을 볼 수 없다면, 그리고 보낸 후 24시간이 지난 후라면, [관련 서비스에 문의하시기 바랍니다](https://myetherwallet.github.io/knowledge-base/diving-deeper/ethereum-list-of-support-and-communities.html). 문의할 때 트랜잭션에 해당하는 *링크*를 보내어 친절하게 당신의 상황을 살펴보라고 부탁하세요.",

    /* Gen Wallet Updates */
    GEN_Help_1: "" /* FIXME */,
    GEN_Help_2: "를 계정에 접근하기 위해 사용합니다.",
    GEN_Help_3: "당신의 기기가 지갑입니다.",
    GEN_Help_4: "가이드 & 자주 묻는 질문(FAQ)",
    GEN_Help_5: "지갑 생성하는 방법",
    GEN_Help_6: "시작하기",
    GEN_Help_7:
        "안전하게 보관 · 백업 하기·  누구와도 공유하지 않기 · 분실하지 않기 · 분실하면 복구할 수 없습니다.",
    GEN_Help_8: "파일 다운로드가 안되시나요? ",
    GEN_Help_9: "구글 Chrome을 써보세요 ",
    GEN_Help_10: "오른쪽 마우스 버튼 클릭 후 파일을 다른이름으로 저장: ",
    GEN_Help_11: "컴퓨터에서 파일을 열지 마세요 ",
    GEN_Help_12:
        "MyEtherWallet(혹은 Mist, Geth, Parity 혹은 다른 지갑 클라이언트 사용.)을 통해서 지갑을 풀어냅니다.",
    GEN_Help_13: "키스토어 파일을 백업하는 방법 ",
    GEN_Help_14: "여러 지갑들의 서로 다른 점은? ",
    GEN_Help_15: "자금의 도난이나 분실을 방지하기.",
    GEN_Help_16: "여러 지갑들의 서로 다른 점은? ",
    GEN_Help_17: "왜 이렇게 해야 하나요?",
    GEN_Help_18: "백업을 추가로 만들기.",
    GEN_Help_19: "비밀번호를 잊어버린 경우를 대비하기.",
    GEN_Help_20: "콜드 스토리지(cold storage)",
    GET_ConfButton: "이해했습니다. 계속하기.",
    GEN_Label_5: "`개인 키` 저장. ",
    GEN_Unlock: "주소를 보기 위해 지갑을 풀기",
    GAS_PRICE_Desc:
        "가스 가격은 가스 단위당 지불할 금액입니다. `TX 수수료 = 가스 가격 * 가스 한도`이며 TX를 포함한 블록을 채굴한 채굴자에게 수수료가 지급됩니다. 높은 가스 가격 = 트랜잭션은 빨라지나 가격은 비쌈. 기본값은 `41 GWEI`.",
    GAS_LIMIT_Desc:
        "가스 한도는 TX와 함께 보내게 될 가스의 양입니다. `TX 수수료` = 가스 가격 * 가스 한도이며 TX를 포함한 블록을 채굴한 채굴자에게 수수료가 지급됩니다. 가스 한도를 늘려도서 TX 채굴 속도가 빨라지지는 않습니다. ETH 전송 = `21000`. 토큰 전송 = ~`200000`.",
    NONCE_Desc:
        "nonce는 특정 주소에서 전송된 TX의 회수입니다. 이는 트랜잭션이 순차적으로 이루어지고 두번 이상 이루어지지 않도록 보장해줍니다.",
    TXFEE_Desc:
        "TX 수수료는 TX를 포함한 블록을 캔 채굴자에게 지불됩니다. 이는 `가스 한도` * `가스 가격` 입니다. [GWEI단위 -> ETH단위로 변환할 수 있습니다.](https://www.myetherwallet.com/helpers.html)",

    /* Navigation*/
    NAV_AddWallet: "지갑 추가 ",
    NAV_Broadcast: "트랜잭션 전송",
    NAV_BulkGenerate: "대량 생성 ",
    NAV_Contact: "문의하기 ",
    NAV_Contracts: "컨트랙트 ",
    NAV_DeployContract: "컨트랙트 배포 ",
    NAV_ENS: "ENS",
    NAV_GenerateWallet_alt: "새 지갑 ",
    NAV_GenerateWallet: "지갑 생성 ",
    NAV_Help: "도움말 ",
    NAV_InteractContract: "컨트랙트 조작 ",
    NAV_Multisig: "다중서명(Multisig) ",
    NAV_MyWallets: "내 지갑 ",
    NAV_Offline: "오프라인 전송 ",
    NAV_SendEther: "이더리움 & 토큰 전송 ",
    NAV_SendTokens: "토큰 전송 ",
    NAV_SignMsg: "메시지 서명 ",
    NAV_Swap: "교환 ",
    NAV_ViewWallet: "지갑 정보 보기 ",
    NAV_YourWallets: "내 지갑 ",
    NAV_Messages: "메시지",
    NAV_LIST: "목록",
    NAV_NEW_MESSAGE: "새 메시지",
    NAV_Encrypt: "암호화",

    /* General */
    x_Access: "접근 ",
    x_AddessDesc:
        "주소는 `계정 번호#` 혹은 `공개 키(Public Key)`라고도 합니다. 이를 다른 사람들과 공유하여 이더 혹은 토큰을 보낼 수 있습니다. 다채로운 색상의 주소 아이콘은 자신의 주소를 식별해줍니다. 어딘가에서 주소를 입력할때마다 종이 지갑과 일치하는지를 확인하세요. ",
    x_Address: "내 주소 ",
    x_Cancel: "취소 ",
    x_CSV: "CSV 파일 (암호화되지 않음) ",
    x_Download: "다운로드 ",
    x_Json: "JSON 파일 (암호화되지 않음) ",
    x_JsonDesc:
        "이것은 암호화되지 않은 JSON 형식의 개인 키입니다. 이 암호화되지 않은 JSON 형식의 개인 키를 사용하면 누구나 암호없이 자신의 지갑과 이더리움에 액세스 할 수 있습니다. ",
    x_Keystore: "키스토어 파일 (UTC / JSON · 권장됨· 암호화됨) ",
    x_Keystore2: "키스토어 파일 (UTC / JSON) ",
    x_KeystoreDesc:
        "이 키스토어 / JSON 파일은 Mist에서 사용하는 형식과 일치하므로 나중에 쉽게 가져올 수 있습니다. 다운로드하고 백업하는 것을 권장합니다. ",
    x_MetaMask: "MetaMask / Mist ",
    x_Mnemonic: "니모닉 문구 ",
    x_ParityPhrase: "Parity 문구 ",
    x_Password: "비밀번호 ",
    x_Print: "종이 지갑 인쇄 ",
    x_PrintDesc:
        "팁: 프린터가 없어도 인쇄 버튼을 클릭후 PDF 파일로 저장하세요! ",
    x_PrintShort: "인쇄 ",
    x_PrivKey: "개인 키 (암호화되지 않음) ",
    x_PrivKey2: "개인 키 ",
    x_PrivKeyDesc:
        "이것은 암호화되지 않은 개인 키이므로 암호가 필요하지 않습니다. 이 암호화되지 않은 개인 키를 사용하면 누구나 암호 없이 지갑을 사용할 수 있습니다. 따라서 암호화된 개인 키 사용을 권장합니다. ",
    x_Save: "저장 ",
    x_TXT: "TXT 파일 (암호화되지 않음) ",
    x_Wallet: "지갑 ",

    /* Header */
    CX_Tagline:
        "오픈 소스 JavaScript 클라이언트 측 이더리움 지갑 Chrome 확장 프로그램 ",
    CX_Warning_1:
        "반드시 이곳에 보관하는 모든 지갑은 **외부 백업**을 진행해주세요. 이 Chrome 확장 프로그램에서는 확장 프로그램 제거 및 재설치를 포함하여 데이터가 저장되지 않고 손실되는 경우가 자주 발생합니다. 이 확장 프로그램은 지갑에 쉽게 접근할 수 있는 방법을 제공할 뿐, **백업**을 제공하지 않습니다. ",
    MEW_Tagline: "오픈 소스 JavaScript 클라이언트 측 이더리움 지갑 ",
    MEW_Warning_1:
        "지갑에 액세스하거나 새 지갑을 생성하기 전 반드시 URL을 확인해주세요. 피싱(사기) 사이트에 주의하세요! ",

    /* Footer */
    FOOTER_1:
        "자유롭게 쓸 수 있는 무료 오픈소스 클라이언트 인터페이스로서, 이더리움 지갑 생성 등을 지원합니다. 이더리움 블록체인과 쉽고 안전하게 상호 작용하세요. 지갑을 열기 전에 URL(myetherwallet.com)을 다시한번 확인하세요. ",
    FOOTER_1b: "개발자 ",
    FOOTER_2: "기부해주셔서 정말 감사합니다. ",
    FOOTER_3: "클라이언트 측 지갑 생성 ",
    FOOTER_4: "면책 조항 ",

    /* Sidebar */
    sidebar_AccountInfo: "계정 정보  ",
    sidebar_AccountAddr: "계정 주소 ",
    sidebar_AccountBal: "계정 잔액 ",
    sidebar_TokenBal: "토큰 잔액 ",
    sidebar_Equiv: "동등한 가치 ",
    sidebar_TransHistory: "트랜잭션 내역 ",
    sidebar_donation:
        "MyEtherWallet은 개인정보보호와 보안을 위한 무료 오픈 서비스입니다. 기부가 늘어날수록 우리는 새로운 기능과 다양한 의견을 반영하여 사용자가 원하는 것을 제공할 수 있습니다. 두명으로 구성된 저희 팀이 세상을 바꾸려 하고 있습니다. 도와주시겠습니까? ",
    sidebar_donate: "기부 ",
    sidebar_thanks: "감사합니다!!! ",
    sidebar_DisplayOnTrezor: "TREZOR상의 주소 보기",
    sidebar_DisplayOnLedger: "Ledger상의 주소 보기",

    /* Decrypt Panel */
    decrypt_Access: "지갑 접근 방법 선택하기 ",
    decrypt_Title: "비공개 키의 형식을 선택해주세요. ",
    decrypt_Select: "지갑 선택 ",

    /* Mnemonic */
    MNEM_1: "액세스하고자 하는 주소를 선택해주세요. ",
    MNEM_2:
        "하나의 HD 니모닉 문구에서 여러 가지 지갑/주소를 액세스할 수 있습니다. 액세스하려는 주소를 선택해주세요. ",
    MNEM_more: "나머지 주소 ",
    MNEM_prev: "이전 주소 ",

    /* Hardware wallets */
    x_Ledger: "Ledger 지갑 ",
    ADD_Ledger_1: "사용자의 Ledger 지갑을 연결해주세요 ",
    ADD_Ledger_2:
        "이더리움 어플리케이션을 실행해주세요 (또는 컨트랙트 어플리케이션)  ",
    ADD_Ledger_3: "Browser 지원이 활성화된 상태인지 확인해주세요 ",
    ADD_Ledger_4:
        "설정에서 Browser 지원을 확인할 수 없으면, Ledger [펌웨어 1.2] (https://www.ledgerwallet.com/apps/manager) 버전이 설치되어 있는지 확인해주세요. ",
    ADD_Ledger_0a: "MyEtherWallet을 보안 연결(SSL)로 다시 연결해주세요. ",
    ADD_Ledger_0b:
        "MyEtherWallet을 [Chrome](https://www.google.com/chrome/browser/desktop/) 또는 [Opera](https://www.opera.com/) 브라우저로 다시 열어주세요. ",
    ADD_Ledger_scan: "Ledger 지갑에 연결하기 ",
    ADD_MetaMask: "MetaMask에 연결하기 ",
    x_Trezor: "TREZOR 지갑",
    ADD_Trezor_scan: "TREZOR 에 연결하기 ",
    x_DigitalBitbox: "Digital Bitbox ",
    ADD_DigitalBitbox_0a:
        "MyEtherWallet을 보안 연결(SSL)로 다시 연결해주세요. ",
    ADD_DigitalBitbox_0b:
        "MyEtherWallet을 [Chrome](https://www.google.com/chrome/browser/desktop/) 또는 [Opera](https://www.opera.com/) 브라우저로 다시 열어주세요. ",
    ADD_DigitalBitbox_scan: "Digital Bitbox 에 연결하기 ",

    /* Add Wallet */
    ADD_Label_1: "무엇을 진행하시겠습니까? ",
    ADD_Radio_1: "새로운 지갑 생성 ",
    ADD_Radio_2: "지갑 파일 선택하기 (키스토어 / JSON) ",
    ADD_Radio_2_alt: "지갑 파일 선택하기 ",
    ADD_Radio_2_short: "지갑 파일 선택하기... ",
    ADD_Radio_3: "개인 키를 복사해서 입력해주세요. ",
    ADD_Radio_4: "모니터링 계정 추가 ",
    ADD_Radio_5: "니모닉 붙여넣기/입력 ",
    ADD_Radio_5_Path: "HD derivation 경로 선택 ",
    ADD_Radio_5_woTrezor: "(Jaxx, Metamask, Exodus, imToken)",
    ADD_Radio_5_withTrezor: "(Jaxx, Metamask, Exodus, imToken, TREZOR)",
    ADD_Radio_5_PathAlternative: "(Ledger)",
    ADD_Radio_5_PathTrezor: "(TREZOR)",
    ADD_Radio_5_PathCustom: "사용자정의 ",
    ADD_Label_2: "별명 만들기 ",
    ADD_Label_3: "지갑은 암호화되어 있습니다. 비밀번호를 입력해주세요. ",
    ADD_Label_4: "모니터링 계정 추가 ",
    ADD_Warning_1:
        "지갑 탭은 개인 키를 업로드하지 않고 임의로 모니터링하는 계정을 추가할 수 있습니다. 이에 따라 지갑의 액세스나 이더리움 전송이 가능하지 않습니다. ",
    ADD_Label_5: "주소 입력 ",
    ADD_Label_6: "지갑 잠금 해제 ",
    ADD_Label_6_short: "잠금 해제 ",
    ADD_Label_7: "계정 추가 ",
    ADD_Label_8: "비밀번호 (선택): ",

    /* My Wallet */
    MYWAL_Nick: "지갑 별명 ",
    MYWAL_Address: "지갑 주소 ",
    MYWAL_Bal: "잔액 ",
    MYWAL_Edit: "편집 ",
    MYWAL_View: "보기 ",
    MYWAL_Remove: "제거 ",
    MYWAL_RemoveWal: "지갑 제거 ",
    MYWAL_WatchOnly: "내 모니터링 전용 계정 ",
    MYWAL_Viewing: "지갑 표시 ",
    MYWAL_Hide: "지갑 정보 숨기기 ",
    MYWAL_Edit_2: "지갑 편집 ",
    MYWAL_Name: "지갑 이름 ",
    MYWAL_Content_1: "경고! 지갑을 제거하려고 합니다. ",
    MYWAL_Content_2:
        "제거하기 전 ** 개인 키 및 키스토어 파일, 비밀번호 **가 저장되어 있는지 확인해주세요. ",
    MYWAL_Content_3:
        "나중에 이 지갑을 MyEtherWallet CX와 같이 사용하려면, 개인 키/JSON과 비밀번호를 이용하여 수동으로 다시 추가해야 합니다. ",

    /* Generate Wallets */
    GEN_desc:
        "만약 여러 개의 지갑을 생성하고 싶다면, 여기서 처리할 수 있습니다. ",
    GEN_Label_1: "비밀번호를 입력하세요 ",
    GEN_Placeholder_1: "비밀번호 저장해 두는 것을 잊지 마세요! ",
    GEN_SuccessMsg: "성공! 지갑이 생성되었습니다. ",
    GEN_Label_2: "`키스토어` 파일을 저장하세요. ",
    GEN_Label_3: "지갑 주소를 저장해주세요 ",
    GEN_Label_4: "종이 지갑을 인쇄하거나 QR 코드를 인쇄하세요. ",
    GEN_YOUR_NEW_PASSWORD: "새로운 비밀번호",

    /* Bulk Generate Wallets */
    BULK_Label_1: "생성할 지갑 개수 ",
    BULK_Label_2: "지갑 생성하기 ",
    BULK_SuccessMsg: "성공! 지갑들이 생성되었습니다. ",

    /* Sending Ether and Tokens */
    SEND_addr: "받는 주소 ",
    SEND_amount: "보낼 수량 ",
    SEND_amount_short: "수량 ",
    SEND_custom: "사용자 정의 토큰 추가 ",
    SEND_custom_dexns: "토큰 심볼로 사용자 정의 토큰 추가 ",
    SEND_gas: "가스 ",
    SEND_TransferTotal: "잔액 모두 전송하기 ",
    SEND_generate: "트랜잭션 생성 ",
    SEND_raw: "RAW 트랜잭션 ",
    SEND_signed: "서명된 트랜잭션 ",
    SEND_trans: "트랜잭션 전송하기 ",
    SENDModal_Title: "경고! ",
    /* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
    SENDModal_Content_1: "전송할 예정입니다. ",
    SENDModal_Content_2: "받는 주소 ",
    SENDModal_Content_3: "정말 전송 하시겠습니까? ",
    SENDModal_Content_4:
        "참고: 에러가 발생한다면, 대부분 토큰 전송에 필요한 가스(수수료, 이더리움으로 결제)가 부족한 것입니다. 이더리움을 계정에 추가해 주세요. ",
    SENDModal_No: "아니요, 전송을 취소합니다. ",
    SENDModal_Yes: "네, 맞습니다! 전송합니다. ",

    /* Tokens */
    TOKEN_Addr: "토큰 컨트랙트 주소 ",
    TOKEN_Symbol: "토큰 기호 ",
    TOKEN_Dec: "소수부 자릿수 ",
    TOKEN_show: "모든 토큰 보기 ",
    TOKEN_hide: "토큰 숨기기 ",

    /* Send Transaction */
    TRANS_desc:
        '만약 토큰을 전송하고 싶다면 , "토큰 전송하기" 페이지를 사용해주세요. ',
    TRANS_warning:
        '"이더리움만 전송하기" 또는 "이더리움 클래식만 전송하기" 를 사용하여 전송할 때, 몇 가지 서비스는 컨트랙트가 체결되지 않을 수 있습니다. 더보기. ',
    TRANS_advanced: "+고급: 데이터 추가 ",
    TRANS_data: "데이터 ",
    TRANS_gas: "가스 한도 ",
    TRANS_sendInfo:
        "21000 가스를 사용하는 표준 트랜잭션은 0.000441 ETH 를 사용합니다. 우리는 최소 가스 가격인 0.000000021 보다 약간 높게 책정하여 전송을 빠르게 합니다. MyEtherWallet은 트랜잭션 수수료를 얻지 않습니다. ",
    TRANS_params: "+Advanced: Params 적용",
    TRANS_params_remove: "-Advanced: Params 삭제",

    /* Offline Transaction */
    OFFLINE_Title: "오프라인 트랜잭션 생성 & 전송하기 ",
    OFFLINE_Desc:
        "오프라인 트랜잭션은 3단계로 이루어 집니다. 1, 3 단계는 온라인상의 컴퓨터로 진행되고, 2 단계는 오프라인/인터넷이 연결되지 않은 컴퓨터로 진행됩니다. 이를 통해 인터넷에 연결된 기기로부터 개인 키를 안전하게 보호할 수 있습니다. ",
    OFFLLINE_Step1_Title: "1 단계 : 정보 생성하기 (온라인 컴퓨터) ",
    OFFLINE_Step1_Button: "정보 생성 ",
    OFFLINE_Step1_Label_1: "보내는 주소 ",
    OFFLINE_Step1_Label_2:
        "참고: 이것은 받는 주소가 아닌 보내는 주소입니다. Nonce는 원래 계정에서 생성됩니다. 인터넷에 연결되지 않은 컴퓨터를 사용하는 경우 이 주소는 콜드 스토리지 계정의 주소가 됩니다. ",
    OFFLINE_Step2_Title: "2 단계 : 트랜잭션 생성하기 (오프라인 컴퓨터) ",
    OFFLINE_Step2_Label_1: "받는 주소 ",
    OFFLINE_Step2_Label_2: "수량/보낼 금액 ",
    OFFLINE_Step2_Label_3: "가스 가격 ",
    OFFLINE_Step2_Label_3b: "이것은 1단계에서 온라인 컴퓨터에 표시됩니다. ",
    OFFLINE_Step2_Label_4: "가스 한도 ",
    OFFLINE_Step2_Label_4b:
        "기본 가스 한도는 21000 입니다. 컨트랙트를 전송하거나 데이터를 추가하면 가스 한도를 수정해야 할 것입니다. 사용되지 않은 가스는 환급됩니다. ",
    OFFLINE_Step2_Label_5: "Nonce ",
    OFFLINE_Step2_Label_5b: "이것은 1단계에서 온라인 컴퓨터에 표시됩니다. ",
    OFFLINE_Step2_Label_6: "데이터 ",
    OFFLINE_Step2_Label_6b:
        "이것은 선택사항입니다. 데이터는 컨트랙트에 대해 트랜잭션을 전송할 때 자주 사용됩니다. ",
    OFFLINE_Step2_Label_7: "개인 키 / JSON 입력 또는 선택 ",
    OFFLINE_Step3_Title: "3 단계 : 전송 또는 트랜잭션 발행 (온라인 컴퓨터) ",
    OFFLINE_Step3_Label_1:
        '2단계에서 서명된 트랜잭션를 붙여넣고, "트랜잭션 전송하기" 버튼을 누르세요 ',

    /* Contracts */
    CONTRACT_Title: "컨트랙트 주소 ",
    CONTRACT_Title_2: "기존 컨트랙트 선택하기 ",
    CONTRACT_Json: "ABI / JSON 인터페이스 ",
    CONTRACT_Interact_Title: "컨트랙트 읽기/쓰기 ",
    CONTRACT_Interact_CTA: "함수 선택 ",
    CONTRACT_ByteCode: "Byte 코드 ",
    CONTRACT_Read: "읽기 ",
    CONTRACT_Write: "쓰기 ",
    DEP_generate: "Byte 코드 생성하기 ",
    DEP_generated: "생성된 Byte 코드 ",
    DEP_signtx: "서명 트랜잭션 ",
    DEP_interface: "생성된 인터페이스 ",

    /* Node Switcher */
    NODE_BACKGROUND: "백그라운드 노드",
    NODE_Title: "사용자 정의 노드 설정하기 ",
    NODE_Subtitle: "로컬 노드에 연결하려면... ",
    NODE_Warning:
        "MyEtherWallet.com을 통해 로컬 노드로 연결하기 위해서는 로컬 노드가 HTTPS를 지원해야 합니다. 이를 지원하지 않는 노드에 연결하려면 [MyEtherWallet 저장소를 다운로드하여 로컬로 실행](https://github.com/kvhnuke/etherwallet/releases/latest)하거나, 로컬 노드에 무료 SSL 인증서 [LetsEncrypt](https://letsencrypt.org/)를 설치하세요. ",
    NODE_Name: "노드 명 ",
    NODE_Port: "노드 포트 ",
    NODE_CTA: "사용자 정의 노드 저장 또는 사용 ",

    /* Swap / Exchange */
    SWAP_rates: "현재 시세 ",
    SWAP_init_1: "다음을 환전하려 합니다 ",
    SWAP_init_2: "에서 ", // "I want to swap my X ETH for X BTC"
    SWAP_init_CTA: "진행! ", // or "Continue"
    SWAP_information: "정보 ",
    SWAP_send_amt: "전송량 ",
    SWAP_rec_amt: "수신량 ",
    SWAP_your_rate: "비율 ",
    SWAP_rec_add: "받을 주소 ",
    SWAP_start_CTA: "교환 시작 ",
    SWAP_ref_num: "참조 번호 ",
    SWAP_time: "남은 전송 시간 ",
    SWAP_elapsed: "전송 시간 경과 ",
    SWAP_progress_1: "주문 개시 ",
    SWAP_progress_2: "기다리는 중… : ", // Waiting for your BTC...
    SWAP_progress_3: "수신 완료! ", // ETH Received!
    SWAP_progress_4: "{{orderResult.output.currency}} 전송하는 중 ",
    SWAP_progress_5: "주문 완료 ",
    SWAP_order_CTA: "전송해주세요 : ", // Please send 1 ETH...
    SWAP_unlock:
        "ETH 또는 토큰을 이 페이지에서 바로 전송하기 위해 지갑을 해제해주세요. ",

    /* Sign Message */
    MSG_message: "메시지 ",
    MSG_date: "날짜 ",
    MSG_signature: "서명 ",
    MSG_verify: "메시지 검증 ",
    MSG_info1:
        "서명을 다른 날짜에 재사용하지 못하도록 현재의 날짜를 포함해주세요. ",
    MSG_info2: "타인이 사용하지 못하도록 별명을 포함해주세요 ",
    MSG_info3:
        "다른 용도로 사용되는 것을 막으려면 세부적인 내용을 메시지에 포함해주세요. ",

    /* View Wallet Details */
    VIEWWALLET_Subtitle:
        "다른 버전의 개인 키를 다운로드하거나 종이 지갑 정보를 다시 인쇄할 수 있습니다. [계정을 Geth/Mist로 가져오기](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/)를 진행할 때 필요합니다. 잔액을 확인하려면 [gastracker.io](https://gastracker.io/) (ETC) / [etherscan.io](https://etherscan.io/) (ETH)과 같은 블록체인 조회 서비스를 사용하는 것을 권장합니다. ",
    VIEWWALLET_Subtitle_Short:
        "다른 버전의 개인 키를 다운로드하거나 종이 지갑 정보를 다시 인쇄 할 수 있습니다. ",
    VIEWWALLET_SuccessMsg: "성공했습니다! 지갑의 세부사항은 다음과 같습니다. ",
    VIEWWALLET_ShowPrivKey: "(보기) ",
    VIEWWALLET_HidePrivKey: "(숨기기) ",

    /* Chrome Extension */
    CX_error_1:
        '저장된 지갑이 없습니다. 지갑을 추가하려면 ["지갑 추가"](/cx-wallet.html#add-wallet) 버튼을 클릭해주세요! ',
    CX_quicksend: "빠른 전송 ", // 적절한 번역이 없다면, "보내기"를 사용하세요. ',

    /* Error Messages */
    ERROR_0: "올바른 금액을 입력해주세요. ",
    ERROR_1:
        "비밀번호는 최소 9자 이상이어야 합니다. 강력한 비밀번호를 입력해주세요. ",
    ERROR_2: "죄송합니다. 이러한 유형의 지갑 파일은 인식 할 수 없습니다. ",
    ERROR_3: "올바른 지갑 파일이 아닙니다. ",
    ERROR_4:
        "존재하지 않는 단위입니다. 다음과 같은 단위 중 하나를 사용해주세요. ",
    ERROR_5: "잘못된 주소입니다. ",
    ERROR_6: "잘못된 비밀번호입니다. ",
    ERROR_7: "잘못된 수량입니다. (정수. 0-18을 사용하세요.) ",
    ERROR_8: "잘못된 가스 한도입니다. (정수. 21000-4000000을 사용하세요.) ",
    ERROR_9: "잘못된 데이터입니다. (hex 문자.) ",
    ERROR_10:
        "잘못된 가스 가격입니다. (정수. 20 GWEI 혹은 20000000000 WEI를 사용하세요.) ",
    ERROR_11: "잘못된 nonce 입니다. (정수.) ",
    ERROR_12: "잘못된 서명 트랜잭션입니다. ",
    ERROR_13: "같은 별명을 가진 지갑이 이미 있습니다. ",
    ERROR_14: "지갑을 찾을 수 없습니다. ",
    ERROR_15: "이 ID에 대한 제안서가 존재하지 않거나 읽기를 실패하였습니다. ",
    ERROR_16:
        "같은 주소의 지갑이 이미 존재합니다. 지갑 페이지를 확인해주세요. ",
    ERROR_17:
        "자금이 부족합니다. 트랜잭션을 전송하려는 계좌에 충분한 자금이 없습니다. 가스 비용을 지불하기 위해서는 적어도 0.01 {}가 필요합니다. ",
    ERROR_18:
        "모든 가스가 이 트랜잭션에 사용될 것입니다. 이것은 이미 투표를 진행했거나 토론 기간이 종료되었기 때문입니다. ",
    ERROR_19: "올바른 기호를 넣어주세요 ",
    ERROR_20: "올바른 ERC-20 토큰이 아닙니다 ",
    ERROR_21:
        "필요한 가스양을 추정할 수 없습니다. 충분한 자금이 계정에 없거나 수신 측 컨트랙트 주소에 오류가 있을 수 있습니다. 가스양을 수동으로 변경 후 사용해보세요. 추가 정보는 전송시 나타난 오류 메시지를 통해 확인하세요. ",
    ERROR_22: "올바른 노드 이름을 입력해주세요 ",
    ERROR_23:
        "올바른 URL을 입력해주세요. HTTPS를 통해서 연결한다면, URL도 HTTPS를 사용해야 합니다. ",
    ERROR_24: "올바른 포트를 입력해주세요. ",
    ERROR_25: "올바른 체인 ID를 입력해주세요 ",
    ERROR_26: "올바른 ABI를 입력해주세요 ",
    ERROR_27: "최소량: 0.01. 최대량: ",
    ERROR_28:
        "지갑에 액세스하기 위해서는 **키스토어 파일과 비밀번호** (또는 개인키)가 필요합니다. 별도로 저장하여 백업해주세요. 만약 그것을 저장하지 않으면 지갑을 복원할 방법이 없습니다. 자세한 내용은 [도움말 페이지](https://www.myetherwallet.com/#help)를 참고해주세요. ",
    ERROR_29: "올바른 사용자와 패스워드를 입력해주세요 ",
    ERROR_30:
        "올바른 이름을 입력해주세요 (7개 이상의 문자. 구두점은 사용할 수 없음) ",
    ERROR_31: "올바른 비밀 문구를 입력해주세요. ",
    ERROR_32:
        "노드에 연결할 수 없습니다. 새로 고침을 하거나 (우측 상단에서 선택할 수 있는) 다른 노드를 이용해 보시고, 방화벽 설정도 확인해주세요. 사용자 정의 노드라면 설정을 확인하세요. ",
    ERROR_33: "해제된 지갑이(지갑 주소가) 소유자의 주소와 일치하지 않습니다. ",
    ERROR_34: "입력한 이름과 확인하려는 이름이 일치하지 않습니다. ",
    ERROR_35:
        '입력된 주소가 체크섬되어있지 않습니다. <a href="https://myetherwallet.github.io/knowledge-base/addresses/not-checksummed-shows-when-i-enter-an-address.html" target="_blank" rel="noopener noreferrer"> 더 보기</a>',
    ERROR_36: "올바른 TX 해시를 입력하세요",
    ERROR_37: "올바른 hex 문자열을 입력하세요 (0-9, a-f)",
    ERROR_38:
        "잘못된 가스 가격! 최소 가스 가격은 0.1 GWei이고 최대 가스가격은 100 GWei 입니다. 가스가격은 21 GWei 기본 값으로 초기화됩니다!",
    ERROR_39: "요소의 타입이 비어있지 않은(non-empty) 기본값 입니다",
    SUCCESS_1: "올바른 주소 ",
    SUCCESS_2: "지갑이 성공적으로 복호화 되었습니다. ",
    SUCCESS_3:
        "TX가 네트워크로 브로드캐스트 되었습니다. 이는 채굴과 전송이 되었다는 것을 뜻하지 않습니다. ICO기간중에 +3시간 이상 걸릴 수 있습니다. TX해시를 보려면 하단의 확인 및 검증 버튼을 사용하세요. TX 해시:  ",
    SUCCESS_4: "지갑이 성공적으로 추가되었습니다. ",
    SUCCESS_5: "파일이 선택되었습니다. ",
    SUCCESS_6: "성공적으로 연결되었습니다. ",
    SUCCESS_7: "메시지 서명이 검증되었습니다. ",
    WARN_Send_Link:
        "주소, 값, 가스, 데이터 필드 또는 트랜잭션 유형 (전송 모드)이 링크를 통해 도착했습니다. 전송하기 전에 정보를 변경할 수 있습니다. 시작하려면 지갑 잠금을 해제해주세요. ",

    /* Geth Error Messages */
    GETH_InvalidSender: "잘못된 전송지입니다. ",
    GETH_Nonce: "Nonce가 너무 낮습니다. ",
    GETH_Cheap: "가스 가격이 너무 낮습니다. ",
    GETH_Balance: "잔액이 부족합니다. ",
    GETH_NonExistentAccount: "계정이 존재 하지 않거나 잔액이 부족합니다. ",
    GETH_InsufficientFunds: "가스 * 가격 + 수량에 대한 자금이 부족합니다.",
    GETH_IntrinsicGas: "기본 가스가 부족합니다. ",
    GETH_GasLimit: "블록 가스 한도를 초과하였습니다. ",
    GETH_NegativeValue: "마이너스 값 ",

    /* Parity Error Messages */
    PARITY_AlreadyImported:
        "이미 동일한 해시를 사용한 트랜잭션을 가져 왔습니다. ",
    PARITY_Old: "트랜잭션 Nonce가 너무 낮습니다. Nonce를 증가시키십시오. ",
    PARITY_TooCheapToReplace:
        "트랜잭션 수수료가 너무 낮습니다. 동일한 nonce를 가진 다른 트랜잭션이 대기열에 있습니다. 수수료를 늘리거나 nonce를 늘려보세요. ",
    PARITY_LimitReached:
        "대기열에 트랜잭션이 너무 많습니다. 트랜잭션이 한도를 초과하여 해당 트랜잭션이 제외되었습니다. 수수료를 늘려보세요. ",
    PARITY_InsufficientGasPrice:
        "트랜잭션 수수료가 너무 낮습니다. 노드의 최소 수수료 (최소 : {}, 획득 : {})를 충족시키지 못합니다. 수수료를 늘려보세요. ",
    PARITY_InsufficientBalance:
        "자금이 부족합니다. 트랜잭션을 전송하려는 계정에 충분한 자금이 없습니다. 필요량: {}, 현재 : {} wei. ",
    PARITY_GasLimitExceeded:
        "트랜잭션 비용이 현재 가스 한도를 초과합니다. 제한 : {}, 획득 : {}. 가스 공급량을 줄이고 다시 시도해보세요. ",
    PARITY_InvalidGasLimit: "공급 된 가스가 한도를 초과했습니다. ",

    /* Tranlsation Info */
    translate_version: "0.5 ",
    /**
     * ChangeLog
     * - 1st joint translation proposed by @coinkorea at 2017/05/19 https://coinkorea.info/community/1740
     *  See also: https://steemit.com/kr/@coinkorea/2sjvow-myetherwallet
     *  Contributors:
     *   [CoinKorea](https://steemit.com/@coinkorea)
     *   [kanghamin](https://etherscan.io/address/https://0x7B12655A5aada0b3c053C7ff5aa444Bd666A0163)
     *   [maa](https://etherscan.io/address/0x14036e41ddb2bd408eaf91597e6dc5220f776ae0)
     *   [Issac](https://etherscan.io/address/0x594a7773f4e062ccf644e8f122d5612b5f0db3b2)
     *   [coinmaker](https://etherscan.io/address/0x80B65285607BAbC4b60a7179A0fa8EB42232b9ad)
     *   [csjune](https://etherscan.io/address/0xfc465E0545c1024d04ceA2d6D154F20E7C67C66f)
     *   [sadfrog](https://etherscan.io/address/0x608c96865c3d1364ffc5137e5ac78b57e58714d4)
     *
     * - 2nd join translation proposed by @hackmod aka ethminer at 2018/05/28~6/18
     *  PR: https://github.com/kvhnuke/etherwallet/pull/1875
     *  Contributors:
     *   @hackmod, proofread by @dakeshi / minor fixes by @jjhitel
     */
    Translator_Desc: "번역에 기여해주신 분들 ",
    TranslatorName_1: "[CoinKorea](https://steemit.com/@coinkorea) ",
    TranslatorAddr_1: " ",
    TranslatorName_2: "[ethminer](https://steemit.com/@hackyminer) ",
    TranslatorAddr_2: " ",
    TranslatorName_3: "[dakeshi](https://steemit.com/@dakeshi) ",
    TranslatorAddr_3: " ",
    TranslatorName_4: "[jjhitel](https://steemit.com/@jjhitel) ",
    TranslatorAddr_4: " ",
    TranslatorName_5: " ",
    TranslatorAddr_5: " ",

    /* Help - Nothing after this point has to be translated. If you feel like being extra helpful, go for it. */
    HELP_Warning:
        "**2015년 3월** 이전에 지갑을 만들었거나 저장소를 다운로드했다면, 지갑 &amp; 저장소의 새 버전을 확인하고 다운로드해주세요. 자세한 내용을 보려면 클릭해주세요. ",
    HELP_Desc:
        "잘못된 부분이나 다른 질문이 있으신가요? [우리에게 연락해주세요] (mailto : support@myetherwallet.com), 당신의 질문에 답변하는 것 뿐만 아니라, 향후 사용자들에게 더 유용할 수 있도록 페이지를 업데이트할 것입니다. ",
    HELP_Remind_Title: "몇 가지 알림 ",
    HELP_Remind_Desc_1:
        "**이더리움, MyEtherWallet.com & MyEtherWallet CX, 그리고 우리가 사용하는 JavaScript 라이브러리는 활발하게 개발되고 있습니다. ** 우리가 철저하게 테스트를 진행하여 수만 개의 지갑이 전 세계 사람들에 의해 성공적으로 만들어졌지만 예상치 못한 일이 발생하여 ETH를 잃을 가능성이 항상 존재합니다. 항상 조심해주세요. 만약 무슨 일이 발생한다면, 유감스럽지만 **우리는 잃어버린 이더리움에 대한 책임을 지지 않습니다.** ",
    HELP_Remind_Desc_2:
        "MyEtherWallet.com 과 MyEtherWallet CX는 웹 지갑이 아닙니다. 계정을 만들거나 우리에게 당신이 가진 이더리움을 주면 안 됩니다. 모든 데이터는 당신의 컴퓨터와 브라우저에 남아 있을 것입니다. 우리는 당신이 쉽게 당신의 정보를 만들고, 저장하고, 접근하고 블록체인과 상호 작용할 수 있도록 도울 것입니다. ",
    HELP_Remind_Desc_3:
        "당신의 개인 키와 암호를 저장하지 않으면, 지갑에 액세스할 수 없게 될 뿐만 아니라, 지갑에 있는 자금에도 접근할 수 없게 됩니다. 개인 키와 암호를 컴퓨터뿐만 아니라 &ndash; 다양한 실제 위치(ex :인쇄, 메모 등...)에도 백업해야 합니다! ",
    HELP_0_Title: "0) 처음 사용합니다. 뭘 해야 하나요? ",
    HELP_0_Desc_1:
        "MyEtherWallet은 새로운 지갑을 생성할 수 있는 기능을 제공하므로 거래소에 이더리움을 두지 않고 직접 저장할 수 있습니다. 이 과정은 전적으로 당신의 컴퓨터에서 발생하고 우리의 서버에서 발생하지 않습니다. 따라서 새로운 지갑을 만들 때 **안전하게 백업해야 합니다**. ",
    HELP_0_Desc_2: "새로운 지갑 생성하기 ",
    HELP_0_Desc_3: "지갑 백업하기 ",
    HELP_0_Desc_4:
        "새로운 지갑에 대한 액세스 권한과 필요한 모든 정보를 올바르게 저장하였는지 확인해주세요. ",
    HELP_0_Desc_5: "이더리움을 새로운 지갑으로 전송해보세요. ",

    HELP_1_Title: "1) 새로운 지갑을 어떻게 생성하나요? ",
    HELP_1_Desc_1: '"지갑 생성" 페이지로 이동합니다. ',
    HELP_1_Desc_2:
        '"지갑 추가" 페이지로 이동 & "새 지갑 생성"을 선택해주세요. ',
    HELP_1_Desc_3:
        "안전을 위하여 강력한 비밀번호를 설정하고 비밀번호 분실을 대비하여 안전하게 백업해주세요. 송금 시에 이 비밀번호가 요구됩니다. ",
    HELP_1_Desc_4: '"생성하기"를 클릭해주세요. ',
    HELP_1_Desc_5: "지갑이 생성되었습니다. ",

    HELP_2a_Title: "어떻게 내 지갑을 저장/백업할 수 있나요? ",
    HELP_2a_Desc_1:
        "항상 지갑을 USB 드라이브 또는 메모지와 같은 여러 위치에 백업해두어야 합니다. ",
    HELP_2a_Desc_2:
        "주소를 저장해주세요. 주소는 자신만 확인할 수 있도록 보관하거나 다른 사람에게 공유할 수 있습니다. 주소를 공유하면 다른 사람이 해당 주소로 이더리움을 전송할 수 있습니다. ",
    HELP_2a_Desc_3:
        "개인 키를 저장해주세요. 절대 타인과 공유하지 마세요. 개인 키는 지갑에 액세스하거나 이더리움을 전송하는 데 필요합니다! 개인 키에는 3가지 유형이 있습니다. ",
    HELP_2a_Desc_4:
        "주소, 개인 키 버전 및 종이 지갑의 PDF 파일을 폴더에 보관하고 컴퓨터와 USB 드라이브에 저장하세요. ",
    HELP_2a_Desc_5:
        "프린터가 있으면 지갑을 인쇄해주세요. 프린터가 없다면, 개인 키와 지갑 주소를 메모해주세요. 인쇄물 또는 메모를 컴퓨터와 USB와 분리된 안전한 위치에 보관해주세요. ",
    HELP_2a_Desc_6:
        "하드 디스크, USB, 종이의 손상을 방지해야 한다는 것을 유념하세요. 또한, 보관 장소의 재난에 대비해주세요. (화재, 홍수 등) ",

    HELP_2b_Title:
        "2b) 어떻게 하면 MyEtherWallet을 이용해 안전하게 오프라인, 콜드 스토리지로 자산을 보관할 수 있나요?  ",
    HELP_2b_Desc_1:
        "다음을 참고 해주세요. [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest). ",
    HELP_2b_Desc_2: "`etherwallet-vX.X.X.X.zip` 파일을 클릭합니다. ",
    HELP_2b_Desc_3: "zip 파일을 인터넷이 연결되지 않은 컴퓨터로 옮깁니다. ",
    HELP_2b_Desc_4: "압축을 푼 후, `index.html`을 더블 클릭합니다. ",
    HELP_2b_Desc_5: "강력한 비밀번호와 함께 지갑을 생성합니다.  ",
    HELP_2b_Desc_6:
        "지갑 주소를 저장합니다. 개인 키의 버전들을 저장합니다. 비밀번호를 영원히 기억할 자신이 없다면 저장합니다. ",
    HELP_2b_Desc_7: "인쇄된 지갑과 USB를 여러 장소에 분산하여 보관합니다. ",
    HELP_2b_Desc_8:
        '"지갑 정보 보기" 페이지에서 개인 키와 암호가 잘 작동하는지 확인해주세요. 저장해둔 지갑 주소가 동일한지 확인해주세요. ',

    HELP_3_Title:
        "3) 새로운 지갑에 대한 액세스 권한을 확인하려면 어떻게 해야 하나요?  ",
    HELP_3_Desc_1:
        "**새 지갑에 이더리움을 전송하기 전**에 지갑에 접근할 수 있는지 확인해야 합니다. ",
    HELP_3_Desc_2: '"지갑 정보 보기" 페이지로 이동합니다. ',
    HELP_3_Desc_3:
        'MyEtherWallet.com 에서 "지갑 정보 보기" 페이지로 이동합니다. ',
    HELP_3_Desc_4:
        "지갑 파일 선택 또는 개인 키를 사용하여 지갑을 잠금 해제합니다. ",
    HELP_3_Desc_5:
        "지갑이 암호화되어 있다면, 팝업 창이 열립니다. 비밀번호를 입력합니다. ",
    HELP_3_Desc_6: '"지갑 잠금 해제" 버튼을 클릭합니다. ',
    HELP_3_Desc_7:
        "지갑 정보가 표시됩니다. 색색의 동그란 아이콘 옆에 있는 지갑 주소를 찾습니다. 아이콘은 지갑 주소를 시각적으로 나타냅니다. 지갑 주소가 지갑을 생성할 때 메모해두었던 주소와 일치하는지 확인해야 합니다. ",
    HELP_3_Desc_8:
        "많은 양의 이더리움을 MyEtherWallet 으로 전송하기 전에, 소량의 이더리움을 전송해 보는 것을 권장합니다. 0.001 이더리움을 지갑으로 전송하고, 지갑을 열어 받은 이더리움을 확인하고, 다시 0.001 이더리움을 다른 주소로 전송하여 모든 과정이 잘 작동하는지 확인해주세요. ",

    HELP_4_Title: "4) 한 지갑에서 다른 지갑으로 이더리움을 어떻게 전송하나요? ",
    HELP_4_Desc_1:
        "많은 양의 이더리움을 다른 지갑으로 전송하기 전에 소량의 이더리움을 전송하여 전송이 잘 되는지 확인해주세요. ",
    HELP_4_Desc_2: '"이더리움 & 토큰 전송하기" 페이지로 이동합니다. ',
    HELP_4_Desc_3: "지갑 파일 또는 개인 키를 사용하여 지갑을 잠금 해제합니다. ",
    HELP_4_Desc_4:
        "지갑이 암호화되어있다면, 팝업 창이 열립니다. 비밀번호를 입력합니다. ",
    HELP_4_Desc_5: '"지갑 잠금 해제" 버튼을 클릭합니다. ',
    HELP_4_Desc_6: '"받는 주소" 영역에 이더리움을 전송할 주소를 입력합니다. ',
    HELP_4_Desc_7:
        '전송할 수량을 입력합니다. 모든 잔액을 전송하려면 "모든 잔액 전송" 을 클릭합니다. ',
    HELP_4_Desc_9: '"트랜잭션 생성하기"를 클릭합니다. ',
    HELP_4_Desc_10:
        "몇 가지 영역이 추가로 나타납니다. 당신의 브라우저에서 트랜잭션을 생성합니다. ",
    HELP_4_Desc_11: '바로 아래에 있는 "트랜잭션 전송하기"를 클릭합니다. ',
    HELP_4_Desc_12:
        '팝업창 열리면, 전송하고자 하는 수량이 정확한지 확인해주세요. 그 후, "네, 맞습니다! 전송합니다." 버튼을 누릅니다. ',
    HELP_4_Desc_13:
        "트랜잭션이 제출되고, TXID가 표시 됩니다. TXID를 클릭하여 블록체인에 등록되었는지 확인할 수 있습니다. ",

    HELP_4CX_Title:
        "4) 이더리움을 MyEtherWallet CX를 사용하여 전송하는 방법이 궁급합니다. ",
    HELP_4CX_Desc_1:
        '우선 지갑을 추가해야 합니다. 그 후에, 2가지 방법이 있습니다. "빠른 전송" 또는 "이더리움 & 토큰 전송" 페이지입니다. ',
    HELP_4CX_Desc_2: "빠른 전송 ",
    HELP_4CX_Desc_3: "Chrome 확장 프로그램 아이콘을 클릭합니다. ",
    HELP_4CX_Desc_4: '"빠른 전송" 버튼을 클릭합니다. ',
    HELP_4CX_Desc_5: "보내는 곳(지갑)을 선택합니다. ",
    HELP_4CX_Desc_6:
        '"받는 주소" 영역에 전송한 이더리움을 받게 될 주소를 입력합니다. ',
    HELP_4CX_Desc_7:
        '전송할 수량을 입력합니다. 모든 잔액을 전송하려면 "모든 잔액 전송" 을 클릭합니다. ',
    HELP_4CX_Desc_8: '"트랜잭션 전송하기"를 클릭합니다. ',
    HELP_4CX_Desc_9: "받는 주소와 양이 정확한지 확인해주세요. ",
    HELP_4CX_Desc_10: "지갑 주소를 입력합니다. ",
    HELP_4CX_Desc_11: '"트랜잭션 전송하기"를 클릭합니다." ',
    HELP_4CX_Desc_12: '"이더리움 & 토큰 전송하기" 페이지를 사용하는 방법',

    HELP_5_Title:
        "5) MyEtherWallet.com 을 오프라인/로컬에서 사용할 수 있나요?  ",
    HELP_5_Desc_1:
        'MyEtherWallet을 GitHub 서버가 아닌 본인의 컴퓨터에서 이용할 수 있습니다. 오프라인 상태에서 지갑을 생성할 수 있으며, "오프라인 트랜잭션" 페이지에서 트랜잭션을 전송할 수 있습니다. ',
    HELP_5_Desc_7: "MyEtherWallet.com 은 이제 본인의 컴퓨터에서 구동됩니다. ",
    HELP_5_Desc_8:
        "아직 사용이 미숙할 때는, `index.html` 뿐만 아니라 웹사이트를 가동하는 전체 폴더를 수정하지 말아 주세요. ",
    HELP_5_Desc_9:
        "우리는 MyEtherWallet.com을 주기적으로 업데이트하고 있으므로 당신이 정기적으로 저장소의 업데이트된 버전을 사용하는 것을 권장합니다. ",
    HELP_5CX_Title:
        "5) Chrome 스토어 대신 저장소에서 이 확장 프로그램을 설치하려면 어떻게 해야 하나요? ",
    HELP_5CX_Desc_2:
        "`chrome-extension-vX.X.X.X.zip`을 누르고, 압축을 풀어주세요. ",
    HELP_5CX_Desc_3: "구글 Chrome에서 설정(우측 상단 메뉴)에 있습니다. ",
    HELP_5CX_Desc_4: '"확장기능" 버튼을 클릭해주세요. ',
    HELP_5CX_Desc_5: "페이지 상단에 있는 개발자 모드 버튼에 체크해주세요. ",
    HELP_5CX_Desc_6: "압축 해제된 확장 프로그램 로드 버튼을 클릭해주세요. ",
    HELP_5CX_Desc_7:
        "조금 전 다운로드해서 압축을 푼 폴더로 가서 선택해주세요. ",
    HELP_5CX_Desc_8:
        "여기까지 하셨다면 마이이더월렛은 당신의 Chrome 확장 프로그램 창에 나타나서 Chrome 확장 프로그램 바에 생기게 됩니다. ",
    HELP_7_Title:
        "7) 토큰 전송하기 및 사용자 정의 토큰을 어떻게 추가할 수 있나요? ",
    HELP_7_Desc_0:
        "[Ethplorer.io](https://ethplorer.io/)에서 토큰을 탐색하여 토큰의 decimals를 찾을 수 있습니다. ",
    HELP_7_Desc_1: "이더리움 & 토큰 전송 페이지로 이동합니다. ",
    HELP_7_Desc_2: "지갑을 잠금 해제 합니다. ",
    HELP_7_Desc_3: "보낼 주소 입력란에 전송하고 싶은 주소를 입력합니다. ",
    HELP_7_Desc_4: "전송하고 싶은 금액을 입력합니다. ",
    HELP_7_Desc_5: "전송하고 싶은 토큰을 선택합니다. ",
    HELP_7_Desc_6: "원하는 토큰이 보이지 않는다면 ",
    HELP_7_Desc_7: '"사용자 정의" 버튼을 클릭합니다. ',
    HELP_7_Desc_8:
        '주소와 이름, 토큰의 decimals를 입력합니다. 이것은 토큰의 개발자에 의해서 제공되고 또한 당신이 Mist에서 "모니터링할 토큰 추가하기"를 할 때 필요합니다. ',
    HELP_7_Desc_9: '"저장" 버튼을 클릭합니다. ',
    HELP_7_Desc_10:
        "이제 토큰을 전송할 수 있게 됐을 뿐만 아니라 사이드 바에서 잔액도 확인하실 수 있습니다. ",
    HELP_7_Desc_11: '"트랜잭션 생성" 버튼을 클릭합니다. ',
    HELP_7_Desc_12:
        "2가지 이상의 영역이 나타날 것입니다. 이것이 트랜잭션을 생성하고 있는 것은 당신의 브라우저입니다. ",
    HELP_7_Desc_13:
        '그 아래에 있는 파란색 "트랜잭션 전송하기" 버튼을 클릭합니다. ',
    HELP_7_Desc_14:
        '팝업창이 열리면 보내는 양과 주소가 맞는지 확인해주세요. 그리고 "네 맞습니다! 전송합니다." 버튼을 클릭합니다. ',
    HELP_7_Desc_15:
        "트랜잭션이 전송되면 TXID가 나타날 것입니다. 해당 TXID를 클릭하여 블록체인에서 볼 수 있습니다. ",
    HELP_8_Title: "8) MyEtherWallet 서버가 다운되면 어떻게 되나요? ",
    HELP_8_Desc_1:
        "MyEtherWallet은 웹 지갑이 아닙니다. 서버에는 로그인은 물론 어떠한 것도 저장되지 않습니다. MyEtherWallet은 단지 블록체인에 접근 하게 해주는 도구입니다. ",
    HELP_8_Desc_2:
        '만약 MyEtherWallet.com이 다운된다면, 다른 대안 도구(geth 또는 Ethereum Wallet / Mist 등)를 사용해야 합니다. 이때 MyEtherWallet에서 이더리움을 "꺼내야" 할 필요는 없습니다. 이더리움은 MyEtherWallet.com을 통해서 생성된 지갑 내에 존재합니다. ',
    HELP_8_Desc_3:
        "암호화되지 않은 개인 키와 암호화된 Geth/Mist 형식의 파일은 쉽게 geth / 이더리움 지갑 / Mist에서 불러올 수 있습니다. 아래의 질문 #12를 확인해주세요. ",
    HELP_8_Desc_4:
        "또한, MyEtherWallet 이 다운 될 가능성은 희박합니다. 우리는 어떠한 정보도 저장하지 않기 때문에 비용이 들지 않습니다. 도메인이 다운되더라도, 항상 공개적으로  [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages)을 통해 로컬 지갑을 시작할 수 있습니다. ZIP 파일을 다운 받아주세요. ",

    HELP_8CX_Title: "8) MyEtherWallet CX가 사라지면 어떻게 되나요? ",
    HELP_8CX_Desc_1:
        "우선, 모든 정보는 MyEtherWallet 서버가 아닌 사용자의 컴퓨터에 저장됩니다. 오해할 수도 있지만, Chrome 확장 프로그램 화면은 우리의 서버에서 불러온 것이 아닙니다. 전부 사용자의 컴퓨터에 저장 되어있습니다. ",
    HELP_8CX_Desc_2:
        "즉, **매우 중요** MyEtherWallet CX 로 새로 만든 지갑 정보는 모두 백업해 두어야 합니다. 만약 컴퓨터에 문제가 생기거나 Chrome 확장 프로그램에 문제가 생겨도 백업해둔 파일로 지갑에 접근할 수 있습니다. #2a에서 지갑을 어떻게 백업 하는 지 확인할 수 있습니다. ",
    HELP_8CX_Desc_3:
        "어떤 이유로 MyEtherWallet CX 가 Chrome 스토어에서 사라져도, Github 에서 소스를 다운 받아 수동으로 사용할 수 있습니다. 위의 #5를 확인해주세요. ",

    HELP_9_Title: '9) "이더리움 & 토큰 전송하기" 페이지는 오프라인인가요? ',
    HELP_9_Desc_1:
        '아닙니다. 현재 가스 가격, 본인의 계정 정보, 그리고 트랜잭션 ("전송하기")를 나타내기 위해서는 인터넷이 필요합니다. 그러나 이것은 서명된 트랜잭션만 보냅니다. 개인 키는 안전하게 귀하와 함께 있습니다. 또한, 오프라인 트랜잭션 페이지를 제공하여 개인 키가 항상 오프라인 / 인터넷이 연결되지 않은 컴퓨터에 있는지 확인할 수 있습니다. ',

    HELP_10_Title: "10) 오프라인 트랜잭션은 어떻게 생성하나요? ",
    HELP_10_Desc_1:
        '온라인 컴퓨터에서 "오프라인 트랜잭션" 페이지로 이동합니다. ',
    HELP_10_Desc_2:
        '"보낸 사람 주소"를 입력하십시오. 이 주소는 TO가 아니라 FROM으로 보내는 주소입니다. 이것은 nonce 및 가스 가격을 생성합니다. ',
    HELP_10_Desc_3:
        '오프라인 컴퓨터에서, "받는 곳"과 전송하고자 하는 "금액" 을 입력합니다. ',
    HELP_10_Desc_4: '온라인 컴퓨터 1단계에서 표시된 "가스 가격"을 입력합니다. ',
    HELP_10_Desc_5: '온라인 컴퓨터 1단계에서 표시된 "NONCE"를 입력합니다. ',
    HELP_10_Desc_6:
        "21000 가스는 기본 설정값입니다. 트랜잭션을 전송하거나 데이터를 더할 때, 사용 가스는 다를 수 있습니다. 사용되지 않은 가스는 환급됩니다. ",
    HELP_10_Desc_7:
        "가스를 늘리고 싶다면 희망 가스양을 입력해주세요. 기본값인 21000 가스보다 높은 양을 입력해야 합니다. 모든 데이터는 HEX 포맷입니다. ",
    HELP_10_Desc_8: "지갑을 열기 위해 지갑 파일 또는 개인 키를 선택합니다. ",
    HELP_10_Desc_9: '"서명된 트랜잭션 생성" 버튼을 클릭해주세요. ',
    HELP_10_Desc_10:
        "이 버튼 아래의 데이터 영역은 서명된 트랜잭션으로 채워집니다. 이것을 복사하여 온라인 컴퓨터로 옮깁니다. ",
    HELP_10_Desc_11:
        "온라인 컴퓨터에서 3단계의 텍스트 필드에 서명된 트랜잭션을 붙여넣고 전송하기를 클릭해주세요. 그 후에 트랜잭션이 공개됩니다. ",

    HELP_12_Title:
        "12) MyEtherWallet으로 만든 지갑을 geth / 이더리움 지갑 / Mist로 가져오려면 어떻게 해야 하나요? ",
    HELP_12_Desc_1: "MyEtherWallet v2 +의 Geth / Mist JSON 파일 사용하기… ",
    HELP_12_Desc_2: '"지갑 정보 보기" 페이지로 이동합니다. ',
    HELP_12_Desc_3:
        "**암호화된** 개인 키 또는 JSON 파일을 사용하여 지갑을 잠금 해제합니다. ",
    HELP_12_Desc_4: '"내 지갑"페이지로 이동합니다. ',
    HELP_12_Desc_5:
        'Mist로 가져올 지갑을 선택하고 "보기" 아이콘을 클릭한 다음 비밀번호를 입력하고 지갑에 액세스합니다.',
    HELP_12_Desc_6:
        '"JSON 파일 다운로드 - Geth / Mist 형식 (암호화됨)" 부문을 찾아주세요. 아래의 "다운로드" 버튼을 클릭합니다. 이제 키 저장소 파일이 생겼습니다. ',
    HELP_12_Desc_7: "이더리움 어플리케이션을 실행합니다. ",
    HELP_12_Desc_8: '메뉴 바에서 "계정들" > "백업" > "계정" 으로 이동합니다. ',
    HELP_12_Desc_9:
        '그러면 키 저장소 폴더가 열립니다. 방금 다운로드 한 파일 ("UTC - 2016-04-14 ........ /")을 사용자의 keystore 폴더에 복사합니다. ',
    HELP_12_Desc_10: '사용자의 계정이 바로 "계정" 아래에 나타나야합니다. ',
    HELP_12_Desc_11: "사용자의 암호화되지 않은 개인 키를 사용합니다… ",
    HELP_12_Desc_12:
        "아직 암호화된 키가 없다면 ‘지갑 세부사항 보기’ 페이지로 갑니다. ",
    HELP_12_Desc_13:
        "지갑 파일을 선택하거나 당신의 개인 키를 입력/붙여넣기 하여 지갑의 잠금을 해제합니다. ",
    HELP_12_Desc_14: "개인 키를 복사합니다. (암호화되지 않은) ",
    HELP_12_Desc_15: "맥을 사용하고 있다면 ",
    HELP_12_Desc_15b: "PC를 사용하고 있다면 ",
    HELP_12_Desc_16: "Text 편집을 열어 개인 키를 붙여넣기 합니다. ",
    HELP_12_Desc_17:
        '메뉴로 가서 "포맷" -> "일반 텍스트 만들기"를 선택합니다. ',
    HELP_12_Desc_18:
        '이 파일을 당신 컴퓨터에 "nothing_special_delete_me.txt"같은 제목으로 저장해주세요 저장 대화 상자에 "UTF-8"과 "확장자가 제공되지 않은 경우 .txt 사용"이 표시되어있는지 확인합니다. ',
    HELP_12_Desc_19:
        '터미널을 열고 다음 커맨드를 실행합니다. "geth account import ~/Desktop/nothing_special_delete_me.txt" ',
    HELP_12_Desc_20:
        "실행하면 새 비밀번호를 입력하라는 메시지가 나타납니다. 이것은 트랜잭션을 전송할 때마다 사용할 비밀번호이므로 절대 잃어버리지 말아 주세요. ",
    HELP_12_Desc_21:
        '가져오기가 성공하면 "nothing_special_delete_me.txt"를 삭제합니다. ',
    HELP_12_Desc_22:
        '이후 이더리움 지갑 어플리케이션을 열 면 계정이 "계정" 아래에 표시됩니다.". ',
    HELP_12_Desc_23: "메모장을 열고 개인 키를 붙여넣습니다. ",
    HELP_12_Desc_24:
        '"C :"에 "nothing_special_delete_me.txt"이름으로 파일을 저장합니다. ',
    HELP_12_Desc_25:
        '"geth 계정 가져오기 C : \\ nothing_special_delete_me.txt" 명령을 실행합니다. ',
    HELP_12_Desc_26:
        "명령을 실행하면 새 비밀번호를 입력하라는 메시지가 나타납니다. 이것은 트랜잭션을 전송할 때마다 geth / 이더리움 지갑 / Mist에서 사용할 비밀번호이므로 절대 잃어버리지 마십시오. ",
    HELP_12_Desc_27:
        '가져오기가 성공하면 "nothing_special_delete_me.txt"를 삭제합니다. ',
    HELP_12_Desc_28:
        '다음에 이더리움 지갑 어플리케이션을 열 면 계정이 "계정" 아래에 표시됩니다. ',

    HELP_13_Title:
        '13) "잔액 부족. 계정에 충분한 자금이 없습니다. 필요한 : XXXXXXXXXXXXXXXXXXX 그리고 가지고 있는: XXXXXXXXXXXXXXXXXXX" 는 어떤 의미인가요? ',
    HELP_13_Desc_1:
        '이것은 가스 비용을 충당하기 위해 계정에 이더리움이 부족하다는 의미입니다. 각각의 트랜잭션(토큰 및 컨트랙트 트랜잭션을 포함하여) 가스가 필요하고 그 가스는 이더리움으로 지불됩니다. 표시된 숫자는 Wei에서 트랜잭션의 비용을 충당하기 위해 필요한 금액입니다. 이 숫자를 "1000000000000000000"으로 나눈 다음, 당신이 전송하려고 하는 이더리움의 금액을 제외합니다.(이더리움을 전송하려고 하는 경우) 이렇게 하면 트랜잭션을 만들기 위해 해당 계정으로 전송하는데 필요한 이더리움의 금액을 알 수 있습니다. ',

    HELP_14_Title:
        "14) 일부 사이트들은 마우스의 조작을 통해 개인 키 생성을 무작위로 시드 합니다. MyEtherWallet.com은 이 방식을 사용하지 않습니다. MyEtherWallet의 무작위 숫자 생성이 안전할까요? ",
    HELP_14_Desc_1:
        "대상을 움직이는 마우스는 영리하게 작동하며 우리는 사람들이 그것을 좋아하는 이유를 이해하지만, 실제 window.crypto는 당신의 마우스 조작보다 더 많은 엔트로피를 보장합니다. 마우스의 조작은 안전하지 못합니다. 우리와 다른 많은 암호 실험들은 window.crypto를 믿습니다. 게다가 MyEtherWallet.com은 터치 장치에서도 이용될 수 있습니다. 여기에 [마우스 조작에 관해 화가 난 Reddit 이용자와 비탈릭의 대화 v.window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm)와  [ window.crypto w3 spec](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GloblCrypto)가 있습니다. ",

    HELP_15_Title:
        "15) 방금 만든 계정이 블록체인 탐색기에 표시되지 않는 이유는 뭔가요? (예, etherchain, etherscan) ",
    HELP_15_Desc_1:
        "계정은 거래 활동이 있을 경우에만 블록체인 탐색기에 표시됩니다. 예를 들어, 이더리움을 계정으로 이동시키면 계정이 활성화됩니다. ",

    HELP_16_Title: "16) 내 계정의 잔액을 어떻게 확인하나요? ",
    HELP_16_Desc_1:
        "[etherscan.io] (https://etherscan.io/) 와 같은 블록체인 탐색기를 사용할 수 있습니다. 주소를 검색 창에 붙여넣으면 주소와 거래 내역이 표시됩니다. 예를 들어, 우리의 [기부 계정]은 (https://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) 과 같습니다. ",

    HELP_17_Title: "17) 내 지갑에서 잔액이 표시되지 않는 이유는 뭔가요? ",
    HELP_17_Desc_1:
        "그 이유는 방화벽 때문입니다. 우리가 잔액 정보를 얻고 잔액 정보를 변환하는 데 사용하는 API는 어떤 이유로 든 방화벽에 의해 차단되는 경우가 많습니다. 사용자는 계속해서 트랜잭션을 보낼 수 있습니다. 당신은 단지 잔액을 확인하기 위해 etherscan.io 블록체인 탐색 사이트와 같은 다른 방법을 사용해야 될 수 있습니다. ",

    HELP_18_Title: "18) 내 geth 지갑 파일이 어디 있나요? ",

    HELP_19_Title: "19) 내 Mist 지갑 파일이 어디 있나요? ",
    HELP_19_Desc_1:
        'Mist 파일은 일반적으로 위의 파일 위치에서 찾을 수 있지만 Mist를 열려면 맨 위 표시할 줄에서 "계정"을 선택하고 "백업"을 선택한 다음 "계정"을 선택하는 것이 훨씬 간단합니다. 그러면 파일이 저장된 폴더가 열립니다. ',

    HELP_20_Title: "20) 나의 프리세일 지갑 파일이 어디 있나요? ",
    HELP_20_Desc_1:
        '당신이 지갑 파일을 어디에 보관했든지 간에 지갑 파일은 당신에게 이메일로도 전송되었습니다. 그곳에서 확인하시면 됩니다. "ethereum_wallet_backup.json"이라고 쓰여있는 파일을 찾아서 그 파일을 선택해주세요. 이 지갑 파일은 당신이 프리 세일 구매할 때 만들었던 비밀번호로 암호화되어 있을 것입니다. ',

    HELP_21_Title:
        "21) 혹여나 누군가가 랜덤한 개인 키를 넣어 잔액을 찾아서 자기 주소로 보낼 수도 있나요? ",
    HELP_21_Desc_1:
        "짧은 답변 : 가능은 합니다. 하지만 잔액이 있는 계정을 찾는데 아마 영원한 시간이 걸릴 것입니다. 따라서 불가능하다고 생각하면 될 것 같습니다. ",
    HELP_21_Desc_2:
        "길지만, 최대한 쉽게 설명한 답변: 그래서 이더리움은 [공개 키 암호화](https://en.wikipedia.org/wiki/Public-key_cryptograpy) 특히나 [타원곡선 암호화](https://eprint.iacr.org/2013/734.pdf) 를 기반으로 합니다. 대부분의 서버는 ECC를 통해 보호됩니다. 비트코인은 SSH와 TLS 뿐만 아니라 다른 것들도 많이 사용합니다. 이더리움의 키는 128bit와 192bit보다 더 강력한 256bit 키이며, 이것들은 널리 사용되고 있으며 전문가들도 안전하다고 얘기합니다. ",
    HELP_21_Desc_3:
        "이곳에는 개인 키와 공개 키가 존재합니다. 개인 키는 공개 키를 생성시킬 수 있지만, 공개 키는 개인 키로 되돌릴 수 없습니다. 인터넷과 세계의 비밀들이 이 암호를 사용하고 있다는 사실은, 공개 키에서 개인 키로 되돌리는 방법이 있다면 이것이 한 사람의 문제가 아니라 모든 사람의 문제가 될 것입니다. ",
    HELP_21_Desc_4:
        "만약 누군가가 당신의 개인 키를 소지하고 있다면 당신의 계정에서 이더리움을 보낼 수 있게 됩니다. 이 얘기는 누군가가 당신의 이메일의 비밀번호를 알고 있다면 당신의 이메일을 읽을 수 있으며, 이메일이나 누군가가 출금할 수 있도록 당신의 은행 계정 비밀번호를 전송할 수 있다는 것과 마찬가지입니다. 당신은 비밀번호로 암호화된 개인 키인 ‘개인 키의 키스토어 버전’을 다운로드 할 수 있습니다. 이것은 다른 암호로 보호되는 비밀번호를 갖게 되는 것입니다. ",
    HELP_21_Desc_5:
        "그리고 이론상 누군가가 당신의 계정을 찾을 때까지 64개의 16진수 문자열을 대입한다면 당신의 계정이 도난당할 수도 있습니다. 사실 똑똑한 사람들은 임의의 개인 키를 매우 빠르게 검사할 수 있는 프로그램을 만들 수 있습니다. 이것은 ‘무차별 대입 공격’ 또는 ‘개인 키 마이닝’이라고 알려져 있습니다. 사람들은 이것에 대해 오랫동안 고민해 왔습니다. 2~3개의 초고속 서버로 그들은 초당 100만 개 이상의 키를 검사할 수 있습니다. 그러나 초당 수많은 것들은 검사하는 것조차 이 서버를 운영하는 비용을 감당하는게 무의미한 일이 될 것입니다. 개인 키를 알아내기 위해선 어마어마한 시간이 걸립니다. ",
    HELP_21_Desc_6:
        "당신이 비트코인에 대해 이해하고 있는 사람이라면 [이 링크로 앞으로 상황을 예측할 수 있을 것입니다.](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-willpeple)  이것이 어떻게 되는 것인지 설명하자면 : 여태껏 생성된 비트코인의 모든 사토시가 고유한 자체의 개인 키로 전송했다고 가정해봅시다. 두 가지 키가 같은 키에 해당할 확률은 약 100억분의 1입니다. ",
    HELP_21_Desc_7:
        "[좀 더 기술적인 것을 원한다면:] (http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *이 숫자는 장치 기술과 아무런 관련이 없습니다. 그것들은 열역학이 허용하는 최대치입니다. 그리고 그것들은 256bit 키에 대한 무차별 대입 공격이 해당 컴퓨터가 다른 물질로 변할 때까지 엄청난 시간이 흘러도 불가능하다는 것을 강하게 암시합니다. ",
    HELP_21_Desc_8:
        "물론, 이 모든 개인 키가 정말로 무작위 방식으로 충분한 엔트로피를 갖고 생성된다고 가정합시다. 이곳에서 생성된 키는 Jaxx 와 Mist/geth와 마찬가지로 해당 기준을 충족시킵니다. 이더리움 지갑들은 모두 좋은 지갑들입니다. 사람의 뇌가 정말로 무작위적인 시드를 만들어내지 못하기 때문에 사람에 의해 만들어진 지갑으로 만들어진 키는 썩 좋지 않습니다. 비트코인 세계에서는 정말로 무작위 방식으로 생성되고 있지 않은 엔트로피나 시드가 부족한 것에 관해 수많은 문제가 있었습니다. 하지만 그것은 언젠가 해결이 될 날을 기다릴 수 있는 것은 별개의 문제입니다. ",

    HELP_SecCX_Title: "보안 - MyEtherWallet CX ",
    HELP_SecCX_Desc_1: "이 확장 프로그램이 내 정보를 어디에 저장하나요? ",
    HELP_SecCX_Desc_2:
        "Chrome 확장 프로그램에 저장한 정보는 [Chrome.storage](http://chrome.storage/)를 통해 저장됩니다. - 이는 Chrome에 비밀번호를 저장한 위치와 같은 위치에 저장됩니다. ",
    HELP_SecCX_Desc_3: "어떤 정보가 저장되나요? ",
    HELP_SecCX_Desc_4:
        "주소, 별명, 개인 키가 Chrome 스토리지에 저장됩니다. 개인 키는 지갑을 추가할 때 생성된 비밀번호로 암호화됩니다. 별명, 지갑 주소는 암호화되지 않습니다. ",
    HELP_SecCX_Desc_5: "별명과 지갑 주소는 왜 암호화되지 않나요? ",
    HELP_SecCX_Desc_6:
        "별명과 지갑 주소를 암호화하면 계정 잔액과 별명들을 확인할 때마다 비밀번호를 입력해야 합니다. 보안이 걱정된다면 Chrome 확장 프로그램 대신 MyEtherWallet.com 을 사용해주세요. ",

    HELP_Sec_Title: "보안 ",
    HELP_Sec_Desc_1:
        '첫 질문이 "이 사람들을 신뢰할 수 있나요?"라는 질문이라면 매우 타당한 질문입니다. 다음 내용이 질문에 대한 답변이 되기를 바랍니다. ',
    HELP_Sec_Desc_2:
        "우리는 2015년 8월부터 운영되어 왔습니다. [www.reddit.com 에서 myetherwallet](https://www.reddit.com/search?q=myetherwalle)을 검색하면 많은 사용자들을 볼 수 있습니다. ",
    HELP_Sec_Desc_3:
        "우리는 절대 돈을 빼가거나 개인 키를 훔치지 않습니다. 이 사이트에 악의적인 코드는 없습니다. 실제로 지갑 생성 페이지는 완전하게 클라이언트 측에서 작동합니다. 즉, 모든 코드가 **사용자 컴퓨터**에서 실행되며 절대 다른 곳에 정보가 저장되거나 전송되지 않습니다. ",
    HELP_Sec_Desc_4:
        "이 URL을 확인해보세요. -- 이 사이트는 GitHub를 통해 소스가 공개되어 있으며 다음 링크에서 확인하실 수 있습니다. : [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) to [https://www.myetherwallet.com](https://www.myetherwallet.com). ",
    HELP_Sec_Desc_5:
        "지갑을 생성하려면, [소스 코드를 다운로드하여 로컬에서 실행하십시오](https://github.com/kvhnuke/etherwallet/releases/latest). 위의 #5를 참조해주세요 ",
    HELP_Sec_Desc_6:
        '테스트 지갑을 생성하고 어떤 네트워크 활동이 진행되는지 확인할 수 있습니다. 가장 쉬운 방법은 페이지를 마우스 오른쪽 버튼을 클릭하여 "요소 검사"를 클릭합니다. "네트워크" 탭으로 이동합니다. 테스트 지갑을 생성하면 네트워크 탭에서 네트워크 활동이 없음을 확인할 수 있습니다. data:image/gif, data:image/png 생성도 역시 네트워크를 사용하지 않는 것을 확인하실 수 있습니다. QR 코드는 컴퓨터에서 생성됩니다. 당신의 컴퓨터에서 아무것도 전송되지 않는 것을 확인하실 수 있습니다. ',
    HELP_Sec_Desc_8:
        "이 도구를 사용하는 것이 내키지 않는다면 사용하지 않아도 됩니다. 우리는 사람들이 커맨드 명령을 입력이나 풀 노드를 실행할 필요 없이 지갑을 생성하고 트랜잭션을 생성하는 데 도움이 되었으면 하는 바램으로 이 도구를 제작하였습니다. 다시 말씀드리자면, 이상한 점을 발견하신다면 우리에게 연락해주세요. 가능한 빨리 답변드리겠습니다. 감사합니다! ",

    HELP_FAQ_Title: "자주 묻는 질문에 대한 도움이 될 답변 ",
    HELP_Contact_Title: "연락 방법 "
};

module.exports = ko;