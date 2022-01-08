// import './App.css'; 
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';

// import About from './components/About';
// import TextForm from './components/TextForm';


// import {
//   BrowserRouter as Router,
  
//   Route
  
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light"); //wheather  light or dark mode
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      showAlert();
    }, 3000);
  }
  const togglemode=()=>
  {
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor="#6E7582";
      showAlert("Dark mode had initiated","success");
      document.title= "Textutils-Dark mode";
      // setInterval(() => {
      //   document.title="Virus🍅"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Virus Initiated!🔔"
      // }, 1500);
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor="#AEFEFF";
      showAlert("Light mode had initiated","success");

      // setInterval(() => {
      //   document.title="Textutils-Dark mode";
      // }, 1000);

    }
  }



  return (

    <>
   
  

    <div className="container my-3">
    <Navbar title="Avinash singh" mode={mode} togglemode={togglemode}/>
          <Alert alert={alert}/>
   
          
      

            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        
    
    </div>
   


  
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
    
    </div>
    </Router> */}
    </>
   
  );
}

export default App;