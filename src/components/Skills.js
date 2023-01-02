import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

function Skills(props){
    const [input, setInput] = useState();
    const [Skills, setSkills] = useState([]);
    const Add =()=>{
        // console.log(input);
        if(input){setSkills([...Skills,input])}
        setInput('')
    }
    const Delete = (id)=>{
        const remove = Skills.filter(x=>{
            return x.id !==
             id
        })
        setSkills(remove)
    }
    return(
        <div>
            <h1><center>{props.name}</center></h1>
        <TextField
          id="filled-required"
          label={props.name}
          variant="filled"
          value= {input}
          onChange={(e)=>setInput(e.target.value)}
        />
        <button onClick={Add}>Add</button>
        {
            Skills.map((Skill)=>{
                return(
                    <>
                    <p>{Skill} 
                    <button onClick={()=>Delete(Skill.id)}>Del</button></p>
                    </>
                )
            })
        }
        </div>

    );
}

export default Skills;