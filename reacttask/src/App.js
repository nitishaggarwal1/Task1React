import React, {useState, useRef} from 'react';
import './App.css';
import Table from './components/Tables';
import axios from 'axios';
import Card from './UI/Card';

function App() {
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);

  const addButton = useRef();
  const deleteButton= useRef();


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
    console.log(newData.length);
    if(newData.length >= 0){
      setData(newData);
      setHeaders(Object.keys(data[0]));
    }
  }

  const addFirstItemToLast  = () => {
    const newData = [...data, data[0]];
    console.log(newData.length);
    if(newData.length <= 1){
      console.log(newData.length);
    }else {
      setData(newData);
      setHeaders(Object.keys(data[0]));
    }
  }

  return (
    <Card>
      <div className="button-actions">
        <button onClick={loadData}>LOAD</button>
        {data.length===0 ? '' : 
        <React.Fragment> 
        <button ref={deleteButton} onClick={deleteLastItem}>DELETE</button>
        <button ref={addButton} onClick={addFirstItemToLast}>ADD</button>
        </React.Fragment>
        }
      </div>
      <Table headers={headers} data={data}/>
    </Card>
  );
}

export default App;
