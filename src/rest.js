import { useEffect, useState } from "react";
import axios from 'axios';

const Rest = () =>{
    const [drone, loadDrone] = useState([]);
    
    useEffect(()=>{
       axios.get("/drones")
       .then(response =>{
        loadDrone(response.data)
       })
       .catch(error => {
        console.error(error)
       });
       

    }, [])

}
export default Rest;