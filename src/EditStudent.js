import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Store } from "./StoreCompo";

function EditStudent(){
    const contextData = useContext(Store)
    const index = useParams().id
    const nav = useNavigate()
    // console.log(contextData);
    // console.log(index);
    // console.log(contextData.data[index]);

    const updateObj = {
        name : contextData.data[index].name,
        age: contextData.data[index].age,
        course: contextData.data[index].course,
        batch: contextData.data[index].batch
    }

    const handleChange = (e)=>{
        // console.log(e.target.name);
        updateObj[e.target.name] = e.target.value
    }

    const handleSubmit = ()=>{
        // console.log(updateObj);
        contextData.data[index] = updateObj
        nav('/student')
    }
    return(
        <>
            <h1>This is Edit Form</h1>
            <label>Name</label>
            <input type="text" placeholder={contextData.data[index].name} name='name' onChange={handleChange}/> <br/>
            <label>Age</label>
            <input type="number" placeholder={contextData.data[index].age} name='age' onChange={handleChange}/> <br/>
            <label>Course</label>
            <input type="text" placeholder={contextData.data[index].course} name='course' onChange={handleChange}/> <br/>
            <label>Batch</label>
            <input type="text" placeholder={contextData.data[index].batch} name='batch' onChange={handleChange}/> <br/>

            <button onClick={()=> nav('/student')}>Back</button>
            <button onClick={handleSubmit}>Update</button>
        </>
    )
}
export default EditStudent