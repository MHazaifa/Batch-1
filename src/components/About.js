import React from 'react'
import {useState} from 'react';

function About() {
  const [count, setCount] = useState(0);
  // const count2 = 2
 
  return (
    <div>
      <p> {count} </p>
      {/* <h1>{count2}</h1> */}
      <button onClick={() => setCount(count + 10)}>
        Click me
      </button>
      <button onClick={() => setCount(count - 10)}>
        Click me
      </button>
    </div>
  );
}

export default About