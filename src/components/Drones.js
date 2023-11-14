import Drone from "./Drone"

import {data as drones} from '../DroneData'

const Drones = () =>{
    return (
        <div className="main-container">
            <span className="title">Drones</span>
            <div className="container">

            </div>
           { drones.map((drone) =>(<div className='card' key={drone.SN} >
        <Drone drone ={drone}/>
      </div>))}
        </div>
    
      
    )
  }
  export default Drones;