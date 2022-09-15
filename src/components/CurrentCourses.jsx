import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import "../css/current-courses.css"

function CurrentCourses() {
  return (
    <Fragment>
      <section id='current-courses' className='pd-y mg-t'>
        <h2>current courses</h2>
        <div className="container">
        <Link to={"/addCourse"} className="btn"><AddIcon/>add course</Link>
          <div className="row">
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default CurrentCourses