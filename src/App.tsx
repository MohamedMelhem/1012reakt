import { useState } from "react";
import "./App.css";
import { Lampa } from "./components/kepbetolto";


function App() {
 const [allapot, setAllapot] =  useState<string>("ki")
 const [kepallapot, setKepallapot] =  useState<string>("pic_bulbon.gif")


  return (
    <>
      {/* <Cup />
      <Cup />
      <Cup /> */}
      <header>Kapcsoló – Állapotkezelés a Reactben</header>
         <button onClick={ ()=>{ setAllapot(allapot => "be") } }>Fel Kapcsoló</button>
          <button onClick={ ()=>{ setAllapot(allapot => "ki") } }>Le Kapcsoló</button>
          <br />

           <p>{allapot}</p> 
           <button onClick={ ()=>{ setKepallapot(kepallapot => "pic_bulbon.gif") } }>Fel Kapcsoló</button>
            <button onClick={ ()=>{ setKepallapot(kepallapot => "pic_bulboff.gif") } }>Le Kapcsoló</button>
       <Lampa allapot={kepallapot}></Lampa>
       <Lablec></Lablec>
    </>
  );
}

export default App;
function Lablec() {

  return <footer>Lábléc
    <br />1. Lámpa állapota :
    <br />2. Lámpa allapota : 
    <br /> Lámpa tipusa : Sony
  </footer>;
}


