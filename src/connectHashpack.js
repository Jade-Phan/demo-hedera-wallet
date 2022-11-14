import { HashConnect } from 'hashconnect';

const connectHashpack = async () => {
    let hashconnect = new HashConnect();
    let appData = {
        // Info app 
        name: " Demo app",
        description: " sdfsdkfjsfs",
        icon: ""
    }

    let initData = await hashconnect.init(appData);
    let state = await hashconnect.connect()


    let pairingString = hashconnect.generatePairingString(state, 'testnet', false);

    hashconnect.findLocalWallets();
    hashconnect.connectToLocalWallet(pairingString);

    hashconnect.pairingEvent.once((pairingData) => {
        const accountId = document.getElementById('accountid')
        accountId.innerHTML = pairingData.accountIds[0]
    })
    return { initData, hashconnect }
}

const disconnectHashpack = async (hashconnect) => {
    console.log("disconnect")
    console.log(hashconnect)
    await hashconnect.disconnect();
    const accountId = document.getElementById('accountid')
        accountId.innerHTML = null
}


export {connectHashpack,disconnectHashpack};