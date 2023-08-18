import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, { useState } from 'react';


 
function App() {
  const [mode, setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042741';
      showAlert("DarkMode has been Enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode has been Enabled","success")
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert Alert={alert}/>
    <div className="container my-3">
    <Textarea showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
    
    </div>
    </> 
  );
}

export default App;