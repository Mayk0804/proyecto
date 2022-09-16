import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddPersona from "./components/AddPersona";
import Persona from "./components/Persona";
import PersonaList from "./components/PersonaList";
import LogList from "./components/LogList";
function App() {
 return(<div>
 <nav className="navbar navbar-expand navbar-dark bg-dark">
 <a href="/persona" className="navbar-brand">
 UNA
 </a>
 <div className="navbar-nav mr-auto">
 <li className="nav-item">
 <Link to={"/persona"} className="nav-link">
 Lista de Personas
 </Link>
 </li>
 <li className="nav-item">
 <Link to={"/add"} className="nav-link">
 Agregar Persona
 </Link>
 </li>
 <li className="nav-item">
 <Link to={"/log"} className="nav-link">
 Lista de Logs
 </Link>
 </li>
 </div>
 </nav>
 <div className="container mt-3">
 <Routes>
 <Route path="/" element={<PersonaList/>} />
 <Route path="/persona" element={<PersonaList/>} />
 <Route path="/add" element={<AddPersona/>} />
 <Route path="/persona/:id" element={<Persona/>} />

 <Route path="/" element={<LogList/>} />
 <Route path="/log" element={<LogList/>} />
 </Routes>
 </div>
 </div>
);
}
 
export default App;