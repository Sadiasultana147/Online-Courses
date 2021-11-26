import React from 'react';

import './Student.css'


const Student = (props) => {
    const {name, image,batch} =props.student;
    return (
      <div>
          <img className="image" src={image} alt="" />
          <hr />
          <div className="word">
          <h1> {name}</h1>
          <hr />
          <h4>batch: {batch}</h4>
          </div>

</div>
       
    );
};

export default Student;





