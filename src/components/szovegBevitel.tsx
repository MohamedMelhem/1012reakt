export interface SzovegbevitelProps {
  name: string;
  setName: (value: string) => void;
}

export function Szovegbevitel({ name, setName }: SzovegbevitelProps) {
  return (
    <>
      <input
        type="text"
        placeholder="Név"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name.length > 0 ? <p>Név: {name}</p> : <p>nincs semmi kiirva</p>}
    </>
  );
}