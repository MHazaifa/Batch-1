import React from 'react'
import { useState } from 'react';

const Home = (props) => {
  const [Title, setTitle] = useState("hazaifa");
  const [Name, setName] = useState("hassan");
  const Behaviour = (e) => {
    e.preventDefault();
  }
  return (
  <div>
 <form onSubmit={Behaviour}>
  <p>{Title}</p>
  <h1>{Name}</h1>
  <input type="text" value={Name}  placeholder="First name" onChange={(e)=>setName(e.target.value)}/> First name
  <input type="text" value={Title}  placeholder="First name" onChange={(e)=>setTitle(e.target.value)}/> First name
 <button>Click me</button>
  </form>
</div>
  );
}

export default Home