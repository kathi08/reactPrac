import React, { useState } from 'react'

export default function RegistrationForm() {

    const [frm,setForm] = useState(
        {
            firstName: "",
            lastName: ""
        }
    );

    const handleChange = (e) => {
        setForm({...frm, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(frm);
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>

    <input type="text" name="FirstName" placeholder="FirstName" onChange={handleChange}  />
    <input type="text" name="LastName" placeholder="LastName" onChange={handleChange}/>
    <button type='submit'>submit</button>

    </form>

 
    </div>
  )
}
