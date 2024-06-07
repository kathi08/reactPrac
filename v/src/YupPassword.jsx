import React from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const validateSchemas = Yup.object().shape({
  degree: Yup.string()
   .required('Required'),
  start: Yup.string()
   .required('Required'),
  end: Yup.string().when('toggle',{
    is: false,
    then: ()=> Yup.string().required('Required')
  })

})

export default function YupPassword() {
  return (
    <div>
         <h1>Sign Up</h1>
    <Formik
      initialValues={{
        degree: '',
        start: '',
        toggle: false,
        end:''
      }}
      validationSchema={validateSchemas}
      onSubmit={ (v) => {
        console.log(v);
      }}
    >
      {({ values })=>(
      <Form>
        <label htmlFor="degree">degree</label>
        <Field id="degree" name="degree" placeholder="degree" />

        <label htmlFor="start">start</label>
        <Field type="date" id="start" name="start" placeholder="start month and year" />

        <label>
            <Field id="toggle" type="checkbox" name="toggle"/>
            <span>pursuing</span>
          </label>

        <label htmlFor="end">end</label>
        <Field
        disabled={values.toggle}
        type="date"
          name="end"
          placeholder="end month and year"
        />
        <button type="submit">Submit</button>
      </Form>
    )}
    </Formik>
    </div>
  )
}
