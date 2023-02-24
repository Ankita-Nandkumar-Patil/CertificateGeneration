import { useState, useEffect } from "react";
import Web3 from "web3";
// import temp from '../components/assets/temp3.png';
import SimpleStorage from "../contracts/SimpleStorage.json";
// import View from "./View";
// import React, { useState } from "react";
import temp from '../components/assets/temp3.png';
import "./Style.css";
// import { useNavigate } from "react-router-dom";

// const Generate = () => {
// const [user, setUser] = useState({
//   fname : "",org: "", email: "", cert: "",idate:"", vdate:""
// })

// let name, value ;

// const handleIp=(e) =>{
//   console.log(e);
//   name = e.target.name;
//   value = e.target.value;

//   setUser({...user, [name]:value});
// }

function Generate() {

    //newl added code starts***********************************************************************************************
    const [state, setState] = useState({
      web3: null,
      contract: null,
    });
    const [data, setData] = useState(null);
    useEffect(() => {
      async function init() {
        const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
        const web3 = new Web3(provider);
        //console.log(web3);
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = SimpleStorage.networks[networkId];
        console.log("Contract Address:", deployedNetwork.address);
        const contract = new web3.eth.Contract(
          SimpleStorage.abi,
          deployedNetwork.address
        );
        //console.log(contract);
        setState({ web3: web3, contract: contract });
      }
      init();
    }, []);
  
    useEffect(() => {
      {
        const { contract } = state;
        async function read() {
          const dataValue = await contract.methods.getter().call();
          setData(dataValue);
          // console.log(data);
        }
        contract && read();
      }
    }, [state, state.contract]);
  
    async function updateValue() {
      const { contract } = state;
      const input = document.querySelector("#fname");
      await contract.methods
        .setter(input.value)
        .send({ from: "0xe8e3a0B71cC4F1d04852f1516b412C04a9De3c09" });   //meatamask acc address ##############################################################################################
      const dataValue = await contract.methods.getter().call();
      setData(dataValue);
    }
    //newl added code ends*****************************************************************

  const [name, setvalue] = useState({
    fname: "",
    email: "",
    idate: "",
    vdate: "",
    cert: "",
    org: "",
    authName : "",
    auth :"",
    authName2 : "",
    auth2 :"",
    logo: ""
  });

  const handleSubmit = (event) =>{
    event.preventDefault();
    alert("Certificate is being generated.!")
  };
  let type, value;
  const ipEvent=(event)=>{
    console.log(event.target.value);
    value = event.target.value;
    type = event.target.name;

    setvalue({...name, [type]:value});
  }
  
//   render() {
    return (
      // <html>
        
        <body class="bg-dark bg-graient myHome">
          {/* Form generation */}
          <div class="container text-white">
            <main>
              <div class="py-5 text-center">
                <img
                  class="d-block mx-auto mb-4"
                  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/copy-2801175-2321585.png"
                  alt=""
                  width="72"
                  height="57"
                />
                <h2>Certification form</h2>
                <br />
                <p class="lead">
                  Fill all the details mentioned below precisely
                </p>
              </div>

              <div class="row g-5 ">
                <div class="col-md-7 col-lg-8">
                  <h4 class="mb-3">Student/Applicant Details :</h4>
                  <form
                    class="needs-validation"
                    onSubmit={handleSubmit}
                    novalidate=""
                  >
                    <div class="row g-3">
                      <div class="col-sm-6">
                        <label for="username" class="form-label">
                          First Name
                        </label>
                        <div class="input-group has-validation">
                          <input
                            type="text"
                            class="form-control"
                            id="username"
                            placeholder="First Name"
                            required=""
                            fdprocessedid="5t1jeq"
                            autoComplete="off"
                          />
                          <div class="invalid-feedback">
                            Your name is required.
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <label for="username" class="form-label">
                          Last Name
                        </label>
                        <div class="input-group has-validation">
                          {/* <span class="input-group-text">@</span> */}
                          <input
                            type="text"
                            class="form-control"
                            id="username"
                            autoComplete="off"
                            placeholder="Last Name"
                            required=""
                            fdprocessedid="5t1jeq"
                          />
                          <div class="invalid-feedback">
                            Your name is required.
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="org" class="form-label">
                          Certifying Organization
                        </label>
                        <div class="input-group has-validation">
                          {/* <span class="input-group-text">@</span> */}
                          <input
                            type="text"
                            class="form-control"
                            id="org"
                            // defaultValue={user.org}
                            onChange={ipEvent}
                            placeholder="Org. Name"
                            autoComplete="off"
                            name="org"
                            required=""
                            fdprocessedid="5t1jeq"
                            value={name.org}
                          />
                          <div class="invalid-feedback">
                            Your username is required.
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="email" class="form-label">
                          Applicant's Email{" "}
                          <span class="text-muted">(Optional)</span>
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          // defaultValue={user.email}
                          onChange={ipEvent}
                          placeholder="you@example.com"
                          autoComplete="off"
                          name="email"
                          value={name.email}
                          fdprocessedid="2f8cgm"
                        />
                        <div class="invalid-feedback">
                          Please enter a valid email address.
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="cert" class="form-label">
                          Certified for
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="cert"
                          // defaultValue={user.cert}
                          // onChange = {handleIp}
                          onChange={ipEvent}
                          // name = "cert"
                          placeholder="exam/competition name"
                          name="cert"
                          autoComplete="off"
                          value={name.cert}
                          required=""
                          fdprocessedid="55rzg6"
                        />
                        <div class="invalid-feedback">Please enter.</div>
                      </div>

                      <div class="col-sm-6">
                        <label for="auth" class="form-label">
                          Certifying Authority
                        </label>
                        <div class="input-group has-validation">
                          <input
                            type="text"
                            name="auth"
                            class="form-control"
                            id="auth"
                            autoComplete="off"
                            onChange={ipEvent}
                            value={name.auth}
                            placeholder="HOD, Dean etc."
                            required=""
                            // fdprocessedid="5t1jeq"
                          />
                          <div class="invalid-feedback">
                            Your name is required.
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <label for="authName" class="form-label">
                          Authority Name 
                        </label>
                        <div class="input-group has-validation">
                          {/* <span class="input-group-text">@</span> */}
                          <input
                            type="text"
                            name="authName"
                            class="form-control"
                            autoComplete="off"
                            id="authName"
                            onChange={ipEvent}
                            value={name.authName}
                            placeholder="Authority Name"
                            required=""
                            // fdprocessedid="5t1jeq"
                          />
                          <div class="invalid-feedback">
                            Your name is required.
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <label for="auth2" class="form-label">
                          Certifying Authority 2
                        </label>
                        <div class="input-group has-validation">
                          <input
                            type="text"
                            class="form-control"
                            id="auth2"
                            onChange={ipEvent}
                            name="auth2"
                            autoComplete="off"
                            value={name.auth2}
                            placeholder="HOD, Dean etc."
                            required=""
                            fdprocessedid="5t1jeq"
                          />
                          <div class="invalid-feedback">
                            Your name is required.
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <label for="authName2" class="form-label">
                          Authority Name 
                        </label>
                        <div class="input-group has-validation">
                          {/* <span class="input-group-text">@</span> */}
                          <input
                            type="text"
                            class="form-control"
                            id="authName2"
                            name="authName2"
                            onChange={ipEvent}
                            value={name.authName2}
                            placeholder="Authority Name"
                            required=""
                            autoComplete="off"
                            fdprocessedid="5t1jeq"
                          />
                          <div class="invalid-feedback">
                            Your name is required.
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="idate" class="form-label">
                          Issue Date<span class="text-muted">(Optional)</span>
                        </label>
                        <input
                          type="date"
                          class="form-control"
                          id="idate"
                          // defaultValue={user.idate}
                          onChange={ipEvent}
                          value={name.idate}
                          autoComplete="off"
                          placeholder="Issued on"
                          name="idate"
                          fdprocessedid="olf1w5"
                        />
                      </div>

                      <div class="col-12">
                        <label for="logo" class="form-label">
                          Logo<span class="text-muted">(Optional)</span>
                        </label>
                        <input
                          type="url"
                          class="form-control"
                          id="logo"
                          // defaultValue={user.idate}
                          onChange={ipEvent}
                          autoComplete="off"
                          value={name.logo}
                          placeholder="Place your logo url"
                          name="logo"
                          fdprocessedid="olf1w5"
                        />
                      </div>

                        {/* <div class="col-12">
                        <label for="auth" class="form-label">
                          Valid Till<span class="text-muted">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="auth"
                          // defaultValue={user.vdate}
                          onChange={ipEvent}
                          value={name.vdate}
                          autoComplete="off"
                          placeholder="Expires on"
                          name="auth"
                          fdprocessedid="olf1w5"
                        />
                      </div>  */}
                    </div>

                    <hr class="my-4" />

                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="same-address"
                        required=""
                      />
                      <label class="form-check-label" for="same-address">
                        All the details are CORRECT
                      </label>
                    </div>
                    <hr class="my-4" />

                    <div class="col-12">
                      <label for="fname" class="form-label">
                        Name on Certificate
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="fname"
                        // defaultValue={user.fname}
                        onChange={ipEvent}
                        value={name.fname}
                        placeholder="Name to be displayed"
                        name="fname"
                        required=""
                        autoComplete="off"
                        fdprocessedid="55rzg6"
                      />
                      <div class="invalid-feedback">
                        Name Confirmation is required.
                      </div>
                    </div>

                    <hr class="my-4" />

                    <button
                      class="w-100 btn btn-primary btn-lg"
                      type="submit"
                      fdprocessedid="euovw"
                      id="submitBtn"
                      // onClick={this.handleSubmit}
                    >
                      Submit{" "}
                    </button>
                    {/* <View state={{fname, idate,}} /> */}
                    <br />
                    <br />
                    
                  </form>

                  {/* newly added code starts  */}

                  <div> This is my name : {data}</div>
                  <button onClick={updateValue}>Click Here To Change Value</button>


                  {/* newly added code ends  */}
                </div>
              </div>
            </main>

            <footer class="my-5 pt-5 text-muted text-center text-small">
              <p class="mb-1">© 2017–2022 Company Name</p>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a href="#">Privacy</a>
                </li>
                <li class="list-inline-item">
                  <a href="#">Terms</a>
                </li>
                <li class="list-inline-item">
                  <a href="#">Support</a>
                </li>
              </ul>
            </footer>
          </div>

          {/* print Certificate */}

          <div class=" container1">
            <div className="image-wrapper">
                    <img src={temp} className="image" />
                    <h1 className="fname">{name.fname}</h1>
                    <h6 className="org">{name.org}</h6>
                    <h5 className="auth">{name.auth}</h5>
                    <h5 className="authName">{name.authName}</h5>
                    <h5 className="auth2">{name.auth2}</h5>
                    <h5 className="authName2">{name.authName2}</h5>
                    <h6 className="idate">{name.idate}</h6>
                    <img className="logo" src={name.logo} />
                  </div>
                
          </div>

          <script
            src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
            crossorigin="anonymous"
          ></script>
          {/* <script src="index2.js"></script> */}
          <script src="https://unpkg.com/pdf-lib/dist/pdf-lib.min.js"></script>
          <script src="checkout.js"></script>
        </body>
    );
//   }
}

export default Generate;