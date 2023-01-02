import React ,{useState} from 'react'

const Experience = (props) =>{
    const [name,setName] = useState("");
    const [title,setTitle] = useState("");
    const [start,setStart] = useState("");
    const [end,setEnd] = useState("");

    const [all,setAll] = useState ("");

    const Add = () =>{
        const details={
            name,
            title,
            start,
            end
        }
        setAll([...all,details])
    }
    
    return(
        <>
        <h1><center>{props.name}</center></h1>
        <form action="">
            <input type="text" placeholder={props.placeholder} required onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder='Title' required onChange={(e)=>setTitle(e.target.value)}/>
            <input type="date" placeholder='Start Date' required onChange={(e)=>setStart(e.target.value)}/>
            <input type="date" placeholder='End Date' required onChange={(e)=>setEnd(e.target.value)}/>

            <button onClick={Add}>Add</button>

        </form>
        </>
    )
}

export default Experience;