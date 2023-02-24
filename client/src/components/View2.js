import React from 'react';
import Certificate from './Certificate';
import Generate from './Generate';



// class View extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       fname: "",
//       org: "",
//       cert: "",
//       email:"",
//       idate:"",
//       vdate:""

//     };

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }

//   render() {

class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: '',
      course: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {


// export default function View() {
    
return (
      <div>
        {/* <Generate /> */}
        {/* <Certificate name={this.state.name} course={this.state.course} /> */}
        <Certificate fname={this.state.fname}
                  org={this.state.org}
                  cert={this.state.cert}
                  email={this.state.email} 
                  idate={this.state.idate}
                  vdate={this.state.vdate}
                   />
      </div>
    );
  }

}
export default View;