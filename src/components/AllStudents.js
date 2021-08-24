import React, {useEffect,useState} from 'react'
import axios from 'axios';
function AllStudents() {
    let [data,setData]=useState([]);

    async function getData(){
        let response = await axios.get("https://stumen.herokuapp.com/all-students")
        setData(response.data);
        //console.log(response.data);
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        <div className="all-wrapper">
            <table className="table table-striped table-hover">
                <tbody>
                <tr>
                    <th>Student Name</th>
                    <th>Mentor Name</th>
                </tr>
                {
                    data.map((e)=>{
                        return <tr key={e._id}>
                            <td>{e.studentName}</td>
                            <td>{e.studentMentor}</td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default AllStudents
