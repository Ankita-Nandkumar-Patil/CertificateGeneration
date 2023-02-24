import React from "react";
import Generate from "./Generate";
import View from "./View2";

const Certificate = (props) => {
  return (
    <div className="certificate">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <div class="card border-dark shadow-lg">
          <div class="card border-dark shadow-lg">
            <div class=" py-2 my-5 text-center">
              <img
                class="d-block mx-auto mb-2"
                src="../kkwlogo.png"
                alt=""
                width="190"
                height="170"
              />
              <h1 class="display-5 mb-4 fw-bold">Certificate of Appreciation</h1>
              <div class="col-lg-9 mx-auto">
                <h2 class="fw-bolder mb-3 text-uppercase" >
                  <h3>{props.fname}</h3>
                </h2>
                <p class="lead mb-4 lh-sm">
                This certificate is issued in recognition of your outstanding performance.
                We value what you have done what will you do in the years to come. 
                Thank you for your contribution in {props.org}
                </p>
                <div class="col-12 col-md text-start">
                  {/* <hr /> */}
                  <h5 class="mt-5">Principal </h5>
                </div>
                <div>
                <h6 class="text-start pt-5 ">Issued : {props.idate}</h6>
                
                </div>
                {/* <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg px-4 gap-3"
                    fdprocessedid="39po7p"
                  >
                    Primary button
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-lg px-4"
                    fdprocessedid="caphyg"
                  >
                    Secondary
                  </button>
                </div> */}


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

// const Certificate = props => {
//   return (
//     <div className="certificate">
//       <h1>Certificate of Completion</h1>
//       <h2>This certificate is presented to</h2>
//       <h3>{props.fname}</h3>
//       <h4>for successfully completing the course</h4>
//       <h5>{props.cert}</h5>
//       <h5>Given by Organization :</h5>
//       <h4>{props.org}</h4>

//       <h6>Issuing date:</h6>
//       <h6>{props.idate}</h6>

//       <h6>Expiry  date:</h6>
//       <h6>{props.vdate}</h6>

//       <h6>Email id:</h6>
//       <h6>{props.email}</h6>

//     </div>
//   );
// };

export default Certificate;
