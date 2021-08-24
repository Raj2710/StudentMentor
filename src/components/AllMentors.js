import React, {useEffect,useState} from 'react'
import axios from 'axios';
function AllMentors() {

    let [data,setData]=useState([]);

    async function getData(){
        let response = await axios.get("https://stumen.herokuapp.com/all-mentors")
        setData(response.data);
        console.log(response.data);
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        <div className="all-wrapper">
            <table className="table table-striped table-hover">
                <tbody>
                <tr>
                    <th>Mentor Name</th>
                    <th>Students</th>
                </tr>
                {
                    data.map((e,i)=>{
                        return <tr key={e._id}>
                            <td>{e.mentorName}</td>
                            <td>
                                <table>
                                    <tbody>
                                        {
                                            e.mentorStudents?e.mentorStudents.map((f,i)=>{
                                                return <tr key={i}><td>{f}</td></tr>
                                            }):<></>
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
