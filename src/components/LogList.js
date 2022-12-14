import React, { useState, useEffect } from "react";
import LogDataService from "../services/LogService";
import { Link } from "react-router-dom";
const LogList = () => {
 const [log, setLog] = useState([]);
 const [currentLog, setCurrentLog] = useState(null);
 const [currentIndex, setCurrentIndex] = useState(-1);
 
 useEffect(() => {
 retrievePersonas();
 }, []);
 
 const retrievePersonas = () => {
 PersonaDataService.getAll()
 .then(response => {
 setPersonas(response.data);
 console.log(response.data);
 })
 .catch(e => {
 console.log(e);
 });
 };
 const refreshList = () => {
 retrievePersonas();
 setCurrentPersona(null);
 setCurrentIndex(-1);
 };
 const setActivePersona = (persona, index) => {
 setCurrentPersona(persona);
 setCurrentIndex(index);
 };
 
 
 return (
 <div className="list row">
 
 <div className="col-md-6">
 <h4>Lista de Logs</h4>
 <ul className="list-group">
 {personas &&
 personas.map((persona, index) => (
 <li
 className={
 "list-group-item " + (index === currentIndex ? "active" : "")
 }
 onClick={() => setActivePersona(persona, index)}
 key={index}
 >
 {persona.nombre}
 </li>
 ))}
 </ul>
 </div>
 
 
 {/* <div className="col-md-6">
 {currentPersona ? (
 <div>
 <h4>Persona</h4>
 <div>
 <label>
 <strong>Identificacion:</strong>
 </label>{" "}
 {currentPersona.identificacion}
 </div>
 <div>
 <label>
 <strong>Nombre:</strong>
 </label>{" "}
 {currentPersona.nombre}
 </div>
 <div>
 <label>
 <strong>Fecha:</strong>
 </label>{" "}
 {currentPersona.fecha}
 </div>
 <Link
 to={"/personas/" + currentPersona.id}
 className="btn-success"
 >
 Edit
 </Link>
 </div>
 ) : (
 <div>
 <br />
 <p>Escoja una persona...</p>
 </div>
 )}
 </div> */}
 </div>
 
 );
 
};
export default LogList;