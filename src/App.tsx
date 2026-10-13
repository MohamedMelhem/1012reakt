import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState<number[]>([1, 2, 3]);

  return (
    <>
    <body style={{ backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}>
      <Fejlec />

      <button
        onClick={() => {
          setColor([
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
            Math.floor(Math.random() * 101),
          ]);
        }}
      >
        Generate Random Color
      </button>

      <Lablec color={color} />
      </body>
    </>
  );
}

export default App;

function Fejlec() {
  return <header style={{ color: "white" }}>Color Changer</header>;
}

function Lablec({ color }: { color: number[] }) {
  return <footer style={{ color: "white" }}>A szin kodja % ba : {color[0]}% {color[1]}% {color[2]}%</footer>;
}
