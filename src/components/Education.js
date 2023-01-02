
import React, { useState } from "react";

const Education = () => {
  const [name, setName] = useState("");
  const [gpa, setGpa] = useState("");
  const [course, setCourse] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const [edu, setEdu] = useState([]);

  const Add = () => {
    const term = {
      name,
      gpa,
      course,
      start,
      end,
    };
    setEdu([...edu, term])
    setName('')
    setGpa('')
    setCourse('')
    setStart('')
    setEnd('')
  };
  return (
    <>
      <h1>
        <center>Education Details</center>
      </h1>

      <input
        type="text"
        placeholder="Insitution Name ....."
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Percentage ....."
        required
        onChange={(e) => setGpa(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course ....."
        required
        onChange={(e) => setCourse(e.target.value)}
      />
      <input
        type="date"
        placeholder="Start Date"
        required
        onChange={(e) => setStart(e.target.value)}
      />
      <input
        type="date"
        placeholder="End Date"
        onChange={(e) => setEnd(e.target.value)}
      />
      <button name="Add" onClick={Add}>
        Add
      </button>
      {
         edu.map((edu)=>{
            return(
                <>
                <p>{edu.name}</p>
                <p>{edu.gpa}</p>
                <p>{edu.course}</p>
                <p>{edu.start}</p>
                <p>{edu.end}</p>
                <hr />
                </>
            )
         })
      }
    </>
  );
};

export default Education;
