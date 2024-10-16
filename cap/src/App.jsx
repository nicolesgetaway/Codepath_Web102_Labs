import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import APIForm from './components/APIform.jsx';

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [inputs, setInputs] = useState({
    url: "",
    width: "",
    heigth: "",
    no_ads: "",
    format: "",
  })

  const submitForm = () => {
    
  }

  return (
    <>
    <div className="whole-page">
      <h1>Build Your Own Screenshot! 📸</h1>
      
      <APIForm
        inputs={inputs}
        handleChange={(e) =>
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.trim(),
          }))
        }
        onSubmit={submitForm}
      />
      <br></br>

    </div>
    </>
  )
}

export default App
