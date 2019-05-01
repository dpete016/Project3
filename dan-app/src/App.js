import React from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";



import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

import logo from "./logo.png";

function App() {
  return (
    <Router>
      <div className="container">
        

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <a className="navbar-brand" href="https://dpete016.github.io/Updated-Portfolio/" rel="noopener noreferrer" target="_blank">
            <img src={logo} width="30" height="30" alt="Dan PF" />
         </a>
         <Link to="/" className="navbar-brand">Mern-Stack Todo App</Link>
         <div className="collapse nav-collapse">
           <ul className="navbar-nav mr-auto">
             <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
             </li>
             <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Todo</Link>
             </li>
           </ul>
         </div> 
        </nav>


        <Route path="/" exact component={TodosList} />
        <Route path="/" component={EditTodo} />
        <Route path="/" component={CreateTodo} />
      </div>
     
    </Router>
  );
}

export default App;
