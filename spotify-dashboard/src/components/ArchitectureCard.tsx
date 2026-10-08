type ArchitectureItem = {
  name: string;
  layer: string;
  description: string;
  tech: string[];
};

export default function ArchitectureCard({ item }: { item: ArchitectureItem }) {
  return (
    <div className="arch-card">
      <h3>{item.name}</h3>
      <p><strong>Layer:</strong> {item.layer}</p>
      <p>{item.description}</p>
      <p><strong>Tech:</strong> {item.tech.join(", ")}</p>
    </div>
  );
}
