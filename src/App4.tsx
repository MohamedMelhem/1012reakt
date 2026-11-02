
// import { useState } from "react";
// import "./App.css";
// import { Szambevitel } from "./components/szambevitel";


// function App() {

//   const [szam, setSzam] =  useState<number>(0)
//   const [szam1, setSzam1] =  useState<number>(0)


//   return (
//     <>
//       <Fejlec />
//       <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-3xl shadow-xl border border-gray-100">

//   <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
//     🧮 Matematikai kalkulátor
//   </h2>

//   <p className="text-center text-gray-400 mb-8">
//     Két szám matematikai műveletei
//   </p>

//   <div className="bg-gray-50 p-5 rounded-2xl mb-6">
//     <Szambevitel
//       szam={szam}
//       setSzam={setSzam}
//       szam1={szam1}
//       setSzam1={setSzam1}
//     />
//   </div>

//   <div className="space-y-4">

//     <div className="bg-blue-100 p-5 rounded-2xl">
//       <p className="text-blue-700 font-semibold">➕ Összeg</p>
//       <p className="text-3xl font-bold text-blue-900 mt-2">
//         {szam1 + szam}
//       </p>
//     </div>

//     <div className="bg-purple-100 p-5 rounded-2xl">
//       <p className="text-purple-700 font-semibold">➖ Különbség</p>
//       <p className="text-3xl font-bold text-purple-900 mt-2">
//         {szam - szam1}
//       </p>
//     </div>

//     <div className="bg-green-100 p-5 rounded-2xl">
//       <p className="text-green-700 font-semibold">✖️ Szorzat</p>
//       <p className="text-3xl font-bold text-green-900 mt-2">
//         {szam * szam1}
//       </p>
//     </div>

//   </div>
// </div>

//       <Lablec />
//     </>
//   );
// }

// export default App;

// function Fejlec() {
//   return <header>Számológép</header>;
// }

// function Lablec() {
//   return <footer>Lábléc</footer>;
// }


