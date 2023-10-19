import React, { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Store } from './StoreCompo';

export default function Student() {
  let data = useContext(Store);
  let nav = useNavigate()

  return (
    <div className='stu'>
      <div className='title'>
        <h1>Student Details</h1>
        <button id='btn' onClick={()=> nav('/StuContact')}>Add New Student</button>
      </div>

      <table id='table' border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((item, index)=>{
            return(
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.course}</td>
                <td>{item.batch}</td>
                <td><Link to={`/student/${index}`}>Edit</Link></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
