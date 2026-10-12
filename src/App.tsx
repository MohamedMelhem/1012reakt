import { useState } from "react";
import "./App.css";

let guest = 0;
function App() {
  const [szoveg,setSzoveg] = useState<string>("Tamás")
  const [item, setItems] = useState<string[]>([]);
  const addItem = () => {
    if (szoveg) {
      setItems([ ...item, szoveg])
      setSzoveg("");                                       

      
    }
  }
  return (
    <>
      {/* <Cup />
      <Cup />
      <Cup /> */}
      <ButtonValue />
      <ButtonValue />
      <ButtonValue />
      <input type="text" placeholder="Ird ide a neved" value={szoveg} 
      onChange={(e) => setSzoveg(e.target.value)}/>
      <p>Név : {szoveg}</p>
      <button onClick={addItem}>Felvesz</button>
      <ul>

        {
          item.map( (item)=>(
            <li key={item}>{item}</li>
          ))
        }

      </ul>
    </>
  );
}

export default App;

function Cup() {
  guest = guest + 1;
  return <p>{guest}</p>;
}
function ButtonValue() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Növelés</button>
    </>
  );
}
