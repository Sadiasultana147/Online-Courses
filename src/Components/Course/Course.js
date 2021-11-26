import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    const { name, image,fee,description} =props.course;
    return (
      <Col  className=" col " >
      <Card className ="card " >
        <Card.Img variant="top" src={image} className=" mt-4 rounded mx-auto d-block img"  />
        <Card.Body>
          <Card.Title style={{ height: '90%'   }} className="letter" >{name} </Card.Title>
          <Card.Text>
            {description}

          <div>
              <h3>${fee}</h3>
          </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Course;