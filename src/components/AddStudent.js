import React,{useEffect,useState} from 'react'
import axios from "axios"
import '../index.css'
function AddStudent() {
    let [sName,setsName]=useState("");
    let [mName,setmName]=useState("");
    let [data,setData]=useState([]);
    let [res,setRes]=useState("");
    async function getData(){
        let response = await axios.get("https://stumen.herokuapp.com/all-mentors")
        setData(response.data);
        console.log(response.data);
    }
    useEffect(()=>{
        getData();
    },[])

    let handleEvent = async ()=>{
        await axios.post("https://stumen.herokuapp.com/add-student",{
            studentName:sName,
            studentMentor:mName
        })
        .then((res)=>{
            setRes(res.data.message)
            setTimeout(()=>{
                window.location.reload();
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div className="add-wrapper">
            <h3>Add Student</h3>
            <div className="inputfileds">
                <label>Student Name * :</label> <input className="input" type="text" placeholder="Student" required={true} onChange={(e)=>setsName(e.target.value)}></input>
                <label>Mentor Name :</label>
                <select className="input" onChange={(e)=>setmName(e.target.value)}>
                    <option selected={true} disabled={true} hidden={true}>
                        Select an option
                    </option>
                    {
                        data.map((e,i)=>{
                            return <option key = {i}>{e.mentorName}</option>
                        })
                    }
                </select>
            </div>
            <br></br>
            <button className="btn" id="but" onClick={handleEvent}>Add</button>
            <div>{res}</div>
        </div>
    )
}

export default AddStudent
