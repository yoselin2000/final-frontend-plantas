// import React, { useState, useEffect, useRef } from 'react';
// import './static/css/main.css';
// import axios from "axios";

// const API = process.env.REACT_APP_API;

// export const reconocerImagen = ()=> {

// const recon_imag = async (e)  =>{
// await axios.post(`${API}predict`);
// }
//     return (
//       <div>
//         <center><h2>Reconocimiento de imagen</h2></center>
//         <form id="upload-file" method="post" enctype="multipart/form-data">
//               <label for="imageUpload" className="upload-label">
//                   Elegir Imagen
//               </label>
//               <input type="file" name="file" id="imageUpload" accept=".*" />
//           </form>

//           <div className="image-section" style={{display: "none"}}>
//               <div className="img-preview">
//                   <div id="imagePreview">
//                   </div>
//               </div>
//               <div>
//                   <button type="button" className="btn btn-dark" id="btn-predict" onClick={recon_imag}>Predicción</button>
//               </div>
//           </div>

//           <div className="loader" style={{display: "none"}}></div>


//           <footer>
//               <script src="{{ url_for('static', filename='js/main.js') }}" type="text/javascript"></script>    
//           </footer>

//       </div>
//     );
//   }

// export default reconocerImagen;

