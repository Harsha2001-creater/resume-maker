import React, { useState } from 'react';

function Discription(props){
    const [input, setInput] = useState();
    const [dis, setDis] = useState([]);
    const Add =()=>{
        // console.log(input);
        if(input){setDis([...dis,input])}
        setInput('')
    }
   
    return(
        <div>
        <input
          id="filled-required"
          placeholder='discription'
          value= {input}
          onChange={(e)=>setInput(e.target.value)}
        />
        <button onClick={Add}>Add</button>
        
        </div>

    );
}

export default Discription;