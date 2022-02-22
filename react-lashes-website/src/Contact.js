import React from 'react';
import { Form, FormControl, FormGroup, Button} from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import './Contact.css';

const Contact = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);  
    }


  return (
    <div className='contact-wrapper'>Contact
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="name" {...register('name', { required: true })}/>
        <input type="email" name="email" {...register('email',{ required: true })} />
        <input type="text" name="message" {...register('message', { required: true })}/>
        <input type="submit"/>
        </form>
        {/* <Form className='contact-form' onSubmit={handleSubmit(onSubmit)} >
            <FormGroup className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <FormControl type="email" placeholder="Enter email" />
            </FormGroup>

            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="First & Last name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control type="text" placeholder='Enter message here' />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form> */}
        {/* <form id="contact-form"  onSubmit={this.submit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control"  />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form> */}
    </div>
  )
}

export default Contact