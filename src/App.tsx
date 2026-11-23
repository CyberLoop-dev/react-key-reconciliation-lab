import { useState } from "react";

type Item = { id: number; name: string; tint: string };
const seed: Item[] = [
  { id: 1, name: "Alpha", tint: "#5eead4" },
  { id: 2, name: "Bravo", tint: "#93c5fd" },
  { id: 3, name: "Charlie", tint: "#f9a8d4" },
  { id: 4, name: "Delta", tint: "#fcd34d" },
];
let nextId = 5;

function StatefulCard({ item, position }: { item: Item; position: number }) {
  const [clicks, setClicks] = useState(0);
  return <article className="item-card">
    <div className="card-top"><span className="dot" style={{ background: item.tint }} />
      <span className="position">SLOT {position + 1}</span><span className="item-id">ID #{item.id}</span></div>
    <h3>{item.name}</h3>
    <p>Local component state</p>
    <button className="counter" onClick={() => setClicks(v => v + 1)}>＋ <strong>{clicks}</strong> clicks</button>
  </article>;
}

export default function App() {
  const [items, setItems] = useState(seed);
  const [mode, setMode] = useState<"stable" | "index">("stable");
  const [moves, setMoves] = useState(0);
  const reorder = (next: Item[]) => { setItems(next); setMoves(v => v + 1); };
  const add = () => reorder([...items, { id: nextId++, name: `Item ${nextId - 1}`, tint: ["#c4b5fd","#86efac","#fdba74"][nextId % 3] }]);
  const prepend = () => reorder([{ id: nextId++, name: `New ${nextId - 1}`, tint: "#fda4af" }, ...items]);
  const reverse = () => reorder([...items].reverse());
  const shuffle = () => reorder([...items].sort((a,b) => ((a.id * 17 + moves * 13) % 11) - ((b.id * 17 + moves * 13) % 11)));
  const remove = () => reorder(items.slice(1));
  const reset = () => { setItems(seed); setMoves(0); nextId = 5; };
  return <main className="shell">
    <header className="hero">
      <div className="eyebrow">REACT RECONCILIATION / INTERACTIVE LAB</div>
      <h1>Keys decide <span>identity.</span></h1>
      <p>Give each card a few clicks, then reorder the list. Watch whether local state follows the item or stays in its slot.</p>
      <div className="mode-switch">
        <button className={mode === "stable" ? "active" : ""} onClick={() => setMode("stable")}>Stable ID keys</button>
        <button className={mode === "index" ? "active" : ""} onClick={() => setMode("index")}>Array index keys</button>
      </div>
    </header>
    <section className="toolbar">
      <div><strong>{mode === "stable" ? "item.id" : "index"}</strong><span> is currently used as the React key</span></div>
      <div className="actions">
        <button onClick={prepend}>Prepend</button><button onClick={reverse}>Reverse</button>
        <button onClick={shuffle}>Shuffle</button><button onClick={remove} disabled={!items.length}>Remove first</button>
        <button onClick={add}>Add item</button><button className="quiet" onClick={reset}>Reset</button>
      </div>
    </section>
    <section className="grid">
      {items.map((item, index) => <StatefulCard key={mode === "stable" ? item.id : index} item={item} position={index} />)}
      {!items.length && <div className="empty">The list is empty. Add an item to continue.</div>}
    </section>
    <footer className="insight">
      <span className="pulse" /> <div><strong>{mode === "stable" ? "Stable identity" : "Position identity"}</strong>
      <p>{mode === "stable" ? "A card's local state stays attached to its data item when the list changes." : "React reuses component instances by position, so state can appear to move to a different item after reordering."}</p></div>
      <small>{moves} list changes</small>
    </footer>
  </main>;
}
