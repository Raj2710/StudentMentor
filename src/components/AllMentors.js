import React, {useEffect,useState} from 'react'
import axios from 'axios';
import './All.css'
function AllMentors() {

    let [data,setData]=useState([]);

    async function getData(){
        let response = await axios.get("https://stumen.herokuapp.com/all-mentors")
        setData(response.data);
        //console.log(response.data);
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        <div className="all-wrapper">
            <table>
                <tbody>
                <tr>
                    <th>Student Name</th>
                    <th>Mentor Name</th>
                </tr>
                {
                    data.map((e,i)=>{
                        return <tr key={e._id}>
                            <td>{e.mentorName}</td>
                            <td>
                                <table>
                                    <tbody>
                                        {
                                            e.mentorStudents.map((f,i)=>{
                                                return <tr key={i}><td>{f}</td></tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default AllMentors
