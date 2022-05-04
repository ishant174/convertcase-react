import React,{useState} from 'react';
import Navbar from "./components/Header/Navbar";
import './components/Header/header.css';
import About from './components/About/About';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [casevalue,setValue] = useState('Defualt Text');
  const [upvalue,setUpvalue] = useState('');
  const [copyval,setCopyval] = useState(false);
  const [mode,setMode] = useState('Dark');
  const [mystyle,setmyStyle] = useState({
    background: "rgb(151 193 235)",
    color: "black"
  });
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
const clearText = () =>{
  setValue('');
  setUpvalue('');
}
const toggleMode = (event) =>{
  if(mystyle.color === "black"){
    setMode('Light');
    setmyStyle({
      background: "#212529",
      color: "white"
    });
  }else{
    setMode('Dark');
    setmyStyle({
      background: "rgb(151 193 235)",
      color: "black"
    });
    
  }
  
}
  return (
    <>
    <Router>
      <Navbar logoname="Testing" changemode = {toggleMode} mode={mode}/>
      
      {copyval ?<div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Text copied!</strong>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>:<></> }
      
      <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<div className='container'><h1 >Convert case in React</h1><div className="appcontainer" style={mystyle}>
              <div className="mb-3">
                <h1>Enter your text</h1>
                <textarea className="form-control" value={casevalue} onChange={onChangeHandle} id="inputText" rows="8"></textarea>
              </div>
              <button type="button" onClick = {handleClick} className="btn btn-primary uppercase">Convert to Uppercase</button>
              <button type="button" onClick = {handlelowerClick} className="btn btn-primary uppercase">Convert to Lowercase</button>
              <button type="button" onClick = {clearText} className="btn btn-primary uppercase">Clear text</button>
              <div className="mb-3">
                <h1>Result</h1>
                <textarea className="form-control" value={upvalue} id="outputText" rows="8" readOnly></textarea>
              </div>
              <button type="button" onClick = {handleCopy} className="btn btn-secondary">Copy to clipboard</button>

            </div></div>} />
          
        </Routes>
        </Router>
      </>
  );
}

export default App;
