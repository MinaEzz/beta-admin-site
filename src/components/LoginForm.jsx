import React, { Fragment } from 'react';
import {Form} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../css/login-form.css";

function LoginForm() {
return (
    <Fragment>
        <section id='login-form' className='pd-y mg-t'>
            <div className="container">
            <Form className='form'>
                <h1>welcome <span>beta</span> admins</h1>
                <Form.Group controlId="formBasicEmail">

                    <Form.Control type="text" placeholder="User Name" className='input' required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" className='input' required />
                </Form.Group>
                <Link to={"/currentCourses"} className='btn' type="submit">login</Link>
            </Form>
            </div>
        </section>
    </Fragment>
)
}

export default LoginForm