import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Store } from "./StoreCompo";

function EditStudent(){
    const contextData = useContext(Store)
    const index = useParams().id
    const nav = useNavigate()

    const updateObj = {
        name : contextData.data[index].name,
        age: contextData.data[index].age,
        course: contextData.data[index].course,
        batch: contextData.data[index].batch
    }

    const handleChange = (e)=>{
        updateObj[e.target.name] = e.target.value
    }

    const handleSubmit = ()=>{
        contextData.data[index] = updateObj
        nav('/student')
    }
    return(
        <>
            <h1>Edit Form</h1>
            <div id='inputDetails'>
                <span>
                    <label>Name: </label>
                    <input type="text" placeholder={contextData.data[index].name} name='name' onChange={handleChange}/> <br/>
                </span>
                <span>
                    <label>Age: </label>
                    <input type="number" placeholder={contextData.data[index].age} name='age' onChange={handleChange}/> <br/>
                </span>
                
            </div>
            <div id='inputDetails'>
                <span>
                    <label>Course: </label>
                    <input type="text" placeholder={contextData.data[index].course} name='course' onChange={handleChange}/> <br/>
                </span>
                <span>
                    <label>Batch</label>
                    <input type="text" placeholder={contextData.data[index].batch} name='batch' onChange={handleChange}/> <br/>
                </span>
            </div>
            <div id='inputDetails'>
                <button id='back' onClick={()=> nav('/student')}>Back</button>
                <button id='update' onClick={handleSubmit}>Update</button>
            </div>
        </>
    )
}
export default EditStudent