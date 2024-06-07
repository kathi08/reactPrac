import React, { useState } from 'react'
import { reviews } from './app'

export const Home = () => {


  const[index,setIndex] = useState(0);


  const sup = () =>{
    let num = (Math.random() * 10)/3;
    let num1 = Math.floor(num);
    setIndex(num1)
  }
  const next = () => {
    
    if(index >= reviews.length - 1){
      setIndex(0);
    }else{
    setIndex(index + 1)
    }
  }

  const prev = () => {
    
    if(index <= 0){
      setIndex(reviews.length - 1);
    }else{
      setIndex(index - 1)
    }
  }
  return (

    <div>
    <main>
     <section className="container" id="disp">
      
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        
        <article className="review">
          <div className="img-container">
            <img src={reviews[index].img} id="person-img" alt="" />
          </div>
          <h4 id="author">{reviews[index].name}</h4>
          <p id="job">{reviews[index].job}</p>
          <p id="info">
          {reviews[index].text}
          </p>
          
          <div className="button-container">
            <button className="prev-btn" onClick={prev}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="next-btn" onClick={next}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          
          <button className="random-btn" onClick={sup}>surprise me</button>
        </article>
      </section>
      </main>
    </div>
  )
}
