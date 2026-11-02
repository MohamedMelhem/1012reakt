import { useState, type FormEvent } from "react";
import type { Ruhak } from "../assets/ruhak";
import RuhaKartya from "./ruhaKartya";
import RuhaUrlap from "./ruhaUrlap";

interface AdminProps {
  aktiv: boolean;
  ruhak: Ruhak[];
  setRuhak: (ruhak: Ruhak[]) => void;
}

function Admin({ aktiv, ruhak, setRuhak }: AdminProps) {
  const [nev, setNev] = useState("");
  const [kategoria, setKategoria] = useState("");
  const [ar, setAr] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  function openNewForm() {
    setEditingId(null);
    setNev("");
    setKategoria("");
    setAr("");
    setIsFormOpen(true);
  }

  function openEditForm(ruha: Ruhak) {
    setEditingId(ruha.id);
    setNev(ruha.name);
    setKategoria(ruha.category);
    setAr(String(ruha.price));
    setIsFormOpen(true);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (editingId !== null) {
      const frissRuhak = ruhak.map((ruha) => {
        if (ruha.id === editingId) {
          return { ...ruha, name: nev, category: kategoria, price: Number(ar) };
        }
        return ruha;
      });
      setRuhak(frissRuhak);
    } else {
      const ujRuha: Ruhak = {
        id: Math.max(...ruhak.map((ruha) => ruha.id), 0) + 1,
        name: nev,
        category: kategoria,
        color: "-",
        size: "-",
        material: "-",
        price: Number(ar),
        brand: "-",
        gender: "-",
        image: "",
        inStock: true,
      };
      setRuhak([...ruhak, ujRuha]);
    }

    setIsFormOpen(false);
    setEditingId(null);
  }

  function deleteRuha(id: number) {
    const frissRuhak = ruhak.filter((ruha) => ruha.id !== id);
    setRuhak(frissRuhak);
  }

  if (!aktiv) {
    return null;
  }

  return (
    <main className="container py-4">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <h2 className="mb-0">Admin felület</h2>
        <button type="button" className="btn btn-success" onClick={openNewForm}>
          Új ruha felvétele
        </button>
      </div>

      {isFormOpen && (
        <RuhaUrlap
          nev={nev}
          kategoria={kategoria}
          ar={ar}
          szerkesztettId={editingId}
          onNevValtozas={setNev}
          onKategoriaValtozas={setKategoria}
          onArValtozas={setAr}
          onMentes={handleSubmit}
          onMegse={() => setIsFormOpen(false)}
        />
      )}

      <div className="row g-4">
        {ruhak.map((ruha) => (
          <RuhaKartya
            key={ruha.id}
            ruha={ruha}
            onEdit={openEditForm}
            onDelete={deleteRuha}
          />
        ))}
        {ruhak.length === 0 && (
          <p className="text-secondary">Még nincs felvett ruha.</p>
        )}
      </div>
    </main>
  );
}

export default Admin;
