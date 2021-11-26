import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './MoreService.css'

const MoreServices = () => {

    const [services,setService] = useState([]);

    useEffect(()=>{
        fetch('./programmingLanguage02.Json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
            <h1 className="w" > WELCOME TO OUR SERVICES </h1>
            <h4>Feel Free To Choice Your Course</h4>

            {
                 <Row xs={4} md={3} className="g-5">

                
                 {
                     services.map(service=> <Service service ={service}
                             key = {services.id}
                     >
     
                     </Service>)
                     
                 }
       
                 </Row>
            }
        </div>
                 
                   
                  
       
    );
};

export default MoreServices;