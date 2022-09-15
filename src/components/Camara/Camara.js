
// import React, { useState, useEffect, useRef } from 'react';
// import axios from "axios";


// const API = process.env.REACT_APP_API;

// export const Camara = () => {

//   const [pred, setPred]= useState(false);
//   const [llamar, setLlamar]= useState(false);
//   const videoRef = useRef(null);
//   const photoRef = useRef(null);
//   const [hasPhoto, setHasPhoto] = useState(false);
//   // const [image, setImage] = useState({'file':''});
//   const [infoPredict, setInfoPredict] = useState({
//     nombre: '',
//     nombre_cientifico: '',
//     propiedades: '',


//   })

//   const getVideo = () =>{


//       navigator.mediaDevices
//       .getUserMedia({
//         video: true, video: {width: 320, height: 270},
//       })
//       .then(stream => {
//         let video = videoRef.current;
//         video.srcObject = stream;
//         video.play();
//       })
//       .catch(err => {
//         console.error(err);
//       })
//   }

//   const takePhoto = async (e)  =>{
//     const width = 320;
//     const height = width / (14/12);
//     let video = videoRef.current;
//     let photo = photoRef.current;

//     photo.width = width;
//     photo.height = height;
//     let context = photo.getContext('2d');
//     context.drawImage(video, 0, 0, width, height);
//     setHasPhoto(true);
//     // console.log(photo.toDataURL('image/jpg'));
    
//     let pathfile = photo.toDataURL('image/jpg').split(";base64,").pop();
//   //  setImage({"file": pathfile});
//     console.log(JSON.parse(localStorage.getItem('login')).email + '' + Math.random())
//     var nombre= JSON.parse(localStorage.getItem('login')).email + '' + Math.random()+ ".png"
//     localStorage.setItem('photo', nombre)

//    axios.post(`${API}prediccion img save`, {'json':pathfile, 'nombre': nombre},{
//     }).then((response) => {
//       console.log(response);
      
//       setPred(true)
//     });

//   //  await axios.post(`${API}prediccion`, pathfile);
//   //  await axios.post(`${API}prediccion`, {'json':pathfile});
//     // console.log(photo.URL.toDataURL(e.target.files[0]));
//     // let image64 = URL.createObjectURL(e.target.files[0])
//   }

//   const onChangePicture = () => {
//     // console.log(image.file)
//     axios.post(`${API}predict`, {'photo' : localStorage.getItem('photo') },{
//     }).then((response) => {
//         console.log(response.data);
//         setInfoPredict({nombre: response.data})
//         setLlamar(true)
//       });
// };

//   useEffect(() => {
//     getVideo();
//   }, [videoRef]);

  
//     return (
//         <div>
//           <center><h4> RECONOCIMIENTO DE LA PLANTA</h4></center>
//             <br/>
//             <div className='camera'>
//             <center>
//               <video  ref={videoRef}></video>
//             </center>
//             </div>

//             <div>
//             <center>
//               <button className='btn btn-dark' onClick={takePhoto} >CAPTURAR IMAGEN</button>
//               {/* <button onClick={onChangePicture} >PREDICCION</button> */}
//               {/* <button onClick={onChangePicture} >guardar</button> */}
//             </center>
//             </div>



//             <center>
//               <h1></h1>
//               <h1></h1>
              
//             <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
//               <canvas ref ={photoRef}></canvas>
              
//               {/* <button>guardar</button> */}
//             </div>



//             {pred &&
//             <div>
//             <button  className='btn btn-dark' onClick={onChangePicture} >PREDECIR</button>

//             </div>

//             }
//             {llamar &&
//             <>
//             <h1></h1>
//             <h1></h1>
//             <h1></h1>
//             <h1></h1>
//             <h4>{infoPredict.nombre}</h4>
//               <p></p>
//             </>

//             }

//             </center>  
//         </div>
//     );
// };





import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";


const API = process.env.REACT_APP_API;

export const Camara = () => {

  const [pred, setPred]= useState(false);
  const [llamar, setLlamar]= useState(false);
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  // const [image, setImage] = useState({'file':''});
  const [infoPredict, setInfoPredict] = useState({
    nombre: '',
    nombre_cientifico: '',
    propiedades: '',


  })

  const getVideo = () =>{


      // navigator.mediaDevices
      // .getUserMedia({
      //   video: {width: 700, height: 400}
      // })
      // .then(stream => {
        let video = videoRef.current;
      //   video.srcObject = stream;
      //   video.play();
      // })
      // .catch(err => {
      //   console.error(err);
      // })

      if (!("mediaDevices" in navigator)) {
        navigator.mediaDevices = {};
      }
      
      if (!("getUserMedia" in navigator.mediaDevices)) {
        navigator.mediaDevices.getUserMedia = function (constraints) {var getUserMedia = navigator.webkitGetUserMedia  || navigator.mozGetUserMedia;
          if (!getUserMedia) {
            return Promise.reject(new Error(
                "getUserMedia is not implemented!"));
          }
      
          return new Promise(function (resolve, reject) {
            getUserMedia.call(navigator, 
                constraints, resolve, reject);
          });
        };
      }
      
      navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
        video.play();

      })
      .catch(function (err) {
        console.log(err);

      });
        
  }

  const takePhoto = async (e)  =>{
    const width = 414;
    const height = width / (16/9);
    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;
    let context = photo.getContext('2d');
    context.drawImage(video, 0, 0, width, height);
    setHasPhoto(true);
    // console.log(photo.toDataURL('image/jpg'));
    
    let pathfile = photo.toDataURL('image/jpg').split(";base64,").pop();
  //  setImage({"file": pathfile});
    console.log(JSON.parse(localStorage.getItem('login')).email + '' + Math.random())
    var nombre= JSON.parse(localStorage.getItem('login')).email + '' + Math.random()+ ".png"
    localStorage.setItem('photo', nombre)

   axios.post(`${API}prediccion img save`, {'json':pathfile, 'nombre': nombre},{
    }).then((response) => {
      console.log(response);
      
      setPred(true)
    });

  //  await axios.post(`${API}prediccion`, pathfile);
  //  await axios.post(`${API}prediccion`, {'json':pathfile});
    // console.log(photo.URL.toDataURL(e.target.files[0]));
    // let image64 = URL.createObjectURL(e.target.files[0])
  }

  const onChangePicture = () => {
    // console.log(image.file)
    axios.post(`${API}predict`, {'photo' : localStorage.getItem('photo') },{
    }).then((response) => {
        console.log(response.data);
        setInfoPredict({nombre: response.data})
        setLlamar(true)
      });
};

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  
    return (
        <div>
            <div className='camera'>
            <center>
              <video  ref={videoRef}></video>
            </center>
            </div>

            <div>
            <center>
              <button className='btn btn-dark' onClick={takePhoto} >CAPTURAR IMAGEN</button>
              {/* <button onClick={onChangePicture} >PREDICCION</button> */}
              {/* <button onClick={onChangePicture} >guardar</button> */}
            </center>
            </div>



            <center>
              <h1></h1>
              <h1></h1>
              
            <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
              <canvas ref ={photoRef}></canvas>
              
              {/* <button>guardar</button> */}
            </div>



            {pred &&
            <div>
            <button  className='btn btn-dark' onClick={onChangePicture} >PREDECIR</button>

            </div>

            }
            {llamar &&
            <>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h4>{infoPredict.nombre}</h4>
              <p></p>
            </>

            }

            </center>  
        </div>
    );
};




// // Get color Console Libary
// require('pretty-console-colors');

// // Show pretty console logs
// console.log('👋 Log: Hi from NodeJS');

// // Include dependences
// const fs = require('fs');
// const Koa = require('koa');
// const serve = require('koa-static');
// const Router = require('@koa/router');
// const multer = require('@koa/multer');

// const app = new Koa();
// const router = new Router();
// const upload = multer();

// // Function for create file static with filename and content.
// const saveFile = async (file) =>
//   new Promise((resolve, reject) =>
//     fs.writeFile('./src/uploads/' + file.originalname, file.buffer, (err) =>
//       err ? reject('An error occurred: ' + err.message)
//           : resolve({ uploaded: true })));

// // Endpoint Upload.
// router.post('/upload', upload.single('photo'),async (ctx) => {
//     // Control for get file on request.
//     if (!ctx.request.file) 
//     ctx.throw('Cannot find file on request');
    
//     // Try create local file with content.
//     try {
//       ctx.body = await saveFile(ctx.request.file);
//     } catch (err) {
//       console.log(err);
//       ctx.throw(err, 500);
//     }
//   }
// );

// // Declare Static Folder.
// app.use(serve('./src'));

// // add the router to our app
// app.use(router.routes());
// app.use(router.allowedMethods());
 
// // Run
// app.listen(3001);

// //////////////////////////////////////////////

// window.onload = function(e){ 

//   // Declare init HTML elements
//   const camera = document.querySelector('#camera');
//   const photo = document.querySelector('#photo');
//   const open = document.querySelector('#open');

//   // Event to active input type file
//   open.addEventListener('click', function(){
//     camera.click();
//   });
  
//   // Event on change content type file
//   camera.addEventListener('change', function(e) {
//     // Create url object and show Photo from BLOB Object.
//     photo.src = URL.createObjectURL(e.target.files[0]);

//     // Create Http Request Instance.
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) console.log(xhttp.responseText);
//     };
//     // Create Data Form Instance.
//     const formData = new FormData();
//     // Add blob object into instance.
//     formData.append("photo", e.target.files[0]);
//     // Open and send data to endpoint /upload
//     xhttp.open('POST', window.location.href + 'upload', true);
//     xhttp.send(formData);
//   });
// }
