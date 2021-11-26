import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import  './Home.css';


const Home = () => {
    const [services,setService] = useState([]);

    useEffect(()=>{
        fetch('./programmingLanguage.Json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
           

         <div className ="bg">
                <h1>LEARN FROM THE BEST</h1>
                <h4>Get Ahead, Improve Your Skill with Programming- Skill-Center Training Academy</h4>

                <h5>Get Hands On Experience in Real World Software Development from Industry Experts Through Practical and Real World Courses.</h5>

    
         </div>
                 
            
            {
                 <Row xs={4} md={3} className="g-5">

                
                 {
                     services.map(course=> <Course  key = {course.id} course ={course}
                            
                     >
     
                     </Course>)
                     
                 }
       
                 </Row>
            }
        </div>
       
    );
};

export default Home;