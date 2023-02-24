import {useEffect} from 'react'
import{useNavigate} from 'react-router-dom'


export default function Login() {
  // const login = () =>{
  //   localStorage.setItem('login', true)
  //   navigate('/Generate')
  // }
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   let login = localStorage.getItem('login');
  //   if(login){
  //       navigate('/Generate')
  //   }
  // });

  return (
    <body class="bg-dark bg-graient">
      <div class="container text-white">
        <main>
          <div class="py-5 text-left">
            <form class="form-signin needs-validation" novalidate="">
              <div class="text-center mb-4">
                <img
                  class="mb-4"
                  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/sign-up-2289091-1908691.png"
                  alt=""
                  width="72"
                  height="72"
                />
                <h1 class="h3 mb-3 font-weight-normal">Register/Sign-up</h1>
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
                <div class="col-sm-6">
                  <label for="inputEmail">Password</label>
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

              <div class="checkbox mt-3 mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
            </form>
            <div class=" text-center">
              <button
                class="btn btn-lg btn-primary btn-block"
                type="submit"
                fdprocessedid="uatjem"
                // onClick={login}
              >
                Sign up
              </button>
            </div>
            <p class="text-secondary mt-5 mb-3 text-center">© 2022-2023</p>
          </div>
        </main>
      </div>
    </body>
  )
}
