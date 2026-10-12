import { useState } from "react";
import "./App.css";


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



  );
}
