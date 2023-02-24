import React from 'react'
import {useState, useEffect} from 'react';
// import web3 from Web3;
import Web3 from 'web3'; //web3 object
import { useForm } from 'react-hook-form';

export default function Form() {

  const [isConnected, setIsConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState("");

  const detectCurrentProvider =() =>{
    let provider;
    if(window.ethereum){
      provider = window.ethereum;
    }else if(window.web3){
      provider = window.web3.currentProvider;
    }else{
      console.log("Non-ethereum browser detected.")
    }
    return provider;
  };

  const onConnect = async() =>{
    try{
      const currentProvider = detectCurrentProvider();
      if(currentProvider){
        await currentProvider.request({method:'eth_requestAccounts'});
        const web3 = new Web3(currentProvider);  //web3 instance
        const userAccount = await web3.eth.getAccounts();
        const account =userAccount[0];
        let ethBalance = await web3.eth.getBalance(account);
        setEthBalance(ethBalance)
        setIsConnected(true);
      }
    } catch(err){
      console.log(err);
    }
  }

  const onDisconnect =() =>{
    setIsConnected(false);
  }

    //watch : can be used for form validation
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    //below, the mobile number is validated using "reqired and error" functions. this can be done with all form components
  return (
    <body class="bg-dark bg-graient">
      <div class="container text-white">
        <main>
          {/* <div class="py-5 text-left">
            <form class="form-signin needs-validation" novalidate="">
              <div class="text-center mb-4">
                <img
                  class="mb-4"
                  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/sign-up-2289091-1908691.png"
                  alt=""
                  width="72"
                  height="72"
                />
                <h1 class="h3 mb-3 font-weight-normal">Get Started</h1>
              </div>

              <div class="row g-3 form-label-group">
                <div class="col-sm-6 mb-3">
                  <label for="inputEmail">Wallet address</label>
                  <input
                    type="email"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Wallet address"
                    required=""
                    autofocus=""
                    fdprocessedid="ndedl"
                  />
                  <div class="invalid-feedback">
                    Valid Email-id is required.
                  </div>
                </div>
              </div>

              
              

              <div class="row g-3 form-label-group">
                <div class="col-sm-6 mb-3">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="inputPassword"
                    class="form-control"
                    placeholder="Password"
                    required=""
                    fdprocessedid="orvl2x"
                  />
                  <div class="invalid-feedback">Invalid Password</div>
                </div>
              </div>

              <div class="row g-3 form-label-group">
                <div class="col-sm-6 mb-3">
                  <label for="inputEmail">Confirm Password</label>
                  <input
                    type="email"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Confirm Password"
                    required=""
                    autofocus=""
                    fdprocessedid="ndedl"
                  />
                  <div class="invalid-feedback">
                    Type again
                  </div>
                </div>
              </div>

              <div class="checkbox mt-3 mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
            </form>
            */}

            <div class=" text-center mb-3"> 

              <div className='app-wrapper'>
                {!isConnected &&(
                  <button
                  class="btn btn-lg btn-primary btn-block"
                  type="submit"
                  fdprocessedid="uatjem"
                  onClick={onConnect}
                >
                  Connect Wallet
                </button>
                 )} 
              </div>
              
            </div>

            <div class=" text-center mb-3">
              {isConnected && (
                <div className='app-wrapper'>
                  <div className='app-details'>
                    <h2>You are Connected to Metamask.</h2>
                    <div>
                      <span>Balance: </span>
                      {ethBalance}
                    </div>
                  </div>
                </div>
              )}
              <button
                class="btn btn-lg btn-primary btn-block"
                type="submit"
                fdprocessedid="uatjem"
                onClick={onDisconnect}
              >
                Disconnect
              </button>
            </div>


            <p class="text-secondary mt-5 mb-3 text-center">© 2022-2023</p>
          {/* </div> */}
        </main>
      </div>
    </body>
  );
}
