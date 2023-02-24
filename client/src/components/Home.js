import React from "react";
import "./Style.css";
import connect from "../components/assets/connect2.jpg";
import generate from "../components/assets/generate.png";
import verify from "../components/assets/verify1.png";
import verify2 from "../components/assets/verify2.png";

export default function Home() {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide ">
        <div class="carousel-inner">
          <img src="https://www.hashcashconsultants.com/img/bg/buy-sell-crypto-slider-img.png" />
          <h1 className="heading">CertiSys</h1>
          <h6 className="heading1">Generate | Verify | Authenticate</h6>
          <div class="col d-flex justify-content-center button1">
            <a href="/Generate">
              <button type="button" class="btn btn-outline-light me-2 btn-lg">
                Get Started
              </button>{" "}
            </a>
          </div>
          <div class="col d-flex justify-content-center">
            <div class="card subtitle opacity-50 border-secondary">
              <div class="card-body">
                <p class="card-text">
                  With the Blockchain, your official records are now yours
                  forever.
                  <br />
                  Receive them once, share and verify them for lifetime
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div class="container marketing justify-content-center">
        <div className="px-4 py-5  mb-2 mt-5 text-center">
          <h1 class="display-5 fw-bold">See How It Works !!</h1>
        </div>
        {/* <div class="col d-flex justify-content-center"> */}
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient  mb-3">
              <img
                class="d-block "
                src={connect}
                alt=""
                width="72"
                height="57"
              />
            </div>
            <h3 class="fw-normal">Connect </h3>
            <p>
              Connect Your Metamask Wallet <br /> to get Started.
            </p>
          </div>

          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img
                class="d-block"
                src={generate}
                alt=""
                width="72"
                height="57"
              />
            </div>
            <h3 class="fw-normal">Generate</h3>
            <p>
              Fill all the details correctly, <br /> Preview and Generate the
              document.
            </p>
          </div>
          <div class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img class="d-block" src={verify} alt="" width="72" height="57" />
            </div>
            <h3 class="fw-normal">Verify</h3>
            <p>
              As it is uploaded to IPFS its way easy <br /> to verify.
            </p>
          </div>
        </div>
        {/* </div> */}

        {/* <hr class="featurette-divider" /> */}

        {/* <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading fw-normal lh-1">
              Oh yeah, it’s that good.{" "}
              <span class="text-muted">See for yourself.</span>
            </h2>
            <p class="lead">
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 500x500"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text>
            </svg>
          </div>
        </div> */}

        <hr class="featurette-divider" />

        <div class="row featurette pt-5 mt-5 verifier">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1 head">
              Verify Anyone’s Achievements !
            </h2>
            <p class="lead pt-5">
              Use the Certisys Verifier to independently verify records. Fill in
              the hash details, and get to know the authenticity of document.
            </p>

            {/* <div class="col d-flex justify-content-center mt-5 ">
            <div class="card opacity-50 border-secondary mt-5">
              <div class="card-body">
                <p class=" lead card-text content">
                Use the Certisys Verifier to independently verify records. 

                  <br />
                  Fill in the hash details, and get to know the authenticity of document.
                </p>
              </div>
            </div>
          </div> */}
            <div className="col d-flex justify-content-center button2">
              <a href="/Verify">
                <button
                  type="button"
                  class="btn btn-outline-dark me-2 btn-lg mt-5  "
                >
                  Verify
                </button>{" "}
              </a>
            </div>
          </div>
          <div class="col-md-5 rounded">
            <img
              class="d-block rounded"
              src={verify2}
              alt=""
              width="472"
              height="357"
            >
              {/* <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">
                500x500
              </text> */}
            </img>
          </div>
        </div>

        <hr class="featurette-divider" />

        {/* <!-- /END THE FEATURETTES --> */}
      </div>

      <div class="card text-center footer pt-5">
        <div class="card-header pt-5">Featured</div>
        <div class="card-body">
          <h5 class="card-title">Generate | Share | Verify</h5>
          <div class="container">
            <div class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
              <div class="col-md-4 d-flex align-items-center content pt-3">
                <a
                  href="/"
                  class="mb-3 me-3 mb-md-0 lh-1"
                >
                  {/* <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
                  <h1>Certisys</h1>
                </a>
                <span class="mb-3  mb-md-0 ">
                  © 2023 Company, Inc
                </span>
              </div>

              <ul class="nav col-md-4 justify-content-center d-flex">
                <li class="ms-3">
                  <a href="/Generate">
                    <h5>Generate</h5>
                  </a>
                </li>
                <li class="ms-3">
                  <a href="/Verify">
                    <h5>Verify</h5>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p> */}
          
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
}
