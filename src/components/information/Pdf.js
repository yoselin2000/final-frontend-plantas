// import React, { Component } from 'react'
// import PDF from 'jspdf'
// import img from '../img/agrecol.png'

// const styleH1 = {
//   fontSize: '15px',
//   textAlign: 'center',
//   color: 'red'
// };

// const invisibleStyle = {
//   display: 'none',
// };

// export const Pdf = () => {

//     const properties = { header: 'Acme' }
//     const head = [["ID", "Name", "Country"]]
//     const body = [
//         [1, "Shaw", "Tanzania"],
//         [2, "Nelson", "Kazakhstan"],
//         [3, "Garcia", "Madagascar"],
//     ]
//     return (
//       <React.Fragment>
//         <PDF
//           properties={properties}
//           preview={true}
//         >
//           {/* <Text x={35} y={25} size={40}>Octonyan loves jsPDF</Text> */}
//           <addImage src={img} x={15} y={40} width={180} height={180} />
//           <addPage />
//           <addPage format='a6' orientation='l' />
//           {/* <Text x={10} y={10} color='red'>Sample</Text> */}
//           {/* <Line x1={20} y1={20} x2={60} y2={20}/> */}
//           <addPage />
//           <html sourceById='page' />
//         </PDF>
//         <div id="page" style={invisibleStyle}>
//           <h1 style={styleH1}>Source Html</h1>
//             <p>
//               <strong>lorem ipsumLorem </strong>Ipsum is simply dummy text of the printing and
//               typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
//               since the 1500s, when an unknown printer took a galley of type and scrambled it to
//               make a type specimen book. It has survived not only five centuries, but also the
//               leap into electronic typesetting, remaining essentially unchanged. It was popularised
//               in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
//               and more recently with desktop publishing software like Aldus PageMaker including
//               versions of Lorem Ipsum.
//             </p>
//         </div>
//       </React.Fragment>
//     )
// }








// import React, { useState } from "react";
// import pdfmake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// import moment, { now } from "moment";
// import { extendMoment } from "moment-range";
// import DateTimePicker from "react-datetime-picker";
// import axios from "axios";
// pdfmake.vfs = pdfFonts.pdfMake.vfs;

// // const moment = extendMoment(Moment);
// moment.locale("es");

// const nows = moment().minutes(0).seconds(0).add(1, "hours");
// const nowone = nows.clone().add(1, "hours");

// const initReport = {
//   start: nows.toDate(),
//   end: nowone.toDate(),
// };
// let reporte = [];
// export const Pdf = ({ eventos }) => {
//   const [newdata, setNewData] = useState([]);

//   const [dateStart, setDateStart] = useState(nows.toDate());
//   const [dateEnd, setDateEnd] = useState(nowone.toDate());

//   const [formValues, setFormValues] = useState(initReport);

//   const { start, end } = formValues;

//   const handleStartDateChange = (e) => {
//     setDateStart(e);
//     setFormValues({
//       ...formValues,
//       start: e,
//     });
//   };
//   const handleEndDateChange = (e) => {
//     setDateEnd(e);
//     setFormValues({
//       ...formValues,
//       end: e,
//     });
//   };
//   function buildTableBody(data, columns) {
//     var body = [];

//     body.push(columns);

//     data.forEach(function (row) {
//       var dataRow = [];

//       columns.forEach(function (column) {
//         if (column === "start" || column === "end") {
//           dataRow.push(moment(row[column]).format("YYYY-MM-DD").toString());
//         } else {
//           dataRow.push(row[column]).toString();
//         }
//       });
//       body.push(dataRow);
//     });

//     return body;
//   }

//   function buildTableBodyReport(data, columns) {
//     var body = [];

//     body.push(columns);

//     data.forEach(function (row) {
//       var dataRow = [];

//       columns.forEach(function (column) {
//         if (column === "start" || column === "end") {
//           dataRow.push(moment(row[column]).format("YYYY-MM-DD").toString());
//         } else {
//           dataRow.push(row[column]).toString();
//         }
//       });
//       body.push(dataRow);
//     });

//     return body;
//   }
//   function table(data, columns) {
//     return {
//       table: {
//         headerRows: 1,
//         body: buildTableBody(data, columns),
//       },
//     };
//   }

//   var ddd = {
//     content: [
//       { text: "REPORTE DE EVENTOS", style: "header" },
//       table(eventos, ["title", "notes", "start", "end"]),
//     ],
//   };

//   const docDefinition = {
//     content: [
//       "This paragraph fills full width, as there are no columns. Next paragraph however consists of three columns",
//     ],
//   };
//   var dd = {
//     content: [
//       { text: "Tables", style: "header" },
//       "Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.",
//       {
//         text: "A simple table (no headers, no width specified, no spans, no styling)",
//         style: "subheader",
//       },
//       "The following table has nothing more than a body array",
//       {
//         style: "tableExample",
//         table: {
//           body: [
//             ["Evento", "Inicio", "Fin"],
//             // eventos.map((e) => (
//             //   ["e.title", "Another one here", "OK?"]
//             // ))
//             // eventos.forEach((row, index) => {
//             //   ["e.title", "Another one here", "OK?"]
//             // })
//             // ["e.title", "Another one here", "OK?"]
//           ],
//         },
//       },
//     ],
//     styles: {
//       header: {
//         fontSize: 18,
//         bold: true,
//         margin: [0, 0, 0, 10],
//       },
//       subheader: {
//         fontSize: 16,
//         bold: true,
//         margin: [0, 10, 0, 5],
//       },
//       tableExample: {
//         margin: [0, 5, 0, 15],
//       },
//       tableHeader: {
//         bold: true,
//         fontSize: 13,
//         color: "black",
//       },
//     },
//     defaultStyle: {
//       // alignment: 'justify'
//     },
//   };

//   const generarReporte = () => {
//     const pdf = pdfmake.createPdf(ddd);
//     pdf.open();
//   };

//   const handleSubmitForm = async (e) => {
//     e.preventDefault();
//     // const momentStart = moment(start).format();
//     // const momentEnd = moment(end).format();
//     // const res = await axios.put(`${process.env.REACT_APP_API_URL}/events`, {
//     //   start: momentStart,
//     //   end: momentEnd,
//     // });
//     // setNewData(res.data);
//     // console.log(newdata);
//     // console.log(momentStart,momentEnd)
//     // // console.log(momentStart, momentEnd);
//     // // eventos.forEach(function (item, index) {
//     // //   let date = moment(item.start).format("YYYY-MM-DD");
//     // //   if (moment(date).isAfter(momentStart, momentEnd)) {
//     // //     console.log("datarow", item.start, index);
//     // //     reporte.push(item);
//     // //   }
//     // // });
//     // // console.log("reportesss", reporte);
//     // // console.log("eventossss", eventos)
//     // // eventos.map(
//     // //   function (m) {
//     // //     let date = moment(m.start).format("YYYY-MM-DD");
//     // //     if (moment(date).isAfter(momentStart, momentEnd)) {
//     // //       console.log("resultado", m);
//     // //       setNewData(newdata.push(m.start))
//     // //     }
//     // //     return console.log(m.start);
//     // //   }
//     // //   // console.log(m)
//     // // );
//     // // console.log("data",newdata)
//     const pdf = pdfmake.createPdf(ddd);
//     pdf.open();
//   };
//   return (
//     <>
//       {/* <form className="container" onSubmit={handleSubmitForm}>
//         ReporteEventos
//         <div className="form-group">
//           <label>Fecha inicio</label>
//           <DateTimePicker
//             onChange={handleStartDateChange}
//             value={dateStart}
//             className={"form-control"}
//           />
//         </div>
//         <div className="form-group">
//           <label>Fecha final</label>
//           <DateTimePicker
//             onChange={handleEndDateChange}
//             value={dateEnd}
//             className={"form-control"}
//           />
//         </div>
//         <button type="submit">generar</button>
//       </form> */}
//       <button className="btn btn-success" onClick={handleSubmitForm}>GENERAR PDF</button>
//     </>
//   );
// };