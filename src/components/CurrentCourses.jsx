import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Courses from '../data/Courses.json';
import { Button, Card } from 'react-bootstrap';
import "../css/current-courses.css";


function CurrentCourses() {
  return (
    <Fragment>
      <section id='current-courses' className='pd-y mg-t'>
        <h2>current courses</h2>
        <div className="container">
        <Link to={"/addCourse"} className="btn add-btn"><AddIcon/>add course</Link>
          <div className="row">
          {
                Courses.map(course =>{
                  return(
                    <div className="col-lg-4 col-md-6 col-12">
                    <div>
                    <Card className="course-card">
                    <Card.Img variant="top" src={course.image}></Card.Img>
                    <Card.Body>
                      <Card.Title>{course.title}</Card.Title>
                      <Card.Text>{course.description}</Card.Text>
                        <Button className="btn card-btn"> remove course </Button>
                    </Card.Body>
                    </Card>
                    </div>
                  </div>
                  )
                })
              }
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default CurrentCourses