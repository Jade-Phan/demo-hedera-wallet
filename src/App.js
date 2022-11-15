import React, { useState } from 'react';
import './App.css';
import { Button, Grid } from '@mui/material';
import {connectHashpack,disconnectHashpack} from './connectHashpack';
import { connectBlade,disconnectBlade } from './connectBlade';

function App() {
  let state;
  let pairingData;
  let topic;
  const [pairingString, setPairingString] = useState(null)
  const [bladeSigner, setBladeSigner] = useState(null)
  const [hashconnect, setHashconnet] = useState(null)
  const [currentAccount, setAccount] = useState(null)

  return (

    <div className="App">
      <header className="App-header">
        <p>
          Connect your wallet
        </p>
        <Grid container spacing={2}>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            {pairingString == null ? <Button variant="outlined" onClick={async () => {
              const data = await connectHashpack()
              setPairingString(data.initData.pairingString)
              setHashconnet(data.hashconnect)
              //setAccount()
            }}>Hashpack</Button> :
              <Button variant="outlined" onClick={
                async() => {
                  await disconnectHashpack(hashconnect);
                }}>Disconnect</Button>}
          </Grid>
          <Grid item xs={4}>
            {currentAccount == null ? <Button variant="outlined" onClick={async () => {
              const saveData = await connectBlade()
              setBladeSigner(saveData.bladeSigner)
              let currentWallet = saveData.bladeSigner.getAccountId().toString()
              console.log(currentWallet)
              setAccount(currentWallet)
            }}>Blade</Button> :
              <Button variant="outlined" onClick={
                async() => {
                  await disconnectBlade();
                }
              }>Disconnect</Button>}
          </Grid>
        </Grid>
        <div>
          <p>User id: </p>
          <p id='accountid'></p>
          <p>My account: {currentAccount}</p>
        </div>

      </header>
    </div>
  )

}

export default App;