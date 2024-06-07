import React, { useEffect, useState } from 'react'

export const DisplayData = () => {
    const [data,setData] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
       .then(res => res.json()).then(res => setData(res))
    },[]);
  return (
    <div>
        <ul>
            {data.map(item => <li>{item.name}</li>)}
        </ul>
    </div>
  )
}
