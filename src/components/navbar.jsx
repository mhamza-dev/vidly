import React, { Component } from "react";
// StateLess Functional Component.

const Navbar = ({ totalCounters }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar{" "}
            <span className="badge rounded-pill bg-secondary">
              {totalCounters}
            </span>
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};
// class Navbar extends Component {
//     state = {  }
//     render() {
//         return (
//           <React.Fragment>
//             <nav className="navbar navbar-light bg-light">
//               <div className="container-fluid">
//                 <a className="navbar-brand" href="#">
//                   Navbar{" "}
//                   <span className="badge rounded-pill bg-secondary">
//                     {this.props.totalCounters}
//                   </span>
//                 </a>
//               </div>
//             </nav>
//           </React.Fragment>
//         );
//     }
// }

export default Navbar;
