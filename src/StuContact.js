import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Store } from "./StoreCompo";
import { useContext } from 'react';

export default function StuContact() {
  let navigate = useNavigate()
  const contextData = useContext(Store);
  let newObj = {
      name: "",
      age: "",
      course: "",
      batch: "",
  }

  const handleChange = (e) => {
      newObj[e.target.name] = e.target.value;
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      contextData.data.push(newObj);
      navigate('/student');
    }

  return (
    <div id='data'>
      <h1>New Student Form :</h1>
      <div id='inputDetails'>
        <span>
          <label>Name: </label>
          <input type="text" name='name' placeholder='Enter Student Name' className='stuDescInput' onChange={handleChange} />
        </span>
        <span>
          <label>Age: </label>
          <input type="number" name='age' placeholder='Enter Student Age' className='stuDescInput' onChange={handleChange} />
        </span>
      </div>
      
      <div id='inputDetails'>
        <span>
          <label>Course: </label>
          <input type="text" name='course' placeholder="Enter Student's Course" className='stuDescInput' onChange={handleChange} />
        </span>
        <span>
          <label>Batch: </label>
          <input type="text" name='batch' placeholder="Enter Student's Batch" className='stuDescInput' onChange={handleChange} />
        </span>
      </div>
      <div id='inputDetails'>
        <button id='back' onClick={()=> navigate(-1)}>Back</button>
        <button id='update' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}
