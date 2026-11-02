import { useState } from "react";
import type { Ruhak } from "./assets/ruhak";
import ruhakData from "./assets/ruhak.json";
import Admin from "./components/admin";
import Kezdolap from "./components/kezdolap";
import Moderator from "./components/moderator";
type Menu = "index" | "admin" | "moderator";

function App() {
  const [menu, setMenu] = useState<Menu>("index");
  const [ruhak, setRuhak] = useState<Ruhak[]>(ruhakData);

  function ruhaModositasa(modositottRuha: Ruhak) {
    const frissRuhak = ruhak.map((ruha) => {
      if (ruha.id === modositottRuha.id) {
        return modositottRuha;
      }
      return ruha;
    });
    setRuhak(frissRuhak);
  }

  return (
    <>
      <nav className="nav nav-pills gap-2 mb-3" aria-label="Fő navigáció">
        <button
          type="button"
          className={`nav-link ${menu === "index" ? "active" : ""}`}
          aria-current={menu === "index" ? "page" : undefined}
          onClick={() => setMenu("index")}
        >
          Kezdőlap
        </button>
        <button
          type="button"
          className={`nav-link ${menu === "admin" ? "active" : ""}`}
          aria-current={menu === "admin" ? "page" : undefined}
          onClick={() => setMenu("admin")}
        >
          Admin
        </button>
        <button
          type="button"
          className={`nav-link ${menu === "moderator" ? "active" : ""}`}
          aria-current={menu === "moderator" ? "page" : undefined}
          onClick={() => setMenu("moderator")}
        >
          Moderátor
        </button>
      </nav>

      <hr />

      {menu === "index" && (
        <Kezdolap ruhak={ruhak} />
      )}

      <Admin aktiv={menu === "admin"} ruhak={ruhak} setRuhak={setRuhak} />

      {menu === "moderator" && (
        <Moderator ruhak={ruhak} onMentes={ruhaModositasa} />
      )}
    </>
  );
}

export default App;
