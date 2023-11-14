import { useState } from "react";

const Drone = ({drone}) =>{
    const {model, weigth, battery_cap, state} = drone;
    const [dronewithMed, addMedToDrone] = useState(drone);

    
    return (
      <div>
        <li>
          <p>
           Model : {model}
          </p>
          <p>
            Weigth : {weigth}
          </p>
          <p>
           Battery Capacity :  {battery_cap}
          </p>
          <p>
            Drone State : {state}
          </p>
        </li>
       {weigth < 500 ? <div>
          select for Loading <a href="#"><button className='button'> Load drone</button></a>
        </div> : null
  }
      </div>
    )
  }
  export default Drone;