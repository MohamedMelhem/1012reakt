import { useState, type FormEvent } from "react";
import type { Ruhak } from "../assets/ruhak";
import RuhaUrlap from "./ruhaUrlap";

interface ModeratorProps {
  ruhak: Ruhak[];
  onMentes: (ruha: Ruhak) => void;
}

function Moderator({ ruhak, onMentes }: ModeratorProps) {
  const [szerkesztettRuha, setSzerkesztettRuha] = useState<Ruhak | null>(null);
  const [nev, setNev] = useState("");
  const [kategoria, setKategoria] = useState("");
  const [ar, setAr] = useState("");

  function szerkesztesInditasa(ruha: Ruhak) {
    setSzerkesztettRuha(ruha);
    setNev(ruha.name);
    setKategoria(ruha.category);
    setAr(String(ruha.price));
  }

  function mentes(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (szerkesztettRuha !== null) {
      onMentes({
        ...szerkesztettRuha,
        name: nev,
        category: kategoria,
        price: Number(ar),
      });
      setSzerkesztettRuha(null);
    }
  }

  return (
    <main className="container py-4">
      <h2>Moderátor felület</h2>
      {szerkesztettRuha !== null && (
        <RuhaUrlap
          nev={nev}
          kategoria={kategoria}
          ar={ar}
          szerkesztettId={szerkesztettRuha.id}
          onNevValtozas={setNev}
          onKategoriaValtozas={setKategoria}
          onArValtozas={setAr}
          onMentes={mentes}
          onMegse={() => setSzerkesztettRuha(null)}
        />
      )}
      <div className="row g-4">
        {ruhak.map((ruha) => (
          <div className="col-12 col-md-6 col-xl-4" key={ruha.id}>
            <div className="card h-100">
              <div className="card-body">
                <p className="mb-3">
                  {ruha.inStock ? "✅ Raktáron van" : "❌ Nincs raktáron"}
                </p>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => szerkesztesInditasa(ruha)}
                >
                  Módosítás
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Moderator;
