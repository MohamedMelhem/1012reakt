import type { Ruhak } from "../assets/ruhak";

interface ModeratorProps {
  ruhak: Ruhak[];
  onMentes: (ruha: Ruhak) => void;
}

function Moderator({ ruhak, onMentes }: ModeratorProps) {
  return (
    <main className="container py-4">
      <h2>Moderátor felület</h2>
      <div className="row g-3">
        {ruhak.map((ruha) => (
          <div className="col-12 col-md-6 col-xl-4" key={ruha.id}>
            <div className="card h-100">
              <div className="card-body d-flex align-items-center justify-content-between gap-3">
                <span>
                  {ruha.inStock ? "✅ Raktáron van" : "❌ Nincs raktáron"}
                </span>
                <div className="form-check form-switch mb-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id={`raktaron-${ruha.id}`}
                    checked={ruha.inStock}
                    onChange={(event) =>
                      onMentes({ ...ruha, inStock: event.target.checked })
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`raktaron-${ruha.id}`}
                  >
                    Módosítás
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Moderator;
