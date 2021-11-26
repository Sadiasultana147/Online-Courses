import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {

     const {name, image,fee,description} =props.service;
    return (
        <Col style={{ width: '30%'   }} className="ps-5  ms-4 col " >
        <Card className ="card " >
          <Card.Img variant="top" src={image} className=" mt-4 rounded mx-auto d-block img"  />
          <Card.Body>
            <Card.Title className="letter"  >{name} </Card.Title>
            <Card.Text>
             <p className="letter1"> {description}</p>
  
            <div>
                <h3>${fee}</h3>
            </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Service;



