import { useState } from 'react';
import './App.css';
import  Axios from 'axios';

function App() {
 const [excuse, setExcuse] = useState('');

 const generatePartyExcuse = () => {
  Axios.get(`https://excuser-three.vercel.app/v1/excuse/party/`).then((res) => {
   setExcuse(res.data[0].excuse);
  })
 }
 const generateFamilyExcuse = () => {
  Axios.get(`https://excuser-three.vercel.app/v1/excuse/family/`).then((res) => {
   setExcuse(res.data[0].excuse);
  })
 }
 const generateOfficeExcuse = () => {
  Axios.get(`https://excuser-three.vercel.app/v1/excuse/office/`).then((res) => {
   setExcuse(res.data[0].excuse);
  })
 }

  return (
    <div className="App">
     <h1>Generate An Excuse</h1>
      <button onClick={generatePartyExcuse}>Party</button>
      <button onClick={generateFamilyExcuse}>Family</button>
      <button onClick={generateOfficeExcuse}>Office</button>

      <h1>{excuse}</h1>
    </div>
  );
}

export default App;
