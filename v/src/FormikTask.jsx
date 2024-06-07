import React from 'react'
import { Formik, Field, Form } from 'formik';

function check (e){
    // console.log(e);
    if(e.target.checked === true){
    let x = document.getElementById('tad').value; 
    document.getElementById('pad').value = x;
}
}
export default function FormikTask() {
  return (
    <div>
         <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        tempAddress: '',
        toggle: false,
        preAddresses:''
      }}
      onSubmit={ (v) => {
        console.log(v);
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <label htmlFor="temporary address">temporary address</label>
        <Field
          id="tad"
          name="temporaryAddress"
          placeholder="111"
        />
        <label>
            <Field type="checkbox" name="toggle" onClick={check}/>
            <span>both address are same</span>
          </label>

        <label htmlFor="permenant address">permenant address</label>
        <Field
          id="pad"
          name="permenantAddress"
          placeholder="113"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </div>
  )
}
