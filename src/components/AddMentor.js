import {useEffect,useState} from 'react'
import '../index.css'
import Select from 'react-select';
import axios from 'axios'
function AddMentor() {
    let [mName,setmName]=useState("");
    let [sName,setsName]=useState([]);
    let [res,setRes]=useState("");
    let [options,setOptions]=useState([]);

    async function getData(){
        await axios.get("https://stumen.herokuapp.com/all-students")
        .then((response)=>{
            response.data.map((e)=>{
                if(!e.studentMentor){
                    options.push({
                        value:options.length+1,
                        label:e.studentName
                    })
                }
            })
            console.log(options);
        })
        .catch((error)=>console.log(error))
    }
    useEffect(()=>{
        getData();
    },[])

    let handleEvent = async()=>{
        await axios.post("https://stumen.herokuapp.com/add-mentor",{
            mentorName:mName,
            mentorStudents:sName
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

    let UpdateSelected = (e)=>{
        setsName(Array.isArray(e)?e.map(x=>x.label):[])
    }
    return (
        <div className="add-wrapper">
            <h3>Add Mentor</h3>
            <div className="inputfileds">
                <label>Mentor Name* :</label><input className="input" type="text" placeholder="Mentor" required={true} onChange={(e)=>setmName(e.target.value)}></input>
                <label>Student Name :</label>
                <Select isMulti options={options} className="input" displayValue="Student" onChange={UpdateSelected}/>
            </div>
            <br></br>
            <button className="btn" onClick={handleEvent}>Add</button>
            <div>{res}</div>
        </div>
    )
}

export default AddMentor
