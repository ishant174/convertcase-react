import React,{useState} from 'react';
// import Navbar from "./components/Header/Navbar";
import './components/Header/header.css';
import './App.css'
function App() {
  const [casevalue,setValue] = useState('Defualt Text');
  const [upvalue,setUpvalue] = useState('');
  const [copyval,setCopyval] = useState(false);
  const onChangeHandle = (event) => {
    setValue(event.target.value)
  }
  const handleClick = (event)=>{
      console.log('click here');
      setUpvalue(casevalue.toUpperCase());
  }
  const handlelowerClick = (event)=>{
    console.log('click here');
    setUpvalue(casevalue.toLowerCase());
}
const handleCopy = (event)=>{
  console.log('click here');
  navigator.clipboard.writeText(upvalue);
  setCopyval(true);
}
  return (
    <>
      {/* <Navbar logoname="Testing"/> */}
      <div className="container appcontainer">
        <h1 className='centerthing'>Convert case in React</h1>
        <div className="mb-3">
          <h1>Enter your text</h1>
          <textarea className="form-control" value={casevalue} onChange={onChangeHandle} id="inputText" rows="8"></textarea>
        </div>
        <button type="button" onClick = {handleClick} className="btn btn-primary uppercase">Convert to Uppercase</button>
        <button type="button" onClick = {handlelowerClick} className="btn btn-primary">Convert to Lowercase</button>
        <div className="mb-3">
          <h1>Result</h1>
          <textarea className="form-control" value={upvalue} id="outputText" rows="8" readOnly></textarea>
        </div>
        <button type="button" onClick = {handleCopy} className="btn btn-secondary">Copy to clipboard</button>
        {copyval ? <div class="alert alert-success mt-1" role="alert">
 Text copied!
</div>:<></> }
      </div>
    </>
  );
}

export default App;
