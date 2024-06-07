import React, { useState } from 'react'

export const Counter = () => {
    const [a, cou] = useState(0)
    const add = () => {
        cou(a + 1)
    }
    const remove = () => {
        cou(a - 1)
    }
  return (
    <div>{a}<button onClick={add}>+</button><button onClick={remove}>-</button></div>
  )
}
