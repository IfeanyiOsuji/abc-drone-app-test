import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Drones from './components/Drones';



const medications = [
  {"name" : "paracetamol",
    "weigth" : 50,
    "code" : "za10023",
    "image" : ""
},
{"name" : "panadol",
    "weigth" : 50,
    "code" : "za10004",
    "image" : ""
},
]







function App() {
  return (
    <div className = "container">
     <Drones />
    </div>
  );
}

export default App;
