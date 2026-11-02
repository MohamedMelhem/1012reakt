import type { FormEvent } from "react";

interface RuhaUrlapProps {
  nev: string;
  kategoria: string;
  ar: string;
  szerkesztettId: number | null;
  onNevValtozas: (nev: string) => void;
  onKategoriaValtozas: (kategoria: string) => void;
  onArValtozas: (ar: string) => void;
  onMentes: (event: FormEvent<HTMLFormElement>) => void;
  onMegse: () => void;
}

function RuhaUrlap({
  nev,
  kategoria,
  ar,
  szerkesztettId,
  onNevValtozas,
  onKategoriaValtozas,
  onArValtozas,
  onMentes,
  onMegse,
}: RuhaUrlapProps) {
  return (
    <form className="card card-body mb-4" onSubmit={onMentes}>
      <h3 className="h5 mb-3">
        {szerkesztettId === null ? "Új ruha felvétele" : "Ruha módosítása"}
      </h3>

      <div className="row g-3">
        <div className="col-12 col-md-4">
          <label className="form-label" htmlFor="ruha-nev">
            Név
          </label>
          <input
            id="ruha-nev"
            className="form-control"
            value={nev}
            onChange={(event) => onNevValtozas(event.target.value)}
            required
          />
        </div>

        <div className="col-12 col-md-4">
          <label className="form-label" htmlFor="ruha-kategoria">
            Kategória
          </label>
          <input
            id="ruha-kategoria"
            className="form-control"
            value={kategoria}
            onChange={(event) => onKategoriaValtozas(event.target.value)}
            required
          />
        </div>

        <div className="col-12 col-md-4">
          <label className="form-label" htmlFor="ruha-ar">
            Ár (Ft)
          </label>
          <input
            id="ruha-ar"
            className="form-control"
            type="number"
            min="0"
            value={ar}
            onChange={(event) => onArValtozas(event.target.value)}
            required
          />
        </div>
      </div>

      <div className="d-flex gap-2 mt-4">
        <button type="submit" className="btn btn-primary">
          Mentés
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={onMegse}
        >
          Mégse
        </button>
      </div>
    </form>
  );
}

export default RuhaUrlap;
