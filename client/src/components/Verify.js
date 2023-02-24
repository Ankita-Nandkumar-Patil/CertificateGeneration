import React from 'react'
import logo from "../components/assets/logo.png";

export default function Verify() {
  return (
    <body class="bg-dark bg-graient">
      <div class="container text-white">
        <main>
          <div class="py-5 text-center">
            <img
              class="d-block mx-auto mb-4"
              // src="https://cdn.iconscout.com/icon/premium/png-256-thumb/copy-2801175-2321585.png"
              src={logo}
              alt=""
              width="72"
              height="57"
            />
            <h2>Verification</h2>
            <br />
            <p class="lead">Enter the document hash to verify.</p>
          </div>

          <div class="mx-auto">
            <div class="col-md-5  col-lg-4 order-md-last">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-primary">Verify </span>
                {/* <span class="badge bg-primary rounded-pill">3</span> */}
              </h4>
              <ul class="list-group mb-3">
                <li class="list-group-item p-4 d-flex justify-content-between lh-sm">
                  <div>
                    <h6 class="my-0 ">Enter Hash</h6>
                    <small class="text-muted">Enter hash Below to verify</small>
                  </div>
                  {/* <span class="text-muted">$12</span> */}
                </li>
              </ul>

              <form class="card p-5">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Hash"
                    fdprocessedid="oicah7"
                  />
                  <button
                    type="submit"
                    class="btn btn-primary"
                    fdprocessedid="9g9kvk"
                  >
                    Verify
                  </button>
                </div>
              </form>
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

      <script
        src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"
      ></script>

      <script src="checkout.js"></script>
    </body>
  );
}
