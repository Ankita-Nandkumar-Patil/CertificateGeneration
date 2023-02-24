import React from "react";
import { useState, useEffect } from "react";
// import web3 from Web3;
import { useForm } from "react-hook-form";
import "./Style.css";

import Web3 from "web3"; //web3 object
// import { Link } from "react-router-dom";
import "../App.css";
export default function Navbar() {
  const [isConnected, setIsConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState("");

  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("Non-ethereum browser detected.");
    }
    return provider;
  };

  const onConnect = async () => {
    try {
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        await currentProvider.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(currentProvider); //web3 instance
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        let ethBalance = await web3.eth.getBalance(account);
        setEthBalance(ethBalance);
        setIsConnected(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onDisconnect = () => {
    setIsConnected(false);
  };

  //watch : can be used for form validation
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <body class="bg-dark bg-gradient">
      <header
        id="nav"
        className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3  border-bottom myNav"
      >
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <svg
            className="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          >
            {/* <use xlink:href="#bootstrap"></use> */}
          </svg>
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="/" class="nav-link px-2 link-light">
              Home
            </a>
          </li>
          <li>
            <a href="/Generate" class="nav-link px-2 link-light">
              Generate
            </a>
          </li>
          <li>
            <a href="/Verify" class="nav-link px-2 link-light">
              Verify
            </a>
          </li>
          {/* <li>
            <a href="/View" class="nav-link px-2 link-light">
              View
            </a>
          </li> */}
        </ul>

        <div className="col-md-3 text-end">
          <div class=" text-center mb-3">
            <div className="app-wrapper">
            {/* <div class="spinner-grow text-secondary" role="status">
                  <span class="visually-hidden">Loading...</span>
                  </div> */}
              {!isConnected && (
                // <button
                //   class="btn btn-lg btn-primary btn-block"
                //   type="submit"
                //   fdprocessedid="uatjem"
                //   onClick={onConnect}
                // >
                //   Connect Wallet
                // </button>
                
                
                <button
                  type="submit"
                  class="btn btn-outline-light me-2"
                  onClick={onConnect}
                >
                  Connect Wallet
                </button>
              )}
              


              <button
                type="submit"
                class="btn btn-outline-light me-2"
                onClick={onDisconnect}
              >
                Disconnect
              </button>

              {/* <button
                class="btn btn-lg btn-primary btn-block"
                type="submit"
                fdprocessedid="uatjem"
                onClick={onDisconnect}
              >
                Disconnect
              </button> */}
            </div>
          </div>

          {/* 
          <a href="/Signup">
            <button type="button" class="btn btn-outline-light me-2">
              Connect Wallet
            </button>
          </a> */}
          {/* <a href="/Login">
            <button type="button" class="btn btn-outline-light me-2">
              Login
            </button>
          </a> */}
        </div>
      </header>
    </body>
  );
}
