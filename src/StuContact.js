import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Store } from "./StoreCompo";
import { useContext } from 'react';

export default function StuContact() {
  let navigate = useNavigate()
  const contextData = useContext(Store);
  let newObj = {
      stuName: "",
      stuAge: "",
      stuCourse: "",
      stuBatch: "",
  }

  const handleChange = (e) => {
      newObj[e.target.name] = e.target.value;
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      contextData.data.push(newObj);
      navigate('/student');
    }
    console.log(contextData);

  return (
    <div id='data'>
      <div id='inputDetails'>
        <input type="text" name='stuName' placeholder='Enter Student Name' className='stuDescInput' onChange={handleChange} />
        <input type="number" name='stuAge' placeholder='Enter Student Age' className='stuDescInput' onChange={handleChange} />
      </div>
      <div id='inputDetails'>
        <input type="text" name='stuCourse' placeholder="Enter Student's Course" className='stuDescInput' onChange={handleChange} />
        <input type="text" name='stuBatch' placeholder="Enter Student's Batch" className='stuDescInput' onChange={handleChange} />
      </div>
        <div id='inputDetails'>
          <button id='back' onClick={()=> navigate(-1)}>Back</button>
          <button id='update' onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}
