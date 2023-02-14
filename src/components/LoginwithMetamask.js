import React, {useState} from 'react'

function LoginwithMetamask() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [defaultAccount, setdefaultAccount] = useState(null);
  // const [userBalance, setuserBalance] = useState();
  
  const connectWallet = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(result => {
          accountChanged([result[0]]);
      })
    } else {
      setErrorMsg("Install Metamask!!")
    }
  }

  const accountChanged = (accountName) => {
    setdefaultAccount(accountName);
  }


  return (
    <div>
    {/* <h1>Login</h1>
    <button onClick={ connectWallet }> Connect to Wallet </button>
    <h3>Address: {defaultAccount}</h3> */}
    <input
          className="input_field"
          type="text"
          placeholder="MetaMask ID"
          name="metamaskid"
        id="metamashid_input"
        value={defaultAccount}
          disabled
        />
        <br />
    <button className="fetch" onClick={ connectWallet }>Fetch from Metamask Wallet</button>
    {errorMsg}
  </div>
  )
}

export default LoginwithMetamask;