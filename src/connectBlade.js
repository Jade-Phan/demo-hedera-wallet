import { BladeSigner, HederaNetwork} from '@bladelabs/blade-web3.js';

const connectBlade = async () => {
    const bladeSigner = new BladeSigner();
    const params = {
        network: HederaNetwork.Testnet,
        // dAppCode - optional while testing, request specific one by contacting us.
        dAppCode: "yourAwesomeApp"
    }

    try {
        // create session with optional parameters.
        await bladeSigner.createSession(params);
        const accountId = document.getElementById('accountid')
        accountId.innerHTML = bladeSigner.getAccountId()
    } catch (error) {
        console.log(error)
    }

    return {bladeSigner}
}

const disconnectBlade = async() =>{
    (window).bladeConnect.killSession();
    const accountId = document.getElementById('accountid')
        accountId.innerHTML = null;
}

export {connectBlade,disconnectBlade}