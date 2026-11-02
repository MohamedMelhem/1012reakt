import type { Ruhak } from "../assets/ruhak";

interface RuhaKartyaProps {
  ruha: Ruhak;
  onEdit: (ruha: Ruhak) => void;
  onDelete: (id: number) => void;
}

function RuhaKartya({ ruha, onEdit, onDelete }: RuhaKartyaProps) {
  return (
    <div className="col-12 col-md-6 col-xl-4">
      <div className="card h-100 shadow-sm">
        <img
          src={ruha.image}
          className="card-img-top"
          alt={ruha.name}
          style={{ height: "18rem", objectFit: "cover" }}
        />
        <div className="card-body">
          <h3 className="card-title h5">{ruha.name}</h3>
          <p className="text-secondary">
            {ruha.category} · {ruha.color} · {ruha.size}
          </p>
          <p>Anyag: {ruha.material}</p>
          <p>Márka: {ruha.brand}</p>
          <p>Nem: {ruha.gender}</p>
          <p>Ár: {ruha.price.toLocaleString("hu-HU")} Ft</p>
          <p>Raktáron: {ruha.inStock ? "✅ Igen" : "❌ Nem"}</p>
        </div>
        <div className="card-footer d-flex gap-2">
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => onEdit(ruha)}
          >
            Módosítás
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDelete(ruha.id)}
          >
            Törlés
          </button>
        </div>
      </div>
    </div>
  );
}

export default RuhaKartya;
