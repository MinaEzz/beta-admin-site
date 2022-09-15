import React, { Fragment } from 'react'
import { Form, Button } from 'react-bootstrap'
import "../css/add-course.css"

function AddCourse() {
  return (
    <Fragment>
      <section id='add-course' className='pd-y mg-t'>
        <h2>add course</h2>
        <div className="container">
          <div className="row">
            <div className='col-12'>
              <Form className='add-form'>
            <Form.Group className='form-group'>
              <Form.Label className='label'>Course Name</Form.Label>
              <Form.Control type="text" placeholder="Course Name" className='inputt' />
            </Form.Group>
            <Form.Group className='form-group'>
              <Form.Label className='label'>Course Image</Form.Label>
              <input type="file" className='inputt'/>
            </Form.Group>
            <Form.Group className='form-group'>
              <Form.Label className='label'>Course Description</Form.Label>
              <Form.Control as="textarea" rows={5} className='inputt' placeholder='Description ...' />
            </Form.Group>
              <Button className='btn btn-primary' type="submit">Add</Button>
            </Form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default AddCourse