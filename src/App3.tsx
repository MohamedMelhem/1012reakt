import { useState } from "react";
import "./App.css";
import { Szovegbevitel } from "./components/szovegBevitel";

function App() {
  const [name, setName] = useState<string>("");
    const [nagybetu, setNagybetu] = useState<string>(name);
    const [kisbetu, setKisbetu] = useState<string>(name);

  return (
    <>
      <Fejlec />
      <Szovegbevitel name={name} setName={setName} />
      <button style={{ backgroundColor: "lightblue", border: "1px solid blue", padding: "10px", margin: "5px" }} onClick={ ()=>{ setNagybetu(name.toUpperCase()), setName("")} }>Nagybetűsítés</button>
      <button style={{ backgroundColor: "lightgreen", border: "1px solid green", padding: "10px", margin: "5px" }} onClick={ ()=>{ setKisbetu(name.toLowerCase()), setName("")} }>Kisbetűsítés</button>
      <button style={{ backgroundColor: "lightgray", border: "1px solid gray", padding: "10px", margin: "5px" }} onClick={ ()=>{ setName(""), setNagybetu(""), setKisbetu("")} }>Visszaállítás</button>
      <p>{kisbetu}</p>
        <p>{nagybetu}</p>
      
      <Lablec nagybetu={nagybetu} kisbetu={kisbetu} />
    </>
  );
}

export default App;

function Fejlec() {
  return <header>Feladat szövegfüggvényekkel</header>;
}

function Lablec({ nagybetu, kisbetu }: { nagybetu: string; kisbetu: string }) {
  return <footer style={{ borderTop: "6px solid red", marginTop: "20px" }}>
    A nagy betus szöveg : {nagybetu}
    <br />A kis betus szöveg : {kisbetu}
  </footer>;
}