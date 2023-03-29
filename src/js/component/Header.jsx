import React from "react";
export default function  Header () {
    return (
            <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex justify-content-end">
              <a className="nav-link text-light" aria-current="page" href="#">Home</a>
              <a className="nav-link text-light" href="#">About</a>
              <a className="nav-link text-light" href="#">Services</a>
              <a className="nav-link text-light">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  

//   <nav className="navbar navbar-expand-lg bg-dark px-3 ">
//   <div className="container-fluid">
//     <a className="navbar-brand text-light" href="#">
//       Start Bootstrap
//     </a>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarNav"
//       aria-controls="navbarNav"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse d-flex justify-content-end bg-danger" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a
//             className="nav-link active text-light"
//             aria-current="page"
//             href="#"
//           >
//             Home
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link text-light" href="#">
//             About
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link text-light" href="#">
//             Services
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link text-light" href="#">
//             Contact
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>