import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Student from '../Student/Student';
import '../Student/Student.css'

const Students = () => {
    const [students,setStudent] = useState([]);

    useEffect(()=>{
        fetch('./Students.Json')
        .then(res=>res.json())
        .then(data=>setStudent(data))
    },[])
    return (
        <div>
            <h1 className ="word" > Our Total Students : {students.length}</h1>

            {
                 <Row xs={4} md={3} className="g-5">

                
                 {
                     students.map(student=> <Student student ={student}
                             key = {students.id}
                     >
     
                     </Student>)
                     
                 }
       
                 </Row>
            }
        </div>
    );
};

export default Students;