
import './App.css';
import Table from './components/Tables';

function App() {
  const headers = ["fname", "lname"];
  const data = [
  {
    fname: "nitish",
    lname: "aggarwal"
  },
  {
    fname: "anshul",
   lname: "sharma"
  }
]; 

  return (
    <div className="App">
      <Table headers={headers} data={data}/>
    </div>
  );
}

export default App;
