import chuck from './img/chuck.gif';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios'

function App(){
  
  const [fact,setFact] = useState ("");
  async function getFact(){
    const urlAPI="https://api.chucknorris.io/jokes/random"
    axios
      .request(urlAPI)
      .then((response)=>setFact(response.data.value))
      .catch((error)=> console.log(error));
  }
  return (
    <div className="container">
      <div className="timmy">
        <div className="tino">
        <h1 className="title">Chuck Norris API</h1>
        <br className="barra"></br>
        <button className="bottone"
        type="button"
        onClick={()=>{
          getFact();
          console.log("hello");
      }}  
        > Barzelletta!
        </button>
        <p className="testo">{fact}</p>
         <img src={chuck} alt="chuck"/>
            </div>
          </div>
        </div>
 

  );
}

export default App;
