import React, { useState } from "react";
import { a } from "./jsn";

export const Json = () => {
  const [ab, b] = useState(a);
  const [flag, setflag] = useState(false);

  const del = () => {
    console.log(flag);
    // document.querySelector('.list1').style.display = 'none'
    // b(ab.splice(0,ab.length));

    if (flag === true) {
      b(a);
    } else {
      b([]);
    }

    setflag(!flag);

    // console.log(ab.length);
  };
  return (
    <div>
      <div className="container">
        {/* headdind */}
        <div>
          <h1>{a.length} birthdays today</h1>
        </div>
        {/* list */}
        <div className="list1">
          {ab.map((v) => {
            return (
              <div className="list">
                <div className="photos">
                  <img className="photo" src={v.image} alt={v.image} />
                </div>
                <div className="details">
                  <p>{v.name}</p>
                  <p>{v.age}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <button className="btn" onClick={del}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
