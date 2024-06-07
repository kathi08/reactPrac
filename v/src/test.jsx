import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function Test() {
    const [products, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((y) => setData(y.data));
      }, []);

      const handleSearch = () => {

       let filterd = products.filter((v) => v.title.includes(searchTerm))
       setData(filterd);
      };


  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {products.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
