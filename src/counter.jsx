import { useState } from "react";
import './counter.css'


function Counter(){
    const [count,setCount] = useState(0);
    return(
        <div className="file">
        <h1>Counter App</h1>
        <h2>
            {count}
        </h2>
        <div className="box">

        <button id="file2" onClick={()=>setCount(count +1)}>Increment</button>
        <button id="file3" onClick={()=>setCount(count -1)}>Decrement</button>
        </div>


        </div>
    )
}
export default Counter;