
import { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(5);
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
  
//   const styleCondition3 = {
   
//     color : 'red',
//     backgroundColor : 'blue'
//    }
//    const dynamicStyle2 = {
   
//     color : 'yellow',
//     backgroundColor : 'red'
//    }
//  const styleCondition = false;
 
//   //   const str = 'huz';
//   // const num = 4 + 5;
//   // const obj = {name: 'huzaifa', age: '23'};

//   return(
//     <h1 style={styleCondition ? dynamicStyle2 : styleCondition3}>Hazaifa</h1>
//   );
// }
  //  if(styleCondition){
  //    return (
  //      <div>
  //        <h1 style={{backgroundColor : "blue"}}>Hazaifa</h1>
  //        <h3 style={styleCondition ? styleCondition3 : styleCondition3}>Hassan</h3>
  //      </div>
  //    );
  //  }
  //   else{
  //     return (
  //       <div>
  //         <h2>Awan</h2>
  //       </div>
  //     );
  //   }
  

export default App;
