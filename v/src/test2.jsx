import React from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const validateSchemas = Yup.object().shape({
    firstName: Yup.string()
   .required('Required'),
   lastName: Yup.string()
   .required('Required'),
   email: Yup.string().email('invalid').required('Email'),
   address1: Yup.string().required('Required'),
   address2: Yup.string(),
   city: Yup.string().required('Required'),
   state: Yup.string().required('Required'),
})

export default function Test1() {
  return (
    <div>
    <h1>Sign Up</h1>
<Formik
  initialValues={{
    firstName: '',
    lastName: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
  }}

  validationSchema={validateSchemas}
  
  onSubmit={ (v) => {
    console.log(v);
  }}
>
 {({ values })=>(
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
     <label htmlFor="lastName">address1</label>
    <Field id="address1" name="address1" placeholder="address1" />

    <label htmlFor="lastName">address 2</label>
    <Field id="address2" name="address2" placeholder="address2" />

    <label htmlFor="lastName">city</label>
    <Field id="city" name="city" placeholder="city" />

    <label htmlFor="lastName">state</label>
    <Field id="state" name="state" placeholder="state" />

    
    <button type="submit">Submit</button>
  </Form>
 )}
</Formik>
</div>
  )
}
