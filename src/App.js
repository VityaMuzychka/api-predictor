import { useState } from 'react';
import './App.css';
import  Axios from 'axios';

function App() {
 const [excuse, setExcuse] = useState('');

 const generateAnExcuse = (excuseKey) => {
  Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseKey}/`).then((res) => {
   setExcuse(res.data[0].excuse);
  })
 }

  return (
    <div className="App">
     <h1>Generate An Excuse</h1>
      <button onClick={() => generateAnExcuse('party')}>Party</button>
      <button onClick={() => generateAnExcuse('family')}>Family</button>
      <button onClick={() => generateAnExcuse('office')}>Office</button>

      <h1>{excuse}</h1>
    </div>
  );
}

export default App;
