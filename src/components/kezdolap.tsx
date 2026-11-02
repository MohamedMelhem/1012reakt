import type { Ruhak } from "../assets/ruhak";

interface KezdolapProps {
  ruhak: Ruhak[];
}

function Kezdolap({ ruhak }: KezdolapProps) {
  return (
    <main className="container py-4">
      <h2>Kezdőlap</h2>
      <div className="row g-4">
        {ruhak.map((ruha) => (
          <div className="col-12 col-md-6 col-xl-4" key={ruha.id}>
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title h5">{ruha.name}</h3>
                <p>Kategória: {ruha.category}</p>
                <p>Szín: {ruha.color}</p>
                <p>Méret: {ruha.size}</p>
                <p>Anyag: {ruha.material}</p>
                <p>Ár: {ruha.price} Ft</p>
                <p>Márka: {ruha.brand}</p>
                <p>Nem: {ruha.gender}</p>
                <p>Raktáron: {ruha.inStock ? "✅ Igen" : "❌ Nem"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Kezdolap;
