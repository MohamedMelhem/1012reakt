export interface SzambevitelProps {
  szam: number;
szam1: number;
  setSzam: (value: number) => void;
  setSzam1: (value: number) => void;
}

export function Szambevitel({ szam,szam1, setSzam, setSzam1 }: SzambevitelProps) {
  return (
    <>
      <input
        type="number"
        placeholder="irj be egy számot"
        value={szam}
        onChange={(e) => setSzam(Number(e.target.value))}
      />
        <input
        type="number"
        placeholder="irj be egy számot"
        value={ szam1}
        onChange={(e) => setSzam1(Number(e.target.value))}
      />
  
    </>
  );
}