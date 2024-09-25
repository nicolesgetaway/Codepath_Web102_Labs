import './App.css';
import samosa_img from './assets/Samosa.png'

const App = () => {

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: </h2>
        <img className="samosa" src={samosa_img}/>  
      </div>
    </div>
  )
}

export default App
