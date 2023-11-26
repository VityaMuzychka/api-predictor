import { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
const [name, setName] = useState('');
const [predictedData, setPredictedData] = useState(null);

 const fetchData = () => {
  Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
    setPredictedData(res.data);
  })
 }

  return (
    <div className="App">
    <div>
     <input placeholder='Name...' onChange={(event) => setName(event.target.value)}/>
     <button onClick={fetchData}>Predict Data</button>
     
     <h2>Predicted Name: {predictedData?.name}</h2>
     <h2>Predicted Age: {predictedData?.age}</h2>
     <h2>Count of Users: {predictedData?.count}</h2>
     </div>
    </div>
  );
}

export default App;
