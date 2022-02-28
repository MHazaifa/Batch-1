
import './App.css';

import {useState} from 'react';
import Home from './Home';


function App() {
 
  return (
    <div>
     
      <Home/>
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
//  const styleCondition = true;
 
//   //   const str = 'huz';
//   // const num = 4 + 5;
//   // const obj = {name: 'huzaifa', age: '23'};

//   return(
//     <h1 style={styleCondition ? dynamicStyle2 : styleCondition3}>Hazaifa</h1>
//   );
// }
//    if(styleCondition){
//      return (
//        <div>
//          <h1 style={{backgroundColor : "blue"}}>Hazaifa</h1>
//          <h3 style={styleCondition ? styleCondition3 : styleCondition3}>Hassan</h3>
//        </div>
//      );
//    }
//     else{
//       return (
//         <div>
//           <h2>Awan</h2>
//         </div>
//       );
//     }
  

export default App;
