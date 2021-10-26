import React, {useState} from 'react';
import './App.css';
import Table from './components/Tables';
import axios from 'axios';

function App() {
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);

//   const headers = ["fname", "lname"];
//   const data = [
//   {
//     fname: "nitish",
//     lname: "aggarwal"
//   },
//   {
//     fname: "anshul",
//    lname: "sharma"
//   }
// ]; 

  const loadData = async () => {
    const {data} = await axios.get(
      "http://universities.hipolabs.com/search?country=Australia"
    );
    console.log(data);
    setData(data);
    console.log(Object.entries(data));
    setHeaders(Object.keys(data[0]));
  }

  const deleteLastItem = () => {
    const newData = data.splice(0, data.length - 1);
    setData(newData);
    setHeaders(Object.keys(data[0]));
  }

  const addFirstItemToLast  = () => {
    const newData = [...data, data[0]];
    setData(newData);
    setHeaders(Object.keys(data[0]));
  }

  return (
    <div className="App">
      <button onClick={loadData}>LOAD</button>
      <button onClick={deleteLastItem}>DELETE</button>
      <button onClick={addFirstItemToLast}>ADD</button>
      <Table headers={headers} data={data}/>
    </div>
  );
}

export default App;
