// Polish
"use strict";
var pl = function() {};
pl.code = "pl";
pl.data = {
    /* DexNS tabs */

    NAV_DexNS: "DexNS",
    NAV_Decentralized_Naming_Service: "Decentralized Naming Service",

    /* New Generics */
    x_CancelReplaceTx: "Cancel or Replace Transaction",
    x_CancelTx: "Cancel Transaction",
    x_PasswordDesc:
        "This password * encrypts * your private key. This does not act as a seed to generate your keys. **You will need this password + your private key to unlock your wallet.**",
    x_ReadMore: "Read More",
    x_ReplaceTx: "Replace Transaction",
    x_TransHash: "Transaction Hash",
    x_TXFee: "TX Fee",
    x_TxHash: "TX Hash",

    /* Check TX Status */
    NAV_CheckTxStatus: "Check TX Status",
    NAV_TxStatus: "TX Status",
    tx_Details: "Transaction Details",
    tx_Summary:
        'During times of high volume (like during ICOs) transactions can be pending for hours, if not days. This tool aims to give you the ability to find and "cancel" / replace these TXs. ** This is not typically something you can do. It should not be relied upon & will only work when the TX Pools are full. [Please, read about this tool here.](https://myetherwallet.groovehq.com/knowledge_base/topics/how-can-i-check-on-the-status-of-my-transaction-can-i-cancel-override-overwrite-replace-or-do-anything-once-a-transaction-has-been-sent)**',
    tx_notFound: "Transaction Not Found",
    tx_notFound_1:
        "This TX cannot be found in the TX Pool of the node you are connected to.",
    tx_notFound_2:
        'If you just sent the transaction, please wait 15 seconds and press the "Check TX Status" button again. ',
    tx_notFound_3:
        "It could still be in the TX Pool of a different node, waiting to be mined.",
    tx_notFound_4:
        "Please use the dropdown in the top-right & select a different ETH node (e.g. `ETH (Etherscan.io)` or `ETH (Infura.io)` or `ETH (MyEtherWallet)`) and check again.",
    tx_foundInPending: "Pending Transaction Found",
    tx_foundInPending_1:
        "Your transaction was located in the TX Pool of the node you are connected to. ",
    tx_foundInPending_2: "It is currently pending (waiting to be mined). ",
    tx_foundInPending_3:
        'There is a chance you can "cancel" or replace this transaction. Unlock your wallet below.',
    tx_FoundOnChain: "Transaction Found",
    tx_FoundOnChain_1:
        "Your transaction was successfully mined and is on the blockchain.",
    tx_FoundOnChain_2:
        '**If you see a red `( ! )`, a `BAD INSTRUCTION` or `OUT OF GAS` error message**, it means that the transaction was not successfully *sent*. You cannot cancel or replace this transaction. Instead, send a new transaction. If you received an "Out of Gas" error, you should double the gas limit you specified originally.',
    tx_FoundOnChain_3:
        "**If you do not see any errors, your transaction was successfully sent.** Your ETH or Tokens are where you sent them. If you cannot see this ETH or Tokens credited in your other wallet / exchange account, and it has been 24+ hours since you sent, please [contact that service](https://myetherwallet.groovehq.com/knowledge_base/topics/i-have-a-question-but-its-not-about-myetherwallet-dot-com-what-do-i-do). Send them the *link* to your transaction and ask them, nicely, to look into your situation.",

    /* Gen Wallet Updates */
    GEN_Help_1: "Use your",
    GEN_Help_2: "to access your account.",
    GEN_Help_3: "Your device * is * your wallet.",
    GEN_Help_4: "Guides & FAQ",
    GEN_Help_5: "How to Create a Wallet",
    GEN_Help_6: "Getting Started",
    GEN_Help_7:
        "Keep it safe · Make a backup · Don't share it with anyone · Don't lose it · It cannot be recovered if you lose it.",
    GEN_Help_8: "Not Downloading a File? ",
    GEN_Help_9: "Try using Google Chrome ",
    GEN_Help_10: "Right click & save file as. Filename: ",
    GEN_Help_11: "Don't open this file on your computer ",
    GEN_Help_12:
        "Use it to unlock your wallet via MyEtherWallet (or Mist, Geth, Parity and other wallet clients.) ",
    GEN_Help_13: "How to Back Up Your Keystore File ",
    GEN_Help_14: "What are these Different Formats? ",
    GEN_Help_15: "Preventing loss &amp; theft of your funds.",
    GEN_Help_16: "What are these Different Formats?",
    GEN_Help_17: "Why Should I?",
    GEN_Help_18: "To have a secondary backup.",
    GEN_Help_19: "In case you ever forget your password.",
    GEN_Help_20: "Cold Storage",
    GET_ConfButton: "I understand. Continue.",
    GEN_Label_5: "Save Your `Private Key`. ",
    GEN_Unlock: "Unlock your wallet to see your address",
    GAS_PRICE_Desc:
        "Gas Price is the amount you pay per unit of gas. `TX fee = gas price * gas limit` & is paid to miners for including your TX in a block. Higher the gas price = faster transaction, but more expensive. Default is `21 GWEI`.",
    GAS_LIMIT_Desc:
        "Gas limit is the amount of gas to send with your TX. `TX fee` = gas price * gas limit & is paid to miners for including your TX in a block. Increasing this number will not get your TX mined faster. Sending ETH = `21000`. Sending Tokens = ~`200000`.",
    NONCE_Desc:
        "The nonce is the number of transactions sent from a given address. It ensures transactions are sent in order & not more than once.",
    TXFEE_Desc:
        "The TX Fee is paid to miners for including your TX in a block. Is is the `gas limit` * `gas price`. [You can convert GWEI -> ETH here](https://www.myetherwallet.com/helpers.html)",

    /* Navigation*/
    NAV_AddWallet: "Dodaj Portfel ",
    NAV_BulkGenerate: "Generuj Hurtowo ",
    NAV_Contact: "Kontakt ",
    NAV_Contracts: "Kontrakt ",
    NAV_DeployContract: "Wyślij Kontrakt ",
    NAV_ENS: "ENS",
    NAV_GenerateWallet_alt: "New Wallet ",
    NAV_GenerateWallet: "Wygeneruj Portfel ",
    NAV_Help: "Pomoc ",
    NAV_InteractContract: "Pracuj z Kontraktem ",
    NAV_Multisig: "Multi-podpis ",
    NAV_MyWallets: "Moje Portfele ",
    NAV_Offline: "Wyślij Offline ",
    NAV_SendEther: "Wyślij Ether i Tokeny ",
    NAV_SendTokens: "Wyślij Tokeny ",
    NAV_SignMsg: "Podpisz Wiadomość ",
    NAV_Swap: "Giełda ",
    NAV_ViewWallet: "Wyświetl informacje o portfelu ",
    NAV_YourWallets: "Twoje Portfele ",

    /* General */
    x_Access: "Dostęp ",
    x_AddessDesc:
        'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Inaczej "Numer konta" lub "Klucz publiczny". Wysyłasz go innym aby mogli Ci wysłać ether. Ikona umożliwia łatwe rozpoznanie Twojego adresu. ',
    x_Address: "Twój Adres ",
    x_Cancel: "Anuluj ",
    x_CSV: "Plik CSV (nieszyfrowany) ",
    x_Download: "Pobierz ",
    x_Json: "Plik JSON (nieszyfrowany) ",
    x_JsonDesc:
        "Nieszyfrowany klucz prywatny, plik w formacie JSON. Nie wymaga podania hasła, ale każdy kto zdobędzie ten plik uzyska również pełny dostęp do Twojego portfela i zgromadzonych na nim środków. ",
    x_Keystore: "Plik Keystore (UTC / JSON · Zalecany · Szyfrowany) ",
    x_Keystore2: "Plik Keystore (UTC / JSON) ",
    x_KeystoreDesc:
        "Ten plik Keystore odpowiada formatowi stosowanemu przez Mist, więc może być w prosty sposób zaimportowany w przyszłości. Jest to zalecana forma pliku do pobrania i przechowywania jako kopii zapasowej. ",
    x_MetaMask: "ClassicMask / MetaMask / Mist ",
    x_Mnemonic: "Mnemonik ",
    x_ParityPhrase: "Fraza Parity ",
    x_Password: "Hasło ",
    x_Print: "Drukuj Portfel Papierowy ",
    x_PrintDesc:
        "Wskazówka: Kliknij drukuj i zapisz plik PDF, nawet jeżeli nie posiadasz drukarki! ",
    x_PrintShort: "Drukuj ",
    x_PrivKey: "Klucz Prywatny (nieszyfrowany) ",
    x_PrivKey2: "Klucz Prywatny ",
    x_PrivKeyDesc:
        "Nieszyfrowana, tekstowa wersja Twojego klucza prywatnego, nie wymaga hasła. Jeżeli ktoś zdobędzie nieszyfrowany klucz, będzie mógł uzyskać pełen dostęp do Twojego portfela bez podania hasła. Z tego powodu zaleca się używanie jego szyfrowanej wersji. ",
    x_Save: "Zapisz ",
    x_TXT: "Plik TXT (nieszyfrowany) ",
    x_Wallet: "Portfel ",

    /* Header */
    MEW_Warning_1:
        "Zawsze dokładnie sprawdzaj adres URL strony przed jej użyciem. Użycie fałszywej strony może pozbawić cię wszystkich środków! ",
    CX_Warning_1:
        "Upewnij się że posiadasz **zewnętrzne kopie bezpieczeństwa** każdego przechowywanego tu portfela. Może być wiele przyczyn utraty danych przechowywanych w tym rozszerzeniu przeglądarki Chrome, włączając w to odinstalowanie i ponowne zainstalowanie rozszerzenia. To rozszerzenie ma ułatwiać dostęp do Twoich portfeli, a **nie** służyć jako kopia bezpieczeństwa. ",
    MEW_Tagline: "Portfel Ethereum - Open Source, JavaScript, Client-Side ",
    CX_Tagline:
        "Portfel Ethereum, Rozszerzenie Chrome - Open Source, JavaScript, Client-Side ",

    /* Footer */
    FOOTER_1:
        "Narzędzie do generowania portfeli Ethereum i wysyłania transakcji - otwarto-źródłowe, javascrypt'owe, strony klienta ",
    FOOTER_1b: "Twórcy: ",
    FOOTER_2: "Darowizny: ",
    FOOTER_3: "Generowanie portfeli po stronie klienta przez ",
    FOOTER_4: "Wyłączenie odpowiedzialności ",

    /* Sidebar */
    sidebar_AccountInfo: "Informacje o Koncie ",
    sidebar_AccountAddr: "Adres Konta ",
    sidebar_AccountBal: "Stan Konta ",
    sidebar_TokenBal: "Stan Tokenów ",
    sidebar_Equiv: "Ekwiwalent ",
    sidebar_TransHistory: "Historia Transakcji ",
    sidebar_donation:
        "MyEtherWallet jest darmową, otwarto-źródłową usługą stworzoną dla Twojej prywatności i bezpieczeństwa. Im więcej darowizn zbierzemy, tym więcej czasu będziemy w stanie poświęcić na dodawanie nowych funkcjonalności, analizowanie informacji zwrotnych oraz spełnianie waszych oczekiwań. Jesteśmy jedynie dwójką ludzi starającą się zmienić świat. Pomóż nam! ",
    sidebar_donate: "Prześlij darowiznę ",
    sidebar_thanks: "DZIĘKUJEMY!!! ",
    sidebar_DisplayOnTrezor: "Display address on TREZOR",
    sidebar_DisplayOnLedger: "Display address on Ledger",

    /* Decrypt Panel */
    decrypt_Access: "Jak chciałbyś uzyskać dostęp do Twojego portfela? ",
    decrypt_Title: "Wybierz format Twojego klucza prywatnego: ",
    decrypt_Select: "Wybierz Portfel: ",

    /* Add Wallet */
    ADD_Label_1: "Co chciałbyś zrobić? ",
    ADD_Radio_1: "Generuj Nowy Portfel ",
    ADD_Radio_2: "Wybierz Plik Portfela (Keystore / JSON) ",
    ADD_Radio_2_alt: "Wybierz Plik Portfela ",
    ADD_Radio_2_short: "WYBIERZ PLIK PORTFELA... ",
    ADD_Radio_3: "Wklej/Wpisz Twój Klucz Prywatny ",
    ADD_Radio_4: "Dodaj Konto do Obserwacji ",
    ADD_Radio_5: "Wklej/Wpisz Swój Mnemonik ",
    ADD_Radio_5_Path: "Wybierz ścieżkę portfela HD ",
    ADD_Radio_5_woTrezor: "(Jaxx, Metamask, Exodus, imToken)",
    ADD_Radio_5_withTrezor: "(Jaxx, Metamask, Exodus, imToken, TREZOR)",
    ADD_Radio_5_PathAlternative: "(Ledger)",
    ADD_Radio_5_PathTrezor: "(TREZOR)",
    ADD_Radio_5_PathCustom: "(Niestandardowy) ",
    ADD_Label_2: "Utwórz Nazwę Użytkownika: ",
    ADD_Label_3: "Twój portfel jest zaszyfrowany. Podaj hasło ",
    ADD_Label_4: "Dodaj Konto do Obserwacji ",
    ADD_Warning_1:
        "Możesz dodać dowolne konto do obserwacji bez podawania jego klucza prywatnego. ** Nie ** oznacza to, że uzyskasz dostęp do tego portfela, nie będziesz mógł również wysyłać z niego środków. ",
    ADD_Label_5: "Wpisz Adres ",
    ADD_Label_6: "Odblokuj Portfel ",
    ADD_Label_6_short: "Odblokuj ",
    ADD_Label_7: "Dodaj konto ",
    ADD_Label_8: "Password (optional): ",

    /* Generate Wallets */
    GEN_desc: "Jeżeli chcesz wygenerować wiele portfeli możesz to zrobić tu ",
    GEN_Label_1: "Wpisz silne hasło (co najmniej 9 znaków) ",
    GEN_Placeholder_1: "NIE zapomnij tego hasła! ",
    GEN_SuccessMsg: "Sukces! Twój portfel został wygenerowany. ",
    GEN_Label_2:
        "Zapisz Twój plik Keystore lub Klucz Prywatny. Nie zapomnij powyższego hasła. ",
    GEN_Label_3: "Zapisz swój adres. ",
    GEN_Label_4:
        "Opcjonalnie: Wydrukuj swój Portfel Papierowy, lub zachowaj obrazek z kodem QR. ",

    /* Bulk Generate Wallets */
    BULK_Label_1: "Ilość Portfeli do Wygenerowania ",
    BULK_Label_2: "Generuj Portfele ",
    BULK_SuccessMsg: "Sukces! Twoje portfele zostały wygenerowane. ",

    /* Sending Ether and Tokens */
    SEND_addr: "Do Adresu ",
    SEND_amount: "Kwota do Wysłania ",
    SEND_amount_short: "Kwota ",
    SEND_custom: "Niestandardowy Token ",
    SEND_gas: "Paliwo ",
    SEND_TransferTotal: "Wyślij wszystkie środki ",
    SEND_generate: "Wygeneruj Transakcję ",
    SEND_raw: "Surowa Transakcja ",
    SEND_signed: "Podpisana Transakcja ",
    SEND_trans: "Wyślij Transakcję ",
    SENDModal_Title: "Ostrzeżenie! ",
    /* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
    SENDModal_Content_1: "Wysyłasz ",
    SENDModal_Content_2: "do adresu ",
    SENDModal_Content_3: "Jesteś pewien, że chcesz to zrobić? ",
    SENDModal_Content_4:
        "NOTKA: Jeśli wystąpi błąd, najprawdopodobniej musisz doładować ether do Twojego konta, na pokrycie kosztów paliwa do wysłania tokenów. Paliwo jest opłacane w ether. ",
    SENDModal_No: "Nie, zabierz mnie stąd! ",
    SENDModal_Yes: "Tak, jestem pewien! Zatwierdź transakcję. ",

    /* Tokens */
    TOKEN_Addr: "Adres ",
    TOKEN_Symbol: "Symbol Tokenu ",
    TOKEN_Dec: "Miejsc po przecinku ",
    TOKEN_show: "Pokaż Wszystkie Tokeny ",
    TOKEN_hide: "Ukryj Tokeny ",

    /* Send Transaction */
    TRANS_desc: 'Jeśli chcesz wysłać Tokeny, użyj zakładki "Wyślij Tokeny". ',
    TRANS_warning:
        'Jeśli używasz funkcji "Tylko ETH" lub "Tylko ETC" wysyłasz przez kontrakt. Niektóre serwisy mają problemy z rozpoznawaniem tego typu transakcji. Czytaj dalej. ',
    TRANS_advanced: "+Zaawansowane: Dodaj Dane ",
    TRANS_data: "Dane ",
    TRANS_sendInfo:
        "Standardowa transakcja, zużywająca 21000 paliwa, będzie kosztować 0.000441 ETH. My używamy ceny paliwa nieco-powyżej-minimum, co odpowiada 0.000000021 ETH aby upewnić się, że zostanie szybko zatwierdzona. Nie pobieramy żadnych dodatkowych opłat. ",
    TRANS_gas: "Limit Paliwa ",

    /* Send Transaction Modals */
    TRANSModal_Title: 'Transakcje "Tylko ETH" i "Tylko ETC" ',
    TRANSModal_Content_0:
        "Informacje na temat różnych transakcji i różnych odbiorców: ",
    TRANSModal_Content_1:
        "**ETH (Standardowa Transakcja): ** generuje standardową transakcję bezpośrednio z jednego adresu do drugiego. Domyślnie spala 21000 paliwa. Prawdopodobnie transakcja ETH zostanie powielona na łańcuchu ETC jeżeli posiadasz obie waluty na tym samym adresie. ",
    TRANSModal_Content_2:
        "**Tylko ETH: ** wysyła przez [Kontrakt zapobiegający powielaniu Timon'a Rapp'a (zalecany przez VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/), który wysyła środki tylko na łańcuchu **ETH**. ",
    TRANSModal_Content_3:
        "**Tylko ETC: ** wysyła przez [Kontrakt zapobiegający powielaniu Timon'a Rapp'a (zalecany przez VB)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/), który wysyła środki tylko na łańcuchu **ETC**. ",
    TRANSModal_Content_4:
        '**Coinbase & ShapeShift: ** używaj tylko Transakcji Standardowych. Jeżeli wyślesz z opcją "Tylko...", będziesz musiał skontaktować się z pomocą techniczną usługodawcy w celu manualnego zatwierdzenia środków lub ich zwrotu. Możesz też użyć [narzędzia Shapeshift](https://split.shapeshift.io/)  do rozdzielenia środków. ',
    TRANSModal_Content_5:
        "**Kraken i Poloniex:** nie są znane żadne utrudnienia. Używaj dowolnie. ",
    TRANSModal_Yes: "Super, już rozumiem. ",
    TRANSModal_No: "O boziu, strasznie zakręcone. Pomóżcie. ",

    /* Offline Transaction */
    OFFLINE_Title: "Generuj i Wyślij Transakcję Offline ",
    OFFLINE_Desc:
        "Wygenerowanie transakcji może zostać wykonane w trzech krokach. Kroki 1 i 3 wykonasz na komputerze z internetem, krok 2 na komputerze bez połączenia z internetem. To gwarantuje, że Twoje klucze prywatne nigdy nie mają styczności z urządzeniem podłączonym do internetu. ",
    OFFLLINE_Step1_Title: "Krok 1: Wygeneruj Informacje (Komputer Online) ",
    OFFLINE_Step1_Button: "Wygeneruj Informacje ",
    OFFLINE_Step1_Label_1: "Od Adresu ",
    OFFLINE_Step1_Label_2:
        "Notka: To jest adres NADAWCY, czyli adres Twojego konta, które starasz sie odizolować od internetu. Wyróżnik jest generowany dla tego konta. ",
    OFFLINE_Step2_Title: "Krok 2: Wygeneruj transakcję (Komputer Offline) ",
    OFFLINE_Step2_Label_1: "Do Adresu ",
    OFFLINE_Step2_Label_2: "Wartość / Kwota do Wysłania ",
    OFFLINE_Step2_Label_3: "Cena Paliwa ",
    OFFLINE_Step2_Label_3b:
        "To było wyświetlone w Kroku 1 na Komputerze Online. ",
    OFFLINE_Step2_Label_4: "Limit Paliwa ",
    OFFLINE_Step2_Label_4b:
        "Domyślny limit paliwa to 21000. Kiedy wysyłasz kontrakt lub załączasz dane ta wartość może być inna, nie zużyte paliwo zostanie zwrócone na Twoje konto. ",
    OFFLINE_Step2_Label_5: "Wyróżnik ",
    OFFLINE_Step2_Label_5b:
        "To było wyświetlone w Kroku 1 na Komputerze Online. ",
    OFFLINE_Step2_Label_6: "Dane ",
    OFFLINE_Step2_Label_6b:
        "Wartość opcjonalna. Dane są zazwyczaj załączane jeżeli wysyłasz transakcje do kontraktów. ",
    OFFLINE_Step2_Label_7: "Wpisz / Wybierz Twój Klucz Prywatny / plik JSON. ",
    OFFLINE_Step3_Title:
        "Krok 3: Wyślij / Opublikuj Transakcję (Komputer Online) ",
    OFFLINE_Step3_Label_1:
        'Wklej tu podpisaną transakcję z Kroku 2 i kliknij przycisk "WYŚLIJ TRANSAKCJĘ". ',

    /* Sign Message */
    MSG_message: "Wiadomość ",
    MSG_date: "Data ",
    MSG_signature: "Podpis ",
    MSG_verify: "Zweryfikuj Wiadomość ",
    MSG_info1:
        "Załącz aktualną datę, aby podpis nie mógł być ponownie wykorzystany w innym czasie. ",
    MSG_info2:
        "Załącz swój nick i napisz gdzie go wykorzystujesz, aby ktoś inny nie mógł powielić tej wiadomości. ",
    MSG_info3:
        "Opisz powód zamieszczenia wiadomości, aby nikt inny nie mógł jej wykorzystać w innym celu. ",

    /* Deploy Contracts */
    DEP_generate: "Wygeneruj Kod Bajtowy ",
    DEP_generated: "Wygenerowany Kod Bajtowy ",
    DEP_signtx: "Podpisz Transakcję ",
    DEP_interface: "Wygeneruj Interfejs ",

    /* My Wallet */
    MYWAL_Nick: "Nazwa Portfela ",
    MYWAL_Address: "Adres Portfela ",
    MYWAL_Bal: "Środki ",
    MYWAL_Edit: "Edytuj ",
    MYWAL_View: "Podgląd ",
    MYWAL_Remove: "Usuń ",
    MYWAL_RemoveWal: "Usuń Portfel: ",
    MYWAL_WatchOnly: "Twoje Konta Tylko-do-Podglądu ",
    MYWAL_Viewing: "Podgląd Portfela ",
    MYWAL_Hide: "Ukryj Dane Portfela ",
    MYWAL_Edit_2: "Edytuj Portfel ",
    MYWAL_Name: "Nazwa Portfela ",
    MYWAL_Content_1: "Uwaga! Zaraz usuniesz swój portfel ",
    MYWAL_Content_2:
        "Upewnij się, że **zapisałeś klucz prywatny/plik Keystore i hasło** powiązane z tym portfelem zanim je usuniesz. ",
    MYWAL_Content_3:
        "Jeśli będziesz chciał w przyszłości używać ten portfel ze swoim MyEtherWallet CX, będziesz musiał go ponownie dodać używając klucza prywatnego/pliku JSON i hasła. ",

    /* View Wallet Details */
    VIEWWALLET_Subtitle:
        "Ta zakładka pozwoli Ci na odczyt kluczy prywatnych, pobranie kopii portfeli oraz wydrukowanie portfeli papierowych. Pobrane za jej pomocą portfele możesz [zaimportować do Geth/Mist](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Jeśli chcesz sprawdzić stan Twojego konta, zalecamy użyć eksploratora bloków np. [gastracker.io](https://gastracker.io/) (ETC) / [etherscan.io](https://etherscan.io/) (ETH). ",
    VIEWWALLET_Subtitle_Short:
        "Ta zakładka pozwala Ci na pobranie różnych typów kluczy prywatnych oraz ponowne wydrukowanie portfeli papierowych. ",
    VIEWWALLET_SuccessMsg: "Sukces! Oto dane twojego portfela. ",
    VIEWWALLET_ShowPrivKey: "(show)",
    VIEWWALLET_HidePrivKey: "(hide)",

    /* Mnemonic */
    MNEM_1: "Wybierz adres, którego chcesz użyć. ",
    MNEM_2:
        "Jedna grupa słów mnemonicznych ma dostęp do wielu portfeli / adresów. Wybierz adres, do którego chcesz uzyskać dostęp tym razem. ",
    MNEM_more: "Więcej Adresów ",
    MNEM_prev: "Poprzednie Adresy ",

    /* Hardware wallets */
    x_Ledger: "Ledger Wallet ",
    ADD_Ledger_1: "Podłącz swój Ledger Wallet ",
    ADD_Ledger_2: "Otwórz aplikację Ethereum (lub aplikację kontraktu) ",
    ADD_Ledger_3:
        "Sprawdź czy opcja Obsługa Przeglądarki jest włączona w Ustawieniach ",
    ADD_Ledger_4:
        "Jeżeli w ustawieniach brak jest opcji Obsługa Przeglądarki, sprawdź czy masz [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ",
    ADD_Ledger_0a:
        "Otwórz MyEtherWallet ponownie na bezpiecznym połączeniu (SSL) ",
    ADD_Ledger_0b:
        "Otwórz MyEtherWallet w [Chrome](https://www.google.com/chrome/browser/desktop/) lub [Opera](https://www.opera.com/) ",
    ADD_Ledger_scan: "Połącz z Ledger Wallet ",

    ADD_MetaMask: "Connect to MetaMask ",

    x_Trezor: "TREZOR ",
    ADD_Trezor_scan: "Połącz z TREZOR ",
    ADD_Trezor_select: "To jest ziarno (seed) TREZOR",
    x_DigitalBitbox: "Digital Bitbox ",
    ADD_DigitalBitbox_0a:
        "Otwórz MyEtherWallet ponownie na bezpiecznym połączeniu (SSL) ",
    ADD_DigitalBitbox_0b:
        "Otwórz MyEtherWallet w [Chrome](https://www.google.com/chrome/browser/desktop/) lub [Opera](https://www.opera.com/) ",
    ADD_DigitalBitbox_scan: "Połącz z Digital Bitbox ",

    /* Chrome Extension */
    CX_error_1:
        'Nie posiadasz żadnych zapisanych portfeli. ["Dodaj Portfel"](/cx-wallet.html#add-wallet)! ',
    CX_quicksend: "Wyślij ",

    /* Node Switcher */
    NODE_Title: "Zmień Domyślny Węzeł",
    NODE_Subtitle: "Aby połączyć się z lokalnym węzłem...",
    NODE_Warning:
        "Twój węzeł musi obsługiwać HTTPS, aby można było się połączyć z nim przez MyEtherWallet.com. Możesz pobrać [repozytorium MyEtherWallet](https://github.com/kvhnuke/etherwallet/releases/latest) i uruchomić lokalnie aby połączyć się z dowolnym węzłem. Możesz też pobrać darmowy certyfikat SSL przez [LetsEncrypt](https://letsencrypt.org/)",
    NODE_Name: "Nazwa Węzła",
    NODE_Port: "Port Węzła",
    NODE_CTA: "Zapisz i Używaj Węzła",

    /* Contracts */
    CONTRACT_Title: "Adres Kontraktu ",
    CONTRACT_Title_2: "Wybierz Istniejący Kontrakt ",
    CONTRACT_Json: "Interfejs ABI / JSON ",
    CONTRACT_Interact_Title: "Odczytaj / Zapisz Kontrakt ",
    CONTRACT_Interact_CTA: "Wybierz funkcję ",
    CONTRACT_ByteCode: "Kod Bajtowy ",
    CONTRACT_Read: "ODCZYTAJ ",
    CONTRACT_Write: "ZAPISZ ",

    /* Swap / Exchange */
    SWAP_rates: "Aktualne Kursy ",
    SWAP_init_1: "Chcę wymienić ",
    SWAP_init_2: " na ", // "I want to swap my X ETH for X BTC"
    SWAP_init_CTA: "Zatwierdź! ", // or "Continue"
    SWAP_information: "Dane transakcji ",
    SWAP_send_amt: "Kwota zlecenia ",
    SWAP_rec_amt: "Otrzymasz ",
    SWAP_your_rate: "Kurs wymiany ",
    SWAP_rec_add: "Twój Adres Odbiorczy ",
    SWAP_start_CTA: "Rozpocznij Wymianę ",
    SWAP_ref_num: "Twój numer referencyjny ",
    SWAP_time: "Pozostały czas na wysyłkę ",
    SWAP_elapsed: "Time elapsed since sent ",
    SWAP_progress_1: "Zlecenie Rozpoczęte ",
    SWAP_progress_2: "Oczekiwanie na Twoje ", // Waiting for your BTC...
    SWAP_progress_3: "Otrzymano! ", // ETH Received!
    SWAP_progress_4: "Wysyłanie Twoich {{orderResult.output.currency}} ",
    SWAP_progress_5: "Zlecenie Zakończone ",
    SWAP_order_CTA: "Wyślij ", // Please send 1 ETH...
    SWAP_unlock:
        "Odblokuj Twój portfel, aby wysłać ETH lub Tokeny wprost z tej strony. ",

    /* Error Messages */
    ERROR_0: "Wprowadź prawidłową kwotę. ",
    ERROR_1:
        "Twoje hasło musi zawierać co najmniej 9 znaków. Upewnij się, że jest to silne hasło. ",
    ERROR_2: "Przykro nam! Nie rozpoznajemy tego formatu pliku portfela. ",
    ERROR_3: "To nie jest prawidłowy plik portfela. ",
    ERROR_4:
        "Ta jednostka nie istnieje, użyj jednej z następujących jednostek ",
    ERROR_5: "Błędny adres. ",
    ERROR_6: "Błędne hasło. ",
    ERROR_7: "Błędna wartość. (Must be integer. Try 0-18.) ", // 7
    ERROR_8: "Błędny limit paliwa. (Must be integer. Try 21000-4000000.) ", // 8
    ERROR_9: "Błędne dane. (Must be hex.) ", // 9
    ERROR_10:
        "Błędna ilość paliwa. (Must be integer. Try 20 GWEI / 20000000000 WEI.) ",
    ERROR_11: "Błędny wyróżnik. (Must be integer.) ", // 11
    ERROR_12: "Błąd podpisu transakcji. ",
    ERROR_13: "Portfel z tą nazwą już istnieje. ",
    ERROR_14: "Nie znaleziono portfela. ",
    ERROR_15:
        "Wygląda, że propozycja z tym ID jeszcze nie istnieje, lub wystąpił błąd odczytu tej propozycji. ",
    ERROR_16:
        "Portfel z tym adresem już istnieje w konfiguracji. Sprawdź zakładkę portfeli. ",
    ERROR_17:
        "Niewystarczające środki. Konto, z którego wysyłasz transakcję nie posiada wystarczających funduszy. Musisz mieć **0.01 ETH** na koncie, aby pokryć koszty paliwa. Doładuj konto i spróbuj ponownie. ",
    ERROR_18:
        "Całe paliwo było by zużyte w tej transakcji. Oznacza to, że głosowałeś już w tej propozycji albo minął termin głosowania. ",
    ERROR_19: "Nieprawidłowy symbol ",
    ERROR_20:
        "nie jest prawidłowym tokenem ERC-20. Jeśli inne tokeny się ładują, sporóbuj usunąć i dodać ponownie ten token. ",
    ERROR_21:
        "Nie można określić ilości paliwa. Brak wystarczających środków na koncie lub adres docelowego kontraktu zwróciłby błąd. Możesz ręcznie ustawić paliwo przed kontynuacją. Opis błędu po wysłaniu transakcji może dostarczyć więcej informacji. ",
    ERROR_22: "Wpisz poprawną nazwę węzła ",
    ERROR_23:
        "Wpisz poprawny adres URL. Jeśli łączysz się przez HTTPS, twój węzeł musi być za HTTPS ",
    ERROR_24: "Wpisz prawidłowy port ",
    ERROR_25: "Wpisz poprawny ID łańcucha (chain ID) ",
    ERROR_26: "Wpisz poprawny ABI ABI ",
    ERROR_27: "Minimalna Kwota: 0.01. Maksymalna Kwota: ",
    ERROR_28:
        "**Potrzebujesz plik Keystore i hasło, lub Klucz Prywatny** aby uzyskać dostęp do tego portfela w przyszłości. Wykonaj zewnętrzną kopię bezpieczeństwa! Nie ma możliwości odzyskania portfela jeżeli go nie zapiszesz. Wejdź na [stronę pomocy](https://www.myetherwallet.com/#help) po instrukcje. ",
    ERROR_29: "Wpisz poprawny login i hasło ",
    ERROR_30: "Wpisz poprawną nazwę ENS ",
    ERROR_31: "Błędna tajna fraza (secret phrase) ",
    ERROR_32:
        "Nie można połączyć z węzłem.  Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.", // 32
    ERROR_33:
        "The wallet you have unlocked does not match the owner's address. ", // 33
    ERROR_34:
        "The name you are attempting to reveal does not match the name you have entered. ", // 34
    ERROR_35:
        'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35
    ERROR_36: "Enter valid TX hash", // 36
    ERROR_37: "Enter valid hex string (0-9, a-f)", // 37

    SUCCESS_1: "Prawidłowy adres ",
    SUCCESS_2: "Portfel został odszyfrowany ",
    SUCCESS_3:
        "Your TX has been broadcast to the network. It is waiting to be mined & confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify & Check buttons below to see. TX Hash:   ", //'Transakcja zgłoszona. TX Hash ',
    SUCCESS_4: "Twój portfel został dodany ",
    SUCCESS_5: "Wybrany plik ",
    SUCCESS_6: "Uzyskano połączenie: ",
    SUCCESS_7: "Zweryfikowano Sygnaturę Wiadomości",
    WARN_Send_Link:
        "Znalazłeś się tu przez odnośnik, który zawiera wstępnie uzupełniony adres, kwotę, paliwo lub dane transakcji. Możesz zmienić dowolne parametry transakcji zanim ją zatwierdzisz. Odblokuj portfel aby kontynuować. ",

    /* Geth Error Messages */
    GETH_InvalidSender: "Nieprawidłowy nadawca ",
    GETH_Nonce: "Wyróżnik transakcji za niski ",
    GETH_Cheap: "Cena paliwa poniżej akceptacji ",
    GETH_Balance: "Niewystarczająca ilość środków na koncie ",
    GETH_NonExistentAccount:
        "Konto nie istnieje lub niewystarczająca ilość środków ",
    GETH_InsufficientFunds:
        "Niewystarczająca ilość środków na paliwo * cena + kwota ",
    GETH_IntrinsicGas: "Paliwo poniżej ilości obowiązkowej ",
    GETH_GasLimit: "Przekroczono limit paliwa na blok ",
    GETH_NegativeValue: "Ujemna wartość ",

    /* Parity Error Messages */
    PARITY_AlreadyImported:
        "Transakcja z takim samym hash'em została już zaimportowana.",
    PARITY_Old:
        "Wyróżnik transakcji za niski. Spróbuj zwiększyć wartość wyróżnika.",
    PARITY_TooCheapToReplace:
        "Za niska opłata transakcyjna. Inna transakcja z tym samym wyróżnikiem znajduje się już w kolejce. Spróbuj dołączyć wyższą opłatę lub zwiększ wyróżnik transakcji.",
    PARITY_LimitReached:
        "Zbyt wiele transakcji w kolejce. Twoja transakcja została odrzucona ze względu na limity. Spróbuj dołączyć wyższą opłatę transakcyjną.",
    PARITY_InsufficientGasPrice:
        "Za niska opłata transakcyjna. Opłata jest niższa niż minimalnie wymaga węzeł (minimum: {}, dołączono: {}). Spróbuj dołączyć wyższą opłatę transakcyjną.",
    PARITY_InsufficientBalance:
        "Niewystarczające środki. Konto, z którego wysyłasz transakcję nie posiada wystarczających funduszy. Wymaga: {}, otrzymano: {}.",
    PARITY_GasLimitExceeded:
        "Koszt transakcji przekracza bieżący limit paliwa. Limit: {}, otrzymano: {}. Spróbuj zmniejszyć ilość paliwa.",
    PARITY_InvalidGasLimit: "Dostarczone paliwo wykracza ponad limit.",

    /* Tranlsation Info */
    translate_version: "3.0 (0.3) ",
    Translator_Desc: "Podziękowania tłumaczom ",
    TranslatorName_1:
        "[egzi](?to=0xef39C3C51615B6e52e7D5B743BeaecdDcA822386&value=1.0#send-transaction) ",
    TranslatorAddr_1: "0xef39C3C51615B6e52e7D5B743BeaecdDcA822386 ", // donation address 0x1234
    /* Translator 1             : Insert Comments Here */
    TranslatorName_2: "",
    TranslatorAddr_2: "",
    /* Translator 2             : Insert Comments Here */
    TranslatorName_3: "",
    TranslatorAddr_3: "",
    /* Translator 3             : Insert Comments Here */
    TranslatorName_4: "",
    TranslatorAddr_4: "",
    /* Translator 4             : Insert Comments Here */
    TranslatorName_5: "",
    TranslatorAddr_5: "",
    /* Translator 5             : Insert Comments Here */

    /* Help - Nothing after this point has to be translated. If you feel like being extra helpful, go for it. */
    HELP_Warning:
        "Jeśli wygenerowałeś portfel -lub- ściągnąłeś repozytorium przed **31.12.2015**, sprawdź swoje portfele i ściągnij nową wersję repozytorium. Kliknij po szczegóły. ",
    HELP_Desc:
        "Widzisz jakieś braki? Masz inne pytania? [Skontaktuj się z nami (tylko angielski)](mailto:support@myetherwallet.com), postaramy się odpowiedzieć, pomoże to nam również uaktualnić stronę aby w przyszłości była bardziej pomocna dla innych! ",
    HELP_Remind_Title: "W ramach uściślenia ",
    HELP_Remind_Desc_1:
        "**Ethereum, MyEtherWallet.com i MyEtherWallet CX, jak również niektóre bazowe biblioteki Javascript, których używamy, są wciąż aktywnie rozwijane.** Pomimo tego, że dokładnie testujemy nasze oprogramowanie, pomimo że dziesiątki tysięcy portfeli zostało z powodzeniem wygenerowane przez użytkowników na całym świecie, zawsze istnieje pewne znikome prawdopodobieństwo, że nastąpi coś nieoczekiwanego, co spowoduje utratę Twoich środków. Nie inwestuj więc więcej niż jesteś gotów stracić i bądź ostrożny. Gdyby coś takiego się wydarzyło, będzie nam przykro, ale **nie weźmiemy za to odpowiedzialności**. ",
    HELP_Remind_Desc_2:
        'MyEtherWallet.com i MyEtherWallet CX nie są "portfelami internetowymi". Nie tworzysz kont internetowych i nie przekazujesz nam Twoich środków na przechowanie. W żadnym momencie Twoje klucze prywatne nie opuszczają Twojej przeglądarki/komputera. My jedynie ułatwiamy Ci tworzenie, zapisywanie, dostęp do twoich danych i interakcję z siecią Ethereum. ',
    HELP_Remind_Desc_3:
        "Jeśli utracisz swój klucz prywatny lub zapomnisz hasło, nie będzie możliwości odzyskania dostępu do Twojego portfela oraz środków tam zgromadzonych. Wykonaj kopie bezpieczeństwa i przechowuj je w wielu fizycznie niezależnych miejscach, nie tylko na Twoim komputerze! ",

    HELP_0_Title: "0) Jestem zielony. Od czego mam zacząć? ",
    HELP_0_Desc_1:
        "MyEtherWallet daje Ci możliwość generowania nowych portfeli abyś mógł przechowywać własne środki samodzielnie, nie na portalu wymiany walut. Ten proces odbywa się w całości na Twoim komputerze, nie na naszych serwerach. Z tego powodu, gdy generujesz nowy portfel, **to Ty jesteś odpowiedzialny za jego bezpieczne przechowywanie**. ",
    HELP_0_Desc_2: "Wygeneruj nowy portfel. ",
    HELP_0_Desc_3: "Wykonaj kopię bezpieczeństwa. ",
    HELP_0_Desc_4:
        "Zweryfikuj, że masz dostęp do właśnie stworzonego portfela oraz że prawidłowo zachowałeś wszystkie niezbędne informacje. ",
    HELP_0_Desc_5: "Prześlij środki do nowo utworzonego portfela. ",

    HELP_1_Title: "1) Jak mam utworzyć nowy portfel? ",
    HELP_1_Desc_1: 'Przejdź na zakładkę "Wygeneruj Portfel". ',
    HELP_1_Desc_2:
        'Przejdź na zakładkę "Dodaj Portfel" i zaznacz "Generuj Nowy Portfel" ',
    HELP_1_Desc_3:
        "Wpisz silne hasło. Jeśli uważasz, że mógłbyś je zapomnieć, zapisz je w jakimś bezpiecznym miejscu. Będziesz potrzebować tego hasła aby wysyłać transakcje. ",
    HELP_1_Desc_4: 'Kliknij "GENERUJ". ',
    HELP_1_Desc_5: "Twój nowy portfel został właśnie wygenerowany. ",

    HELP_2a_Title: "Jak mam zapisać/wykonać kopię mojego portfela? ",
    HELP_2a_Desc_1:
        "Zawsze powinieneś wykonać zewnętrzną kopię bezpieczeństwa w wielu fizycznie niezależnych lokalizacjach - na przykład na nośniku USB i/lub kartce papieru. ",
    HELP_2a_Desc_2:
        "Zapisz swój adres. Możesz zachować go dla siebie lub udostępnić go innym. Inne osoby znając ten adres mogą Ci na niego wysyłać środki. ",
    HELP_2a_Desc_3:
        "Zachowaj klucz prywatny w przynajmniej jednym formacie. Nie udostępniaj go nikomu. Klucz prywatny będzie Ci potrzebny, jeśli będziesz chciał uzyskać dostęp do Twojego portfela i wysyłać z niego środki! Istnieją 3 formaty zapisu kluczy prywatnych: ",
    HELP_2a_Desc_4:
        "Umieść adres portfela, klucz prywatny i PDF z papierową wersją portfela w jednym folderze. Zapisz ten folder na komputerze i na nośniku USB. ",
    HELP_2a_Desc_5:
        "Wydrukuj portfel jeżeli posiadasz drukarkę. Jeżeli nie, zapisz klucz prywatny i adres na kartce papieru. Umieść go w bezpiecznym miejscu oddzielnie od komputera i nośnika USB. ",
    HELP_2a_Desc_6:
        "Pamiętaj, że musisz się zabezpieczyć przed utratą kluczy i hasła z powodu zagubienia, uszkodzenia lub zniszczenia dysku twardego, nośnika USB lub kartki z zapisanymi danymi. Przewiduj również możliwość wystąpienia katastrof obejmujących większe obszary (pożar, powódź). ",

    HELP_2b_Title:
        "2b) Jak mogę utworzyć portfel w 100% odizolowany od sieci globalnej (Cold Wallet) wykorzystując MyEtherWallet? ",
    HELP_2b_Desc_1:
        "Wejdź na nasze konto github: [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest). ",
    HELP_2b_Desc_2: "Pobierz `etherwallet-vX.X.X.X.zip`. ",
    HELP_2b_Desc_3: "Przenieś paczkę zip na odizolowany system. ",
    HELP_2b_Desc_4: "Rozpakuj paczkę i kliknij 2-krotnie `index.html`. ",
    HELP_2b_Desc_5: "Wygeneruj portfel przy użyciu silnego hasła. ",
    HELP_2b_Desc_6:
        "Zapisz adres. Zapisz klucz prywatny. Zapisz hasło jeżeli nie jesteś w stanie go zapamiętać po wsze czasy. ",
    HELP_2b_Desc_7:
        "Zapisz kopie zapasowe w formie papierowej lub na nośniku USB w wielu fizycznie odseparowanych lokalizacjach. ",
    HELP_2b_Desc_8:
        'Przejdź na zakładkę "Wyświetl informacje o portfelu" wprowadź klucz prywatny / hasło aby upewnić się, że są poprawne i odczytaj swój portfel. Sprawdź czy adres, który zapisałeś zgadza się z wyświetlonym. ',

    HELP_3_Title: "3) Jak zweryfikować czy mam dostęp do portfela? ",
    HELP_3_Desc_1:
        "**Zanim wyślesz jakieś środki do Twojego nowego portfela** powinieneś się upewnić, że masz do niego dostęp. ",
    HELP_3_Desc_2: 'Przejdź na zakładkę "Wyświetl informacje o portfelu". ',
    HELP_3_Desc_3:
        'Przejdź na zakładkę "Wyświetl informacje o portfelu" na stronie MyEtherWallet.com. ',
    HELP_3_Desc_4:
        "Wybierz Twój plik portfela -lub- klucz prywatny i odblokuj portfel. ",
    HELP_3_Desc_5:
        "Jeżeli portfel jest szyfrowany automatycznie wyświetli się okienko tekstowe. Wpisz w nim hasło. ",
    HELP_3_Desc_6: 'Kliknij przycisk "Odblokuj Portfel". ',
    HELP_3_Desc_7:
        "Informacje o Twoim portfelu powinny się wyświetlić. Odszukaj adres Twojego portfela obok okrągłej kolorowej ikonki. Ta ikona to wizualna reprezentacja adresu Twojego portfela. Upewnij się, że adres odpowiada adresowi zapisanemu w dokumencie tekstowym i na portfelu papierowym. ",
    HELP_3_Desc_8:
        "Jeśli planujesz trzymać w portfelu jakieś większe sumy, zalecamy w pierwszej kolejności wykonanie kilku testowych transakcji o mniejszej wartości. Prześlij do Twojego nowego portfela 0.001 ether, wejdź do portfela, prześlij te 0.001 ether na inny adres i upewnij się, że wszystko przebiegło jak należy. ",

    HELP_4_Title: "4) Jak wysłać Ether z jednego portfela na inny? ",
    HELP_4_Desc_1:
        "Jeżeli planujesz przesłać większą sumę środków, najpierw powinieneś wysłać mniejszą kwotę, aby upewnić się, że wszystko przebiegło zgodnie z planem. ",
    HELP_4_Desc_2: 'Przejdź na zakładkę "Wyślij Ether". ',
    HELP_4_Desc_3:
        "Wybierz Twój plik portfela -lub- wpisz klucz prywatny i odblokuj portfel. ",
    HELP_4_Desc_4:
        "Jeżeli portfel jest szyfrowany, automatycznie wyświetli się okienko tekstowe. Wpisz w nim hasło. ",
    HELP_4_Desc_5: 'Kliknij przycisk "Odblokuj Portfel". ',
    HELP_4_Desc_6:
        'Wpisz adres, na który chcesz przesłać środki w pole "Do adresu:". ',
    HELP_4_Desc_7:
        'Wpisz kwotę do wysyłania. Możesz też kliknąć "Wyślij wszystkie dostępne środki", jeśli chcesz przesłać całą dostępną kwotę. ',
    HELP_4_Desc_9: 'Kliknij "Wygeneruj i Podpisz Transakcję". ',
    HELP_4_Desc_10:
        "Pojawi się kilka kolejnych pól. Są to dane transakcji wygenerowane przez Twoją przeglądarkę. ",
    HELP_4_Desc_11:
        'Kliknij niebieski przycisk "Wyślij Transakcję" na dole strony. ',
    HELP_4_Desc_12:
        'Pojawi się okienko z potwierdzeniem. Zweryfikuj czy kwota i adres, na który wysyłasz są prawidłowe. Następnie kliknij "Tak, jestem pewien! Zatwierdź Transakcję.". ',
    HELP_4_Desc_13:
        "Transakcja zostanie wysłana i zostanie wyświetlony TX Hash. Możesz kliknąć TX Hash, aby zobaczyć tą transakcję w eksploratorze bloków. ",

    HELP_4CX_Title: "4)Jak wysłać Ether używając MyEtherWallet CX? ",
    HELP_4CX_Desc_1:
        'Najpierw musisz dodać portfel. Po dodaniu portfela masz 2 możliwości do wyboru: funkcja "Wyślij" z ikony Rozszerzenia Chrome lub zakładka "Wyślij Ether" ze strony "Moje Portfele". ',
    HELP_4CX_Desc_2: "Wyślij: ",
    HELP_4CX_Desc_3: "Kliknij ikonę Rozszerzenia Chrome. ",
    HELP_4CX_Desc_4: 'Kliknij przycisk "Wyślij". ',
    HELP_4CX_Desc_5: "Wybierz portfel, z którego chcesz wysłać środki. ",
    HELP_4CX_Desc_6:
        'Wpisz adres, do którego chcesz wysłać środki w pole "Do Adresu:". ',
    HELP_4CX_Desc_7:
        'Wpisz kwotę do wysłania. Możesz również kliknąć "Wyślij wszystkie dostępne środki" jeśli chcesz przesłać całą dostępną kwotę. ',
    HELP_4CX_Desc_8: 'Kliknij "Wyślij Transakcję". ',
    HELP_4CX_Desc_9:
        "Zweryfikuj czy kwota i adres na który wysyłasz są prawidłowe. ",
    HELP_4CX_Desc_10: "Wpisz hasło do tego portfela. ",
    HELP_4CX_Desc_11: 'Kliknij "Wyślij Transakcję." ',
    HELP_4CX_Desc_12: 'Używając zakładki "Wyślij Ether" ',

    HELP_5_Title: "5) Jak uruchomić MyEtherWallet offline/lokalnie? ",
    HELP_5_Desc_1:
        "Możesz uruchomić MyEtherWallet lokalnie ze swojego komputera zamiast z serwerów GitHub'a. Możesz wygenerować portfel całkowicie offline'owo i wysyłać transakcje z zakładki \"Wyślij offline\". ",
    HELP_5_Desc_7: "MyEtherWallet działa teraz w całości na Twoim komputerze. ",
    HELP_5_Desc_8:
        "W razie gdybyś nie wiedział, musisz zachować cały folder, aby strona działała prawidłowo, nie tylko `index.html`. Nie ruszaj i nie przenoś nic innego w folderze. Jeżeli zachowujesz kopie repozytorium MyEtherWallet na przyszłość, zalecamy przechowywać je w formie spakowanego pliku ZIP, aby mieć pewność, że jego zawartość się nie zmieniła. ",
    HELP_5_Desc_9:
        "Ponieważ ciągle aktualizujemy MyEtherWallet, zalecamy co jakiś czas aktualizować  zapisaną wersję repozytorium. ",

    HELP_5CX_Title:
        "5) Jak mogę zainstalować to rozszerzenie z repozytorium, zamiast z Chrome Web Store? ",
    HELP_5CX_Desc_2: "Pobierz `chrome-extension-vX.X.X.X.zip`. ",
    HELP_5CX_Desc_3:
        "Wejdź w ustawienia przeglądarki Google Chrome (w menu w górnym prawym rogu). ",
    HELP_5CX_Desc_4: 'Kliknij "Rozszerzenia" po lewej. ',
    HELP_5CX_Desc_5: 'Kliknij "Tryb programisty" na górze strony. ',
    HELP_5CX_Desc_6: 'Kliknij przycisk "Wczytaj rozszerzenie bez pakietu...". ',
    HELP_5CX_Desc_7:
        'Nawiguj do rozpakowanego folderu, który ściągnąłeś wcześniej. Kliknij "OK". ',
    HELP_5CX_Desc_8:
        "Rozszerzenie powinno się pojawić na liście i w pasku rozszerzeń przeglądarki Chrome. ",

    HELP_7_Title: "7) Jak się wysyła Tokeny i jak tworzyć własne Tokeny? ",
    HELP_7_Desc_0:
        "[Ethplorer.io](https://ethplorer.io/) jest świetnym miejscem na przeglądanie tokenów oraz sprawdzenia ich ilości miejsc po przecinku. ",
    HELP_7_Desc_1: 'Przejdź na zakładkę "Wyślij Ether i Tokeny". ',
    HELP_7_Desc_2: "Odblokuj portfel. ",
    HELP_7_Desc_3:
        'Wpisz adres, na który chcesz je przesłać w pole "Do Adresu:". ',
    HELP_7_Desc_4: "Wpisz wartość jaką chcesz wysłać. ",
    HELP_7_Desc_5: "Wybierz typ tokena, który chcesz wysłać. ",
    HELP_7_Desc_6: "Jeśli nie widzisz danego tokena: ",
    HELP_7_Desc_7: 'Kliknij "Inny". ',
    HELP_7_Desc_8:
        "Wpisz adres, symbol i ilość miejsc po przecinku tokena. Wartości te są podawane przez twórców tokena, są również potrzebne podczas dodawania tokena do obserwowanych w aplikacji Mist. ",
    HELP_7_Desc_9: 'Kliknij "Zapisz". ',
    HELP_7_Desc_10:
        "Możesz teraz wysyłać ten token, jak również odczytać stan konta dla tokenu w kolumnie obok. ",
    HELP_7_Desc_11: 'Kliknij "Generuj Transakcję". ',
    HELP_7_Desc_12:
        "Pojawi się kilka kolejnych pól z danymi transakcji wygenerowanymi przez Twoją przeglądarkę. ",
    HELP_7_Desc_13:
        'Kliknij niebieski przycisk "Wyślij Transakcję", który znajduje się niżej. ',
    HELP_7_Desc_14:
        'Wyskoczy okienko. Zweryfikuj czy kwota i adres na który wysyłasz są prawidłowe. Następnie kliknij "Tak, jestem pewien! Zatwierdź transakcję.". ',
    HELP_7_Desc_15:
        "Transakcja zostanie zatwierdzona. TX Hash zostanie wyświetlone. Możesz kliknąć TX Hash aby zobaczyć status transakcji w eksploratorze. ",

    HELP_8_Title: "8) Co się stanie, jeżeli wasza strona zniknie z sieci? ",
    HELP_8_Desc_1:
        "MyEtherWallet nie jest usługą portfela internetowego. Nie posiadasz loginu i nic nie jest zapisywane na naszych serwerach. To tylko interfejs, który pozwala korzystać z sieci Ethereum. ",
    HELP_8_Desc_2:
        "Jeżeli MyEtherWallet.com zostanie wyłączona, musiałbyś znaleźć inny sposób (jak Ethereum Wallet / Mist) na korzystanie z sieci Ethereum. Nie musiałbyś jednak wypłacić swoich środków z MyEtherWallet, ponieważ one nie znajdują się na MyEtherWallet, a na portfelach, które zostały wygenerowane za pomocą naszej strony. ",
    HELP_8_Desc_3:
        "Możesz w każdej chwili, w bardzo prosty sposób, zaimportować swoje nieszyfrowane klucze prywatne lub szyfrowane pliki w formacie Geth/Mist wprost do geth / Ethereum Wallet / Mist. Zobacz pytanie 12 poniżej. ",
    HELP_8_Desc_4:
        "W dodatku prawdopodobieństwo zamknięcia przez nas strony MyEtherWallet.com jest bliskie zeru. Koszty utrzymania strony są prawie żadne, ponieważ nie przechowujmy żadnych informacji. Jeśli nawet strona zostanie zamknięta, jest ona również i zawsze będzie publicznie dostępna na [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). Możesz ściągnąć paczkę ZIP i uruchomić MyEtherWallet lokalnie na własnym komputerze. ",

    HELP_8CX_Title: "8) Co się stanie jeżeli MyEtherWallet CX zniknie? ",
    HELP_8CX_Desc_1:
        "Po pierwsze, wszystkie dane są zapisane na Twoim komputerze, nie na naszych serwerach. Wiem, że może Ci się to wydawać dziwne, ale kiedy patrzysz na Rozszerzenie Chrome, NIE patrzysz na coś zapisanego gdzieś na naszych serwerach - wszystko to jest na Twoim własnym komputerze. ",
    HELP_8CX_Desc_2:
        "Z tego powodu, jest **niezmiernie ważnym** aby wykonywać kopie bezpieczeństwa wszystkich nowych portfeli wygenerowanych za pomocą MyEtherWallet CX. W ten sposób, jeżeli cokolwiek stanie się MyEtherWallet CX lub Twojemu komputerowi, wciąż będziesz miał wszelkie niezbędne informacje potrzebne aby odzyskać dostęp do Twoich portfeli. Zobacz punkt 2a aby dowiedzieć się jak wykonać kopie bezpieczeństwa. ",
    HELP_8CX_Desc_3:
        "Jeżeli z jakiegoś powodu MyEtherWallet CX zniknie z Chrome Store, możesz wciąż znaleźć kod źródłowy na Github'ie i załadować manualnie do Chrome. Zobacz pkt. 5 powyżej. ",

    HELP_9_Title: '9) Czy zakładka "Wyślij Ether" działa offline? ',
    HELP_9_Desc_1:
        'Nie. Potrzebuje dostępu do internetu w celu pobrania aktualnej ceny paliwa, wyróżnika dla konta, oraz rozgłoszenia transakcji (wysłania). Jednakże wysyłana jest jedynie podpisana transakcja, nic więcej. Twój klucz prywatny w żadnym momencie nie opuszcza Twojego komputera. Teraz zapewniamy również funkcję "Wyślij Offline", która umożliwia przechowywanie kluczy prywatnych na komputerze, który fizycznie jest odizolowany od sieci zewnętrznej. ',

    HELP_10_Title: "10) Jak wykonać transakcję offline (Cold Wallet)? ",
    HELP_10_Desc_1:
        'Przejdź na zakładkę "Wyślij Offline" na komputerze z dostępem do internetu. ',
    HELP_10_Desc_2:
        'Uzupełnij pole "Od Adresu". Zauważ, że jest to adres, z którego wypłacasz środki, nie adres, na który mają trafić. W ten sposób generowany jest wyróżnik i cena paliwa. ',
    HELP_10_Desc_3:
        'Przejdź na komputer bez dostępu do internetu. Uzupełnij pole "Do Adresu" i kwotę do wysłania. ',
    HELP_10_Desc_4:
        "Wpisz cenę paliwa jaka została wyświetlona na komputerze z internetem w kroku pierwszym. ",
    HELP_10_Desc_5:
        "Wpisz wyróżnik jaki został wyświetlony na komputerze z internetem w kroku pierwszym. ",
    HELP_10_Desc_6:
        '"Limit Paliwa" ma domyślną wartość 21000. To pokryje koszty standardowej transakcji. Jeżeli będziesz wysyłać transakcję do kontraktu lub będziesz załączać jakieś dane do transakcji, musisz zwiększyć tą wartość. Nadpłata paliwa zostanie zwrócona. ',
    HELP_10_Desc_7:
        "Jeśli chcesz możesz załączyć dane do transakcji. Musisz wtedy jednak zapewnić więcej niż domyślne 21000 limitu paliwa. Dane wpisujemy w formacie HEX. ",
    HELP_10_Desc_8:
        "Wybierz Twój plik portfela -lub- klucz prywatny i odblokuj portfel. ",
    HELP_10_Desc_9: 'Kliknij przycisk "Wygeneruj Transakcję". ',
    HELP_10_Desc_10:
        "W polu poniżej pojawią się dane podpisanej transakcji. Skopiuj jego zawartość na komputer z dostępem do internetu. ",
    HELP_10_Desc_11:
        'Na komputerze z internetem wklej podpisaną transakcję w pole tekstowe w kroku 3 i kliknij "Wyślij Transakcję". To spowoduje rozgłoszenie transakcji. ',

    HELP_12_Title:
        "12) Jak zaimportować portfel utworzony w MyEtherWallet do geth / Ethereum Wallet / Mist? ",
    HELP_12_Desc_1:
        "Używając pliku Keystore Geth/Mist z MyEtherWallet v2+.... ",
    HELP_12_Desc_2: 'Wejdź na zakładkę "Wyświetl informacje o portfelu". ',
    HELP_12_Desc_3:
        "Odblokuj portfel używając Twojego klucza prywatnego lub pliku portfela. ",
    HELP_12_Desc_4: 'Wejdź na zakładkę "Moje Portfele". ',
    HELP_12_Desc_5:
        'Zaznacz portfel jaki chcesz zaimportować do Mist, kliknij ikonkę "Podgląd", wpisz hasło i wejdź do podglądu. ',
    HELP_12_Desc_6:
        'Znajdź sekcję "Plik Keystore/JSON (Zalecany · Szyfrowany · Format Mist/Geth)". Kliknij przycisk "Pobierz" pod spodem. W ten sposób uzyskałeś plik Keystore. ',
    HELP_12_Desc_7: "Uruchom aplikację Ethereum Wallet. ",
    HELP_12_Desc_8:
        'W menu programu wejdź w: "Accounts" -> "Backup" -> "Accounts" ',
    HELP_12_Desc_9:
        "Otworzy się folder z plikami ustawień. Skopiuj pobrany przed chwilą plik portfela (`UTC--2016-04-14......../`) do folderu keystore. ",
    HELP_12_Desc_10:
        'Twój portfel powinien się od razu pojawić na zakładce "Accounts." ',
    HELP_12_Desc_11: "Używając nieszyfrowanego klucza prywatnego... ",
    HELP_12_Desc_12:
        'Jeżeli jeszcze nie posiadasz nieszyfrowanego klucza prywatnego, wejdź na zakładkę "Wyświetl informacje o portfelu". ',
    HELP_12_Desc_13: "Wybierz swój plik portfela i odblokuj portfel. ",
    HELP_12_Desc_14: 'Skopiuj "Klucz Prywatny (nieszyfrowany)". ',
    HELP_12_Desc_15: "Jeśli pracujesz na Mac'u: ",
    HELP_12_Desc_15b: "Jeśli pracujesz na PC'cie: ",
    HELP_12_Desc_16:
        "Otwórz Text Edit i wklej do niego skopiowany klucz prywatny. ",
    HELP_12_Desc_17:
        'Wejdź do paska menu i kliknij "Format" -> "Make Plain Text". ',
    HELP_12_Desc_18:
        'Zapisz ten plik na `desktop/` jako `nic_specjalnego_usun_mnie.txt`. Podczas zapisywania ustaw "UTF-8" i "If no extension is provided use .txt". ',
    HELP_12_Desc_19:
        "Otwórz terminal systemowy i uruchom następującą komendę: `geth account import ~/Desktop/nic_specjalnego_usun_mnie.txt` ",
    HELP_12_Desc_20:
        "Zostaniesz zapytany o hasło. To będzie hasło portfela w geth / Ethereum Wallet / Mist, które należy podać przy każdej transakcji, nie zapomnij tego hasła. ",
    HELP_12_Desc_21:
        "Po zaimportowaniu portfela, usuń `nic_specjalnego_usun_mnie.txt` ",
    HELP_12_Desc_22:
        'Po ponownym uruchomieniu aplikacji Ethereum Wallet Twój portfel pojawi się na zakładce "Accounts". ',
    HELP_12_Desc_23: "Otwórz Notatnik i wklej klucz prywatny ",
    HELP_12_Desc_24:
        "Zapisz plik notatnika jako `nic_specjalnego_usun_mnie.txt` na `C:\\` ",
    HELP_12_Desc_25:
        "Uruchom wiersz poleceń i wykonaj komendę: `geth account import C:\\nic_specjalnego_usun_mnie.txt` ",
    HELP_12_Desc_26:
        "Zostaniesz zapytany o hasło. To będzie hasło portfela w geth / Ethereum Wallet / Mist, które należy podać przy każdej transakcji, nie zapomnij tego hasła. ",
    HELP_12_Desc_27:
        "Po zaimportowaniu portfela, usuń `nic_specjalnego_usun_mnie.txt` ",
    HELP_12_Desc_28:
        'Po ponownym uruchomieniu aplikacji Ethereum Wallet Twój portfel pojawi się na zakładce "Accounts". ',

    HELP_13_Title:
        '13) What does "Insufficient funds. Account you try to send transaction from does not have enough funds. Required XXXXXXXXXXXXXXXXXXX and got: XXXXXXXXXXXXXXXX." Mean? ',
    HELP_13_Desc_1:
        "Oznacza to, że nie posiadasz wystarczającej ilości Ether na koncie, aby pokryć koszty paliwa. Każda transakcja (przesyłanie tokenów lub interakcja z kontraktem) wymaga paliwa, które jest opłacane w Ether'ach. Wyświetlona wartość jest ilością potrzebną na pokrycie kosztów transakcji w Wei'ach. Podziel tą liczbę przez `1000000000000000000` i odejmij wartość Ether, którą chciałeś wysłać (jeśli wysyłałeś Ether). Otrzymasz wartość, jaką musisz przesłać na swoje konto, aby wykonać transakcję.",

    HELP_14_Title:
        "14) Niektóre strony wykorzystują ruchy myszką przy generowaniu klucza prywatnego. MyEtherWallet tego nie robi. Czy generator liczb losowych w MyEtherWallet jest bezpieczny? ",
    HELP_14_Desc_1:
        "Chociaż generowanie liczb losowych przy udziale ruchów myszki jest sprytnie pomyślane i rozumiemy dlaczego ludzie to lubią, to jednak rzeczywistość jest taka, że window.crypto zapewnia większą entropię niż ruchy myszką. Generowanie z ruchów myszki nie jest niebezpieczne, ale my (oraz znaczna liczba innych ekspertów kryptografii) wierzymy w window.crypto. W dodatku MyEtherWallet może być używane na urządzeniach dotykowych. Tutaj można przeczytać [rozmowę rozeźlonego reddit'ora i Vitalik'a Buterin'a odnośnie ruchów myszki kontra window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) a tutaj jest [specyfikacja window.crypto w3](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto). ",

    HELP_15_Title:
        "15) Dlaczego portfel, który właśnie wygenerowałem nie pokazuje się w eksploratorze bloków? (np. etherchain, etherscan) ",
    HELP_15_Desc_1:
        "Adres pojawi się w eksploratorze bloków dopiero jak adres portfela będzie uczestniczył w jakichś transakcjach, np. jak wyślesz do niego jakieś środki. ",

    HELP_16_Title: "16) Jak sprawdzić stan mojego konta? ",
    HELP_16_Desc_1:
        "Możesz użyć eksploratora bloków jak [gastracker.io](https://gastracker.io/) (ETC) / [etherscan.io](https://etherscan.io/) (ETH). Wklej swój adres w wyszukiwarkę na stronie eksploratora, pokaże ona stan Twojego konta oraz historię transakcji. Tak na przykład wygląda nasze [konto donacji](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) na etherscan.io. ",

    HELP_17_Title:
        "17) Dlaczeg stan mojego konta nie pojawia się, kiedy odblokowuje mój portfel? ",
    HELP_17_Desc_1:
        "Najprawdopodobniej przyczyną tego jest firewall. API, które używamy do odczytu stanu konta oraz jego konwersji jest często blokowane przez firewall z różnych przyczyn. Wciąż możesz wysyłać transakcje, jednak stan konta musisz sprawdzać w inny sposób, np. na [gastracker.io](https://gastracker.io/) (ETC) / [etherscan.io](https://etherscan.io/) (ETH) ",

    HELP_18_Title: "18) Gdzie jest plik mojego portfela w geth? ",

    HELP_19_Title: "19) Gdzie jest plik mojego portfela w Mist? ",
    HELP_19_Desc_1:
        'Pliki programu Mist można znaleźć zazwyczaj w lokalizacjach wymienionych w pkt. 18, ale prościej jest uruchomić Mist, wybrać "Accounts" w górnym pasku, następnie "Backup" i "Accounts". Otworzy się folder, w którym znajdują się wspomniane pliki. ',

    HELP_20_Title: "20) Gdzie jest mój plik portfela przed-sprzedaży? ",
    HELP_20_Desc_1:
        'Tam gdzie go zapisałeś ;). Był też wysłany mailem, sprawdź również tam. Szukaj pliku `"ethereum_wallet_backup.json"`. Portfel ten będzie zaszyfrowany hasłem jakie podałeś podczas procesu kupna na przed-sprzedaży. ',

    HELP_21_Title:
        "21) Czy nie jest tak, że każdy może losowo sprawdzać różne klucze prywatne, a jak znajdzie taki ze środkami możę przelać je na swoje konto? ",
    HELP_21_Desc_1:
        "Krótka odpowiedź: Tak. Jednak znalezienie któregokolwiek ze środkami zajęłoby więcej czasu niż wszechświat istnieje... więc... nie. ",
    HELP_21_Desc_2:
        "Długa wersja (dla przedszkolaka): Ethereum bazuje na [Kryptografii Klucza Publicznego (ECC)](https://pl.wikipedia.org/wiki/Kryptografia_klucza_publicznego), a dokładnie na [Kryptografii Krzywych Eliptycznych](https://eprint.iacr.org/2013/734.pdf) które są bardzo szeroko stosowane, nie tylko w Ethereum. Większość serwerów jest chroniona przez ECC. Kolejne przykłady to Bitcoin, SSH, TLS i wiele innych. Klucze w Ethereum to dokładnie odmiana 256-bitowa, która jest silniejsza niż 128-bitowa i 192-bitowa, które również są wciąż szeroko stosowane oraz uznawane przez ekspertów za bezpieczne. ",
    HELP_21_Desc_3:
        "W tego typu zabezpieczeniu mamy 2 klucze: klucz prywatny i klucz publiczny. Z klucza prywatnego możemy szybko otrzymać klucz publiczny, ale otrzymanie klucza prywatnego z klucza publicznego jest niemożliwe. Biorąc pod uwagę, że cały internet i wszystkie sekrety świata używają tej metody kryptograficznej oznacza, że gdyby istniał sposób na otrzymanie klucza prywatnego z publicznego, to utrata Twoich środków z konta Ethereum byłaby najmniejszym zmartwieniem w świecie. ",
    HELP_21_Desc_4:
        "Idąc dalej, TAK jeżeli ktoś miałby Twój klucz prywatny mógłby z łatwością wypłacić środki z Twojego konta. Tak samo, jak by ktoś miał hasło do Twojego konta pocztowego, mógłby czytać Twoje maile, lub gdyby miał hasło bankowe, mógłby wypłacać z niego pieniądze. Możesz ściągnąć plik Keystore Twojego portfela, który jest kluczem prywatnym zaszyfrowanym hasłem. To jest tak jak by mieć hasło, które jest chronione innym hasłem. ",
    HELP_21_Desc_5:
        'Więc TAK, teoretycznie można by po prostu wpisywać 64 znaki w kodzie szesnastkowym do momentu trafienia na taki, który nie jest pusty. Co więcej zdolni ludzie mogą napisać program, który będzie bardzo szybko, automatycznie sprawdzał kolejne losowe kombinacje kluczy. Taka metoda nazywa się "brute-forcing" lub "mining". Różni ludzie zastanawiali się nad jej zastosowaniem długo i intensywnie. Z pomocą kilku wysokiej klasy serwerów mogliby być w stanie sprawdzać ponad 1 milion kluczy na sekundę. Jednak nawet wtedy koszt utrzymania pracy tych serwerów byłby wiele razy wyższy niż potencjalne zyski ze znalezienia jakichkolwiek środków. Bardziej prawdopodobne byłoby, że pierwsze trafienie nastąpi dopiero po śmierci Twojej i Twoich prawnuków. ',
    HELP_21_Desc_6:
        "Jeśli wiesz coś na temat Bitcoina, [to może dać Ci perspektywę:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *Aby zilustrować jak mało prawdopodobne to jest: załóżmy, że każdy satoshi (najmniejsza część Bitcoina, 0.00000001 BTC), każdego Bitcoina jaki kiedykolwiek będzie istnieć (21 milionów), został wysłany na swój własny unikalny klucz prywatny. Prawdopodobieństwo, że spośród wszystkich tych kluczy 2 odpowiadałyby tym samym adresom jest jak 1 do 100 kwintylionów. ",
    HELP_21_Desc_7:
        "[Jeżeli byś chciał coś bardziej technicznego:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *Te liczby nie mają nic wspólnego z technologią na jakiej opiera się urządzenie. Są maksimami na jakie pozwala termodynamika, co silnie sugeruje, że skuteczne ataki brute-force przeciwko 256-bitowym kluczom będą nieosiągalne, dopóki komputery nie będą zbudowane z czegoś innego niż materia i będą zajmować trochę więcej niż wszechświat. ",
    HELP_21_Desc_8:
        "Oczywiście to wszystko ma miejsce przy założeniu, że klucze są generowane w prawdziwie losowy sposób i z wystarczającą entropią. Klucze tu wygenerowane spełniają te kryteria, tak samo jak klucze w Jaxx i Mist/geth. Portfele Ethereum są w większości całkiem niezłe. Z drugiej strony np. klucze wygenerowane przez ludzki umysł nie spełniają tych kryteriów, jako że ludzki umysł nie jest w stanie wygenerować prawdziwie losowego źródła. W otoczeniu Bitcoina w przeszłości pojawiło się kilka problemów związanych z brakiem odpowiedniej entropii lub brakiem pełnej losowości, ale to całkiem inny temat, być może na inny dzień. ",

    HELP_SecCX_Title: "Bezpieczeństwo - MyEtherWallet CX ",
    HELP_SecCX_Desc_1:
        "Gdzie są zapisywane informacje przechowywane przez to rozszerzenie? ",
    HELP_SecCX_Desc_2:
        "Informacje przechowywane przez to Rozszerzenie Chrome jest zapisywane przez [chrome.storage](http://chrome.storage/). - w tym samym miejscu są przechowywane hasła zapisywane w przeglądarce Chrome. ",
    HELP_SecCX_Desc_3: "Jakie informacje są zapisywane? ",
    HELP_SecCX_Desc_4:
        "Adres, nazwa konta, klucz prywatny są przechowywane w chrome.storage. Klucz prywatny jest zaszyfrowany hasłem jakie podano przy zakładaniu portfela. Nazwa i adres nie są szyfrowane. ",
    HELP_SecCX_Desc_5: "Dlaczego adres i nazwa konta nie są szyfrowane? ",
    HELP_SecCX_Desc_6:
        "Jeżeli byśmy zaszyfrowali te informacje, konieczne było by podawanie hasła przy każdym sprawdzeniu stanu konta lub wyświetleniu jego nazwy. Jeśli to Cię niepokoi, możesz użyć MyEherWallet.com zamiast tego Rozszerzenia Chrome. ",

    HELP_Sec_Title: "Bezpieczeństwo ",
    HELP_Sec_Desc_1:
        'Jeśli pierwszym pytaniem jakie Ci się nasuwa jest "Dlaczego miałbym zaufać tym gościom?", to prawidłowy odruch. Być może to pozwoli Ci załagodzić obawy: ',
    HELP_Sec_Desc_2:
        'Działamy od sierpnia 2015. Jeśli wyszukasz ["myetherwallet" na reddit](https://www.reddit.com/search?q=myetherwallet), możesz znaleźć wielu ludzi, którzy używają naszego kodu bez najmniejszych problemów. ',
    HELP_Sec_Desc_3:
        'Nie ukradniemy Twoich pieniędzy ani Twoich kluczy prywatnych. Ta strona nie zawiera złośliwego kodu. W zasadzie, zakładka "Generuj Portfel" działa w pełni po stronie klienckiej. Oznacza to, że cały kod jest uruchamiany wyłącznie na **Twoim komputerze**, a jego rezultat nigdzie nie jest zapisywany ani nigdzie przesyłany. ',
    HELP_Sec_Desc_4:
        "Sprawdź adres URL -- Ta strona jest serwowana przez GitHub. Kod źródłowy jest dostępny pod: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages). Strona jest dostępna pod domenami: [https://www.myetherwallet.com](https://www.myetherwallet.com). ",
    HELP_Sec_Desc_5:
        "Do generowania portfeli możesz pobrać [kod źródłowy](https://github.com/kvhnuke/etherwallet/releases/latest). Zobacz punkt 5 powyżej. ",
    HELP_Sec_Desc_6:
        'Wykonaj test i sprawdź jakie połączenia sieciowe są aktywowane. Najprostszą metodą jest kliknięcie prawym przyciskiem myszy na stronie i "Zbadaj". Przejdź na zakładkę "Network". Wygeneruj testowy portfel. Zobaczysz, że nie są aktywowane żadne połączenia. Możesz zobaczyć coś wyglądającego jak data:image/gif i data:image/png. To są kody QR generowane... na Twoim komputerze... przez Twój komputer. Żadne dane nie były transferowane. ',
    HELP_Sec_Desc_8:
        "Jeśli nie czujesz się komfortowo używając tego oprogramowania, bez względu na wszystko, nie używaj go. Stworzyliśmy te narzędzia jako pomoc w generowaniu nowych portfeli i wykonywaniu transakcji bez potrzeby zagłębiania się w linię poleceń lub prowadzenia pełnego węzła. Jeszcze raz, nie krępuj się z nami skontaktować jeżeli masz jakieś wątpliwości. Postaramy się odpowiedzieć tak szybko jak to możliwe. Dzięki! ",

    HELP_FAQ_Title:
        "Więcej Pomocnych Odpowiedzi na Często Zadawane Pytania (tylko angielski) ",
    HELP_Contact_Title: "Sposoby Nawiązania Kontaktu (tylko angielski)"
};

module.exports = pl;
