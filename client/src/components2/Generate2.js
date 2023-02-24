import { useState, useEffect } from "react";
import Web3 from "web3";
// import temp from '../components/assets/temp3.png';
import SimpleStorage from "../contracts/SimpleStorage.json";

// import "./Style.css";
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
  const [name, setvalue] = useState({
    fname: "",
    email: "",
    idate: "",
    vdate: "",
    cert: "",
    org: "",
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


  //newl added code starts***********************
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
      .send({ from: "0x699552e68E59281ccCE33aeE1423434F5C0f40A5" });
    const dataValue = await contract.methods.getter().call();
    setData(dataValue);
  }
  //newl added code ends***********************
  
//   render() {
    return (
      // <html>
        
        <body class="bg-dark bg-graient">
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
                    {/* <div class="row g-3">
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
                          />
                          <div class="invalid-feedback">
                            Your name is required.
                          </div>
                        </div>
                      </div> */}

                      {/* <div class="col-sm-6">
                        <label for="username" class="form-label">
                          Last Name
                        </label>
                        <div class="input-group has-validation">
                          <input
                            type="text"
                            class="form-control"
                            id="username"
                            placeholder="Last Name"
                            required=""
                            fdprocessedid="5t1jeq"
                          />
                          <div class="invalid-feedback">
                            Your name is required.
                          </div>
                        </div>
                      </div> */}

                      {/* <div class="col-12">
                        <label for="org" class="form-label">
                          Certifying Organization
                        </label>
                        <div class="input-group has-validation">
                          <input
                            type="text"
                            class="form-control"
                            id="org"
                            onChange={ipEvent}
                            placeholder="Org. Name"
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
                          onChange={ipEvent}
                          placeholder="you@example.com"
                          name="emai"
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
                         
                          onChange={ipEvent}
                          placeholder="exam/competition name"
                          name="cert"
                          value={name.cert}
                          required=""
                          fdprocessedid="55rzg6"
                        />
                        <div class="invalid-feedback">Please enter.</div>
                      </div>

                      <div class="col-12">
                        <label for="idate" class="form-label">
                          Issue Date<span class="text-muted">(Optional)</span>
                        </label>
                        <input
                          type="date"
                          class="form-control"
                          id="idate"
                          onChange={ipEvent}
                          value={name.idate}
                          placeholder="Issued on"
                          name="idate"
                          fdprocessedid="olf1w5"
                        />
                      </div>

                      <div class="col-12">
                        <label for="vdate" class="form-label">
                          Valid Till<span class="text-muted">(Optional)</span>
                        </label>
                        <input
                          type="date"
                          class="form-control"
                          id="vdate"
                          onChange={ipEvent}
                          value={name.vdate}
                          placeholder="Expires on"
                          name="vdate"
                          fdprocessedid="olf1w5"
                        />
                      </div>
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
                    <hr class="my-4" /> */}


                    <div>

                    </div>
                    <div class="col-12">
                      <label for="fname" class="form-label">
                        Name on Certificate
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="fname"
                        onChange={ipEvent}
                        value={name.fname}
                        placeholder="Name to be displayed"
                        name="fname"
                        required=""
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
                    <br />
                    <br />

                    
                  </form>
                  <div> This is my name : {data}</div>


                  <button onClick={updateValue}>Click Here To Change Value</button>

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

          {/* <div class=" container1">
            <div className="image-wrapper">
                    <img src={temp} className="image" />
                    <h1 className="fname">{name.fname}</h1>
                    <h6 className="idate">{name.idate}</h6>
                  </div>
                
          </div> */}

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
