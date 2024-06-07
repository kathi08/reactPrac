import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function AxiosPrac() {
  const [products, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((y) => setData(y.data));
  }, []);

  return (
    <div>
      {products.filter((v)=>{
        if(v.category == "men's clothing"){
            return v;
        }
      }).map((v) => {
        return <div>{v.title}</div>;
      })}
    </div>
  );
}
