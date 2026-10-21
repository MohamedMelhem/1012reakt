
import { useState } from "react";
import "./App.css";
import { Szambevitel } from "./components/szambevitel";


function App() {

  const [szam, setSzam] =  useState<number>(0)
  const [szam1, setSzam1] =  useState<number>(0)


  return (
    <>
      <Fejlec />
      <Szambevitel szam={szam} setSzam={setSzam} szam1={szam1} setSzam1={setSzam1} />
      2 szám összege: {szam + szam1}
      2 szám különbsége: {szam - szam1}
      2 szám szorzata: {szam * szam1}
      <br />

      <Lablec />
    </>
  );
}

export default App;

function Fejlec() {
  return <header>Számológép</header>;
}

function Lablec() {
  return <footer>Lábléc</footer>;
}


