import React from 'react'
import {Link} from 'react-router-dom'
import {NavDropdown } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import img from "./img/agrecol.png";

const logout = () =>{
  localStorage.clear()
  localStorage.clear()
  window.location.href = '/'
};

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
        {/* <Link className="navbar-brand" to="/"> | AGRECOL Andes | </Link> */}

        <a href="/Principal">
        <img  src={img} witdh="140" height="120"
        />
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            {/* <NavDropdown  title="RECONOCER">
            <li>
              <Link className="nav-link" to="/reconocerImagen">Reconocer Imagen</Link>
            </li>

            <li>
              <Link className="nav-link" to="/Camara">Camara</Link>
            </li>
            
            
            </NavDropdown> */}

            <li>
              <Link className="nav-link" to="/Camara">Camara</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/About">Informacion</Link>
            </li>

            <li>
              <Link className="nav-link" to="/Geolocalizacion">Geolocalizacion</Link>
            </li>

          {localStorage.getItem('login')?
            <>
              <li>
                <Link className="nav-link" to="/Users">Usuarios</Link>
              </li>

              <li>
                <Link className="nav-link" to="/Plantas_medicinales">Plantas_medicinales</Link>
              </li>

            </>
            :<></>}

            {localStorage.getItem('login')&&
              <NavDropdown title={JSON.parse(localStorage.getItem('login')).email}>
                <DropdownItem href={"/"} onClick={logout}>Cerrar Sesion</DropdownItem>
              </NavDropdown>
            } 
            
          </ul>
        </div>
      </nav>
);






// import React from 'react'
// import {Link} from 'react-router-dom'
// import {NavDropdown } from 'react-bootstrap';
// import DropdownItem from 'react-bootstrap/esm/DropdownItem';
// import img from "./img/agrecol.png";

// const logout = () =>{
//   localStorage.clear()
//   localStorage.clear()
//   window.location.href = '/'
// };

// export const Navbar = () => (
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//       <a class="navbar-brand" href="#">Navbar</a>
//       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarNavDropdown">
//         <ul class="navbar-nav">
//           <li class="nav-item active">
//             <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="#">Features</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="#">Pricing</a>
//           </li>
//           <li class="nav-item dropdown">
//             <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//               Dropdown link
//             </a>
//             <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//               <a class="dropdown-item" href="#">Action</a>
//               <a class="dropdown-item" href="#">Another action</a>
//               <a class="dropdown-item" href="#">Something else here</a>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </nav>
// );

